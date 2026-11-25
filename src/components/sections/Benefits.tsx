import {
  Bean,
  Coffee,
  Bike,
  Smile,
} from "lucide-react";

const benefits = [
  {
    icon: Bean,
    title: "Premium Quality",
    description: "Carefully selected beans",
  },
  {
    icon: Coffee,
    title: "Freshly Brewed",
    description: "Made just for you",
  },
  {
    icon: Bike,
    title: "Fast Delivery",
    description: "At your doorstep",
  },
  {
    icon: Smile,
    title: "100% Satisfaction",
    description: "Every cup, every time",
  },
];

export default function Benefits() {
  return (
    <section className="benefits section-pad">
      {benefits.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.title}>
            <span className="benefit-icon">
              <Icon size={26} />
            </span>

            <b>{item.title}</b>
            <small>{item.description}</small>
          </div>
        );
      })}
    </section>
  );
}