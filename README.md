# STORE — E-commerce tĩnh (HTML + Tailwind CDN + Alpine.js)

Website bán hàng tối giản (monochrome black), **không cần build step**, deploy bằng cách mở `index.html` hoặc upload lên bất kỳ static host nào (Netlify, GitHub Pages, Vercel, shared hosting).

## Stack
- HTML5 semantic
- [Tailwind CSS](https://cdn.tailwindcss.com) qua CDN (cấu hình màu map sang CSS variables)
- [Alpine.js 3](https://alpinejs.dev) qua CDN (tương tác UI: drawer, tabs, selectors, cart)
- Vanilla JS + `localStorage` cho giỏ hàng & theme
- Google Fonts: Inter

Không React/Vue, không npm, không `.env`.

## Cấu trúc
```
index.html        Trang chủ (hero, danh mục, sản phẩm nổi bật, banner, testimonials)
product.html      Chi tiết sản phẩm (gallery, color/size, quantity, tabs, related)
login.html        Đăng nhập (validate, show/hide password, Google button)
register.html     Đăng ký (password strength bar, đồng ý điều khoản)
profile.html      Tài khoản (sidebar + 4 tab: info, orders, address, password)
contact.html      Liên hệ (info + form + success toast)
cart.html         Giỏ hàng (items, summary, coupon, empty state)
css/style.css     CSS variables (light/dark) + base + component styles
js/data.js        8 sản phẩm mock
js/app.js         Cart (localStorage), theme toggle, validation, Alpine stores
robots.txt        Allow all + sitemap
sitemap.xml       7 trang
```

## Chạy local
Chỉ cần mở `index.html` bằng trình duyệt. Hoặc chạy server tĩnh:
```bash
python3 -m http.server 8000
# mở http://localhost:8000
```

## Deploy
- **Netlify**: kéo-thả thư mục vào netlify.com/drop
- **GitHub Pages**: push lên repo, bật Pages từ branch
- **Vercel**: import repo, framework preset = "Other" (static)

## Tính năng
- Light/Dark theme (lưu `localStorage`, không nhấp nháy khi load)
- Giỏ hàng lưu `localStorage`, badge số lượng đồng bộ realtime mọi trang
- Mã giảm giá demo: `STORE10` (giảm 10%), freeship đơn ≥ 500.000₫
- SEO: meta description/keywords, Open Graph, Twitter card, canonical, JSON-LD, robots, sitemap
- Accessibility: skip link, alt text, label liên kết input, aria-label cho icon button, focus ring
