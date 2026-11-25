export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Regular Customer",
    message:
      "CoffeeShop.com has the best coffee in town! Highly recommended.",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
  },
  {
    id: 2,
    name: "David Johnson",
    role: "Coffee Enthusiast",
    message:
      "Amazing taste and super friendly staff. Love this place!",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Regular Customer",
    message:
      "A perfect spot to relax and enjoy coffee. Amazing atmosphere!",
    avatar: "https://i.pravatar.cc/100?img=44",
    rating: 5,
  },
];