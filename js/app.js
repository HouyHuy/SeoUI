/* ==========================================================================
   Shared app logic — cart (localStorage), theme toggle, utilities
   Loaded on every page. Integrates with Alpine.js for reactive UI.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Theme — applied as early as possible to avoid flash (see inline head script)
   -------------------------------------------------------------------------- */

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme === "dark" ? "dark" : "";
}

function getTheme() {
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}

function toggleTheme() {
  const isDark = document.documentElement.dataset.theme === "dark";
  const next = isDark ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
  document.dispatchEvent(new CustomEvent("theme:change", { detail: { theme: next } }));
}

/* Apply saved theme immediately */
applyTheme(getTheme());

/* --------------------------------------------------------------------------
   Formatting helpers
   -------------------------------------------------------------------------- */

function formatPrice(n) {
  return new Intl.NumberFormat("vi-VN").format(Number(n) || 0) + "₫";
}

function renderStars(rating) {
  const full = Math.round(Number(rating) || 0);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

/* --------------------------------------------------------------------------
   Cart — persisted in localStorage under "cart"
   item shape: { id, name, price, qty, color, size, image }
   -------------------------------------------------------------------------- */

const cart = {
  items: [],

  load() {
    try {
      this.items = JSON.parse(localStorage.getItem("cart") || "[]");
    } catch (e) {
      this.items = [];
    }
    return this.items;
  },

  save() {
    localStorage.setItem("cart", JSON.stringify(this.items));
    document.dispatchEvent(new CustomEvent("cart:change"));
  },

  /* upsert by id + variant (color/size) */
  add(product, qty = 1, opts = {}) {
    const color = opts.color || (product.colors && product.colors[0]) || null;
    const size = opts.size || (product.sizes && product.sizes[0]) || null;
    const key = `${product.id}|${color}|${size}`;
    const existing = this.items.find(i => i.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({
        key,
        id: product.id,
        name: product.name,
        price: product.price,
        qty,
        color,
        size
      });
    }
    this.save();
  },

  remove(key) {
    this.items = this.items.filter(i => i.key !== key);
    this.save();
  },

  setQty(key, qty) {
    const item = this.items.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, Number(qty) || 1);
    this.save();
  },

  clear() {
    this.items = [];
    this.save();
  },

  total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  }
};

cart.load();

/* --------------------------------------------------------------------------
   Alpine.js integration
   -------------------------------------------------------------------------- */

document.addEventListener("alpine:init", () => {
  /* Reactive cart store used by header badge + cart page */
  Alpine.store("cart", {
    items: cart.items,
    get count() {
      return this.items.reduce((s, i) => s + i.qty, 0);
    },
    get total() {
      return this.items.reduce((s, i) => s + i.price * i.qty, 0);
    },
    sync() {
      cart.load();
      this.items = cart.items;
    },
    add(product, qty = 1, opts = {}) {
      cart.add(product, qty, opts);
      this.sync();
    },
    remove(key) {
      cart.remove(key);
      this.sync();
    },
    setQty(key, qty) {
      cart.setQty(key, qty);
      this.sync();
    },
    clear() {
      cart.clear();
      this.sync();
    }
  });

  /* Reactive theme store */
  Alpine.store("theme", {
    get current() {
      return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    },
    get isDark() {
      return this.current === "dark";
    },
    toggle() {
      toggleTheme();
    }
  });

  /* Shared header component */
  Alpine.data("header", () => ({
    mobileOpen: false,
    searchOpen: false,
    query: "",
    open() { this.mobileOpen = true; },
    close() { this.mobileOpen = false; },
    submitSearch() {
      const q = this.query.trim();
      window.location.href = "index.html" + (q ? "#products" : "#products");
    }
  }));

  /* Toast helper component */
  Alpine.data("toast", () => ({
    show: false,
    message: "",
    fire(msg) {
      this.message = msg;
      this.show = true;
      clearTimeout(this._t);
      this._t = setTimeout(() => (this.show = false), 3000);
    }
  }));
});

/* --------------------------------------------------------------------------
   Form validation helpers (used by login/register/contact)
   -------------------------------------------------------------------------- */

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function passwordStrength(pw) {
  let score = 0;
  if (!pw) return 0;
  if (pw.length >= 6) score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw) && /[^A-Za-z0-9]/.test(pw)) score++;
  return Math.min(score, 4);
}

/* Expose globally */
if (typeof window !== "undefined") {
  window.cart = cart;
  window.toggleTheme = toggleTheme;
  window.formatPrice = formatPrice;
  window.renderStars = renderStars;
  window.isValidEmail = isValidEmail;
  window.passwordStrength = passwordStrength;
}
