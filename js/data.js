/* ==========================================================================
   Mock product data
   Used by: index.html, product.html, cart.html
   ========================================================================== */

const products = [
  {
    id: 1,
    name: "Áo thun basic",
    slug: "ao-thun-basic",
    category: "Áo",
    price: 299000,
    oldPrice: 399000,
    badge: "SALE",
    rating: 4.5,
    reviews: 128,
    colors: ["#0A0A0A", "#FFFFFF", "#525252"],
    sizes: ["XS", "S", "M", "L", "XL"],
    short: "Áo thun cotton mềm mại, form regular fit, dễ phối đồ hằng ngày.",
    description:
      "Áo thun basic được dệt từ 100% cotton cao cấp, thoáng khí và thấm hút mồ hôi tốt. Form regular fit tôn dáng, đường may chắc chắn, giữ phom sau nhiều lần giặt. Item không thể thiếu trong tủ đồ tối giản.",
    specs: { material: "100% cotton", weight: "180gsm", origin: "Việt Nam", care: "Giặt máy ≤ 30°C" }
  },
  {
    id: 2,
    name: "Áo sơ mi linen",
    slug: "ao-so-mi-linen",
    category: "Áo",
    price: 549000,
    oldPrice: null,
    badge: "HOT",
    rating: 4.8,
    reviews: 86,
    colors: ["#FFFFFF", "#525252", "#0A0A0A"],
    sizes: ["S", "M", "L", "XL"],
    short: "Sơ mi linen thoáng mát, lý tưởng cho mùa hè và phong cách smart-casual.",
    description:
      "Sơ mi linen pha cotton tạo cảm giác mát lạnh, đứng phom nhẹ. Cổ áo vừa vặn, có thể mặc đi làm hoặc dạo phố. Màu trung tính dễ phối với quần âu hoặc jeans.",
    specs: { material: "55% linen, 45% cotton", weight: "150gsm", origin: "Việt Nam", care: "Giặt tay khuyến nghị" }
  },
  {
    id: 3,
    name: "Quần jeans slim",
    slug: "quan-jeans-slim",
    category: "Quần",
    price: 699000,
    oldPrice: 899000,
    badge: "SALE",
    rating: 4.3,
    reviews: 204,
    colors: ["#0A0A0A", "#1C1C1C", "#525252"],
    sizes: ["28", "29", "30", "31", "32", "34"],
    short: "Jeans slim co giãn nhẹ, ôm dáng mà vẫn thoải mái vận động.",
    description:
      "Quần jeans slim fit với chất denim co giãn 2 chiều, ôm vừa phải tôn dáng chân. Màu đen wash bền màu, dễ phối cùng áo thun hoặc sơ mi. Túi sâu tiện dụng.",
    specs: { material: "98% cotton, 2% spandex", weight: "12oz", origin: "Việt Nam", care: "Giặt mặt trái" }
  },
  {
    id: 4,
    name: "Quần jogger nỉ",
    slug: "quan-jogger-ni",
    category: "Quần",
    price: 459000,
    oldPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 73,
    colors: ["#0A0A0A", "#525252", "#A3A3A3"],
    sizes: ["S", "M", "L", "XL"],
    short: "Jogger nỉ bông ấm áp, bo gấu gọn gàng, phong cách năng động.",
    description:
      "Quần jogger chất nỉ bông dày dặn, mềm mịn bên trong. Cạp chun kèm dây rút, bo gấu ôm cổ chân tạo dáng thể thao. Lý tưởng cho ngày se lạnh hoặc tập luyện nhẹ.",
    specs: { material: "80% cotton, 20% polyester", weight: "280gsm", origin: "Việt Nam", care: "Giặt máy ≤ 30°C" }
  },
  {
    id: 5,
    name: "Giày sneaker trắng",
    slug: "giay-sneaker-trang",
    category: "Giày",
    price: 1290000,
    oldPrice: 1590000,
    badge: "HOT",
    rating: 4.7,
    reviews: 312,
    colors: ["#FFFFFF", "#0A0A0A"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    short: "Sneaker tối giản phối mọi outfit, đế cao su êm chân.",
    description:
      "Giày sneaker thiết kế tối giản với upper da PU cao cấp, dễ vệ sinh. Đế cao su đúc nguyên khối êm ái, bám tốt. Phong cách trung tính phù hợp cả nam và nữ.",
    specs: { material: "Da PU + đế cao su", weight: "320g/chiếc", origin: "Việt Nam", care: "Lau bằng khăn ẩm" }
  },
  {
    id: 6,
    name: "Giày lười da",
    slug: "giay-luoi-da",
    category: "Giày",
    price: 1490000,
    oldPrice: null,
    badge: null,
    rating: 4.4,
    reviews: 58,
    colors: ["#0A0A0A", "#1C1C1C"],
    sizes: ["39", "40", "41", "42", "43"],
    short: "Giày lười da lịch lãm, lót êm, phù hợp công sở.",
    description:
      "Giày lười (loafer) da bò thật, đường khâu tinh tế, tạo vẻ lịch lãm. Lót giày đệm êm, đế khâu chắc chắn. Dễ dàng kết hợp với quần âu hoặc chinos.",
    specs: { material: "Da bò thật", weight: "350g/chiếc", origin: "Việt Nam", care: "Đánh xi định kỳ" }
  },
  {
    id: 7,
    name: "Mũ lưỡi trai",
    slug: "mu-luoi-trai",
    category: "Phụ kiện",
    price: 199000,
    oldPrice: 259000,
    badge: "SALE",
    rating: 4.2,
    reviews: 41,
    colors: ["#0A0A0A", "#525252", "#FFFFFF"],
    sizes: ["Free"],
    short: "Mũ lưỡi trai cotton, khóa kim loại điều chỉnh, che nắng tốt.",
    description:
      "Mũ lưỡi trai chất cotton twill bền chắc, lưỡi mũ cong ôm form. Khóa kim loại phía sau điều chỉnh kích cỡ linh hoạt. Phụ kiện hoàn thiện outfit street-style.",
    specs: { material: "100% cotton twill", weight: "90g", origin: "Việt Nam", care: "Giặt tay" }
  },
  {
    id: 8,
    name: "Túi tote canvas",
    slug: "tui-tote-canvas",
    category: "Phụ kiện",
    price: 249000,
    oldPrice: null,
    badge: "HOT",
    rating: 4.6,
    reviews: 97,
    colors: ["#F0F0F0", "#0A0A0A"],
    sizes: ["Free"],
    short: "Túi tote canvas dày, rộng rãi, bền bỉ cho việc đi học, đi làm.",
    description:
      "Túi tote vải canvas dày dặn, quai chắc chắn chịu lực tốt. Lòng túi rộng đựng vừa laptop 14 inch, sổ sách và đồ cá nhân. Thiết kế tối giản phù hợp mọi phong cách.",
    specs: { material: "Canvas 16oz", weight: "240g", origin: "Việt Nam", care: "Giặt tay, phơi mát" }
  }
];

/* Helper: find a product by id */
function getProductById(id) {
  return products.find(p => p.id === Number(id)) || null;
}

/* Helper: find by slug */
function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null;
}

if (typeof window !== "undefined") {
  window.products = products;
  window.getProductById = getProductById;
  window.getProductBySlug = getProductBySlug;
}
