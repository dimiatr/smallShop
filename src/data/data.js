const asset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const categories = [
  { id: "Electronics", name: "Electronics", img: asset("electronics.png") },
  { id: "Clothing", name: "Clothing", img: asset("clothing.png") },
  { id: "Books", name: "Books", img: asset("books.png") },
  { id: "Furniture", name: "Furniture", img: asset("furniture.png") },
  { id: "Outdoor", name: "Outdoor", img: asset("outdoor.png") },
];

export const products = [
  {
    id: 1,
    categoryId: "Electronics",
    name: "Laptop",
    price: 1200,
    img: asset("laptop.png"),
    description:
      "This high-performance laptop is designed for both work and play. It features a powerful processor and ample storage. The sleek design makes it perfect for on-the-go professionals. Whether you are editing videos or browsing the web, it handles tasks with ease. The vibrant display ensures crisp visuals. It is a reliable companion for your daily digital needs.",
  },
  {
    id: 2,
    categoryId: "Electronics",
    name: "Smartphone",
    price: 800,
    img: asset("smartphone.png"),
    description:
      "Stay connected with this modern smartphone featuring a stunning display and fast processor. It offers excellent camera quality for capturing memorable moments. The battery life easily lasts all day. With access to a wide range of apps, it is perfect for productivity and entertainment. Its sleek design fits comfortably in your hand. Experience smooth multitasking with this powerful device.",
  },
  {
    id: 3,
    categoryId: "Electronics",
    name: "Headphones",
    price: 150,
    img: asset("headphones.png"),
    description:
      "Enjoy immersive sound with these high-quality headphones. They are designed for comfort during long listening sessions. Noise-canceling technology ensures a distraction-free experience. Perfect for music lovers and gamers alike. The build is durable yet lightweight. Easily connect to your devices via Bluetooth or cable.",
  },
  {
    id: 4,
    categoryId: "Electronics",
    name: "Monitor",
    price: 300,
    img: asset("monitor.png"),
    description:
      "This widescreen monitor offers crystal-clear resolution for work or play. It is ideal for gaming, graphic design, and everyday tasks. The adjustable stand provides ergonomic comfort. Enjoy smooth visuals with a high refresh rate. Multiple ports make it easy to connect your devices. Upgrade your workspace with this stylish display.",
  },
  {
    id: 5,
    categoryId: "Clothing",
    name: "T-Shirt",
    price: 20,
    img: asset("t-shirt.png"),
    description:
      "This classic T-shirt is made from soft, breathable cotton. It is perfect for everyday wear. The minimalist design suits any outfit. Wear it alone or layer it under a jacket. It is machine washable and easy to care for. A staple for every wardrobe.",
  },
  {
    id: 6,
    categoryId: "Clothing",
    name: "Jeans",
    price: 50,
    img: asset("jeans.png"),
    description:
      "These jeans combine style and comfort with a modern fit. They are made from durable denim that moves with you. Perfect for casual or semi-formal looks. The fabric retains shape after multiple washes. Multiple pockets provide practicality. A must-have for versatile outfits.",
  },
  {
    id: 7,
    categoryId: "Clothing",
    name: "Jacket",
    price: 100,
    img: asset("jacket.png"),
    description:
      "Stay warm and stylish with this lightweight jacket. It offers excellent insulation without bulk. Water-resistant fabric keeps you dry during rain. The design is timeless and matches any look. Zippered pockets provide secure storage. Ideal for chilly evenings or travel.",
  },
  {
    id: 8,
    categoryId: "Clothing",
    name: "Sneakers",
    price: 70,
    img: asset("sneakers.png"),
    description:
      "These sneakers are perfect for walking, running, or casual wear. They feature a cushioned sole for comfort. Breathable fabric keeps your feet cool. The design is trendy and suitable for various outfits. Durable construction ensures long-term use. Available in multiple sizes and colors.",
  },
  {
    id: 9,
    categoryId: "Books",
    name: "Novel",
    price: 15,
    img: asset("novel.png"),
    description:
      "Lose yourself in this captivating novel full of rich characters and a thrilling plot. It is a page-turner from start to finish. Perfect for relaxing weekends or daily reading. The story explores deep emotional themes. Written in a compelling style. A great addition to your home library.",
  },
  {
    id: 10,
    categoryId: "Books",
    name: "Textbook",
    price: 40,
    img: asset("textbook.png"),
    description:
      "This comprehensive textbook covers essential topics in depth. It is ideal for students and professionals alike. Clear diagrams and explanations aid learning. Includes practice questions and case studies. Authored by experts in the field. A reliable resource for academic success.",
  },
  {
    id: 11,
    categoryId: "Books",
    name: "Magazine",
    price: 10,
    img: asset("magazine.png"),
    description:
      "Stay updated with the latest trends and stories in this monthly magazine. It features interviews, articles, and lifestyle tips. The design is modern and easy to read. Ideal for coffee tables or travel. Each issue brings fresh content. A light and informative read.",
  },
  {
    id: 12,
    categoryId: "Books",
    name: "Comic Book",
    price: 12,
    img: asset("comicBook.png"),
    description:
      "Dive into an exciting world with this vibrant comic book. Action-packed and full of humor, it is great for all ages. Illustrated with stunning artwork. Easy to follow storylines and characters. A collectible item for fans. Perfect for lighthearted entertainment.",
  },
  {
    id: 13,
    categoryId: "Furniture",
    name: "Desk Chair",
    price: 200,
    img: asset("deskChair.png"),
    description:
      "This ergonomic desk chair offers superior comfort for long hours. Adjustable height and lumbar support reduce strain. The mesh back keeps you cool. Smooth-rolling wheels allow easy movement. Ideal for home or office setups. Built with high-quality materials for durability.",
  },
  {
    id: 14,
    categoryId: "Furniture",
    name: "Table",
    price: 150,
    img: asset("table.png"),
    description:
      "This versatile table is perfect for dining or working. Its minimalist design suits modern interiors. The surface is smooth and easy to clean. Sturdy legs ensure stability. Seats up to six people comfortably. Great addition to any room.",
  },
  {
    id: 15,
    categoryId: "Furniture",
    name: "Bookshelf",
    price: 120,
    img: asset("bookshelf.png"),
    description:
      "Organize your books and decor with this spacious bookshelf. Its modern design adds style to your room. Multiple shelves provide ample storage. Built from durable wood composite. Easy to assemble with clear instructions. A practical and decorative piece.",
  },
  {
    id: 16,
    categoryId: "Furniture",
    name: "Lamp",
    price: 80,
    img: asset("lamp.png"),
    description:
      "Brighten up your space with this elegant lamp. It emits warm, soothing light perfect for reading or relaxing. The design blends well with any decor. Compact and easy to move. Built with energy-efficient technology. A perfect mix of form and function.",
  },
  {
    id: 17,
    categoryId: "Outdoor",
    name: "Bicycle",
    price: 500,
    img: asset("bicycle.png"),
    description:
      "Enjoy the outdoors with this sturdy and stylish bicycle. It features smooth gear shifting and a comfortable seat. Ideal for commuting or weekend rides. The frame is lightweight yet durable. Reflectors and brakes ensure safety. Great for all fitness levels.",
  },
  {
    id: 18,
    categoryId: "Outdoor",
    name: "Scooter",
    price: 300,
    img: asset("scooter.png"),
    description:
      "This foldable scooter is perfect for city travel or fun rides. It features strong wheels and a stable deck. Adjustable handlebar fits all ages. Easy to carry and store. Suitable for kids and adults alike. A smooth and exciting ride every time.",
  },
  {
    id: 19,
    categoryId: "Outdoor",
    name: "Roller Skates",
    price: 150,
    img: asset("rollerSkates.png"),
    description:
      "Glide with ease using these comfortable roller skates. Perfect for indoor or outdoor use. They provide great ankle support and control. The wheels ensure a smooth ride. Designed with both style and safety in mind. Ideal for beginners and pros alike.",
  },
  {
    id: 20,
    categoryId: "Outdoor",
    name: "Skateboard",
    price: 120,
    img: asset("skateboard.png"),
    description:
      "This skateboard is built for tricks and cruising alike. The deck is sturdy with great grip. Smooth bearings allow for fast rides. The design appeals to all ages. Great for skateparks or urban travel. Fun, portable, and durable.",
  },
];
