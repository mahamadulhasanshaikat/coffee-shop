export interface MenuItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  tag: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Cappuccino",
    price: "$4.99",
    image: "/images/cappuccino.jpg",
    category: "Hot Coffee",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Iced Coffee",
    price: "$4.99",
    image: "/images/iced-coffee.jpg",
    category: "Cold Coffee",
    tag: "Refreshing",
  },
  {
    id: 3,
    name: "Espresso",
    price: "$3.99",
    image: "/images/espresso.jpg",
    category: "Hot Coffee",
    tag: "Classic",
  },
  {
    id: 4,
    name: "Mocha",
    price: "$5.49",
    image: "/images/mocha.jpg",
    category: "Special Coffee",
    tag: "Popular",
  },
];

export const specialMenu = [
  {
    id: 1,
    name: "Caramel Macchiato",
    price: "$5.99",
    image: "/images/mocha.jpg",
  },
  {
    id: 2,
    name: "Vanilla Latte",
    price: "$5.49",
    image: "/images/cappuccino.jpg",
  },
  {
    id: 3,
    name: "Cold Brew",
    price: "$4.99",
    image: "/images/iced-coffee.jpg",
  },
];