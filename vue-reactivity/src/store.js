import { reactive } from "vue";

export const store = reactive({
  products: [
    {
      name: "Strawberry Cupcake",
      url: "https://i.pinimg.com/originals/bf/f2/34/bff23415adae94de5a3c5cef14915f96.jpg",
      price: 3,
    },
    {
      name: "Lemon Cupcake",
      url: "https://i.pinimg.com/originals/57/e1/b5/57e1b5365966fac68f93eb896f8e1c38.jpg",
      price: 3,
    },
    {
      name: "Jelly Bean Cupcake",
      url: "https://i.pinimg.com/originals/f6/70/b6/f670b689dc38796f1d5ca344c05ea556.jpg",
      price: 3,
    },
    {
      name: "Ice Cream Sundae",
      url: "https://i.pinimg.com/originals/6f/c9/cd/6fc9cd7954333b334bc012a9073caedd.jpg",
      price: 3,
    },
    {
      name: "Strawberry Soda",
      url: "https://i.pinimg.com/originals/07/fe/ce/07fece59f75c90aded002bf17d7c678f.jpg",
      price: 2,
    },
    {
      name: "Watermelon Soda",
      url: "https://i.pinimg.com/originals/4d/9c/3d/4d9c3d462d51a5fdc7e0e0dc1291171f.jpg",
      price: 2,
    },
    {
      name: "Peach Soda",
      url: "https://i.pinimg.com/originals/a4/fe/fa/a4fefad41bd78b2b6726fed804888da9.jpg",
      price: 2,
    },
    {
      name: "Black Tea",
      url: "https://i.pinimg.com/originals/0a/58/73/0a58737d88eaf4590b12d115040d7a6a.jpg",
      price: 2,
    },
    {
      name: "Cherry Pudding",
      url: "https://i.pinimg.com/originals/13/4c/97/134c97fa660d44cf05ed287af7f43e32.jpg",
      price: 4,
    },
    {
      name: "Strawberry Pudding",
      url: "https://i.pinimg.com/originals/ba/d4/c8/bad4c8883f0bc78eb3a6c19158942632.jpg",
      price: 4,
    },
    {
      name: "Chocolate Pudding",
      url: "https://i.pinimg.com/originals/b6/d1/f1/b6d1f1e24ae80d70909699f5bc52d8e4.jpg",
      price: 4,
    },
    {
      name: "Dango",
      url: "https://i.pinimg.com/originals/a6/b8/30/a6b830203950004bf2955c825f663244.jpg",
      price: 4,
    },
    {
      name: "Chocolate Crossiant",
      url: "https://i.pinimg.com/originals/ec/91/42/ec9142d2e67a5430cea47306b0b6d95a.jpg",
      price: 2,
    },
    {
      name: "Custard Crossiant",
      url: "https://i.pinimg.com/originals/69/b0/73/69b0737d85ff7cae3116dbc2f85c7574.jpg",
      price: 2,
    },
    {
      name: "Strawberry Crossiant",
      url: "https://i.pinimg.com/originals/ae/fa/a5/aefaa55fd5473d634cae81677697c305.jpg",
      price: 2,
    },
    {
      name: "Pancakes",
      url: "https://i.pinimg.com/originals/b1/41/0a/b1410ae6cbd37df12cd1f734ea29de51.jpg",
      price: 4,
    },
    {
      name: "Vanilla Cake",
      url: "https://i.pinimg.com/originals/ed/a2/c5/eda2c5f1aacff5a68b302c44bd6b5521.jpg",
      price: 6,
    },
    {
      name: "Red Velvet Cake",
      url: "https://i.pinimg.com/originals/d8/32/44/d83244907bf6977c6800061867b3d352.jpg",
      price: 6,
    },
    {
      name: "Chocolate Cake",
      url: "https://i.pinimg.com/originals/1f/c8/78/1fc8783b4b84bd5b61a6b39d640b3659.jpg",
      price: 6,
    },
    {
      name: "Pumpkin Pie",
      url: "https://i.pinimg.com/originals/ac/61/a5/ac61a588aa4ae29ca4b2d7ecee6e1bd5.jpg",
      price: 6,
    },
  ],
  cart: [],
  total: 0,
});
