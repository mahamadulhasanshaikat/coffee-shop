
import Image from "next/image";
import Link from "next/link";

import {
  Coffee,
  Heart,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const experiences = [
  {
    icon: Coffee,
    title: "Great Coffee",
    description:
      "Carefully selected beans and beautifully crafted coffee.",
  },
  {
    icon: Users,
    title: "Good Company",
    description:
      "A welcoming space to meet, connect and share stories.",
  },
  {
    icon: Heart,
    title: "Warm Moments",
    description:
      "Little moments that make every visit memorable.",
  },
];

export default function CoffeeLovers() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-paper px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

        {/* Content */}
        <Reveal className="max-w-[530px]">
          <span className="mb-6 inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[2px] text-brown">
            <Sparkles size={15} className="text-gold" />
            MORE THAN JUST COFFEE
          </span>

          <h2 className="text-[clamp(38px,5vw,62px)] font-extrabold leading-[1.12] tracking-[-2.5px] text-ink">
            A Place for
            <br />
            <span className="text-brown">
              Coffee Lovers
            </span>
          </h2>

          <p className="mt-6 max-w-[470px] text-[15px] leading-[1.9] text-muted">
            Great coffee brings people together. Whether
            you're catching up with friends, enjoying a
            quiet moment, or finding inspiration, there's
            always a place for you here.
          </p>

          {/* Features */}
          <div className="mt-9 grid gap-6">
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4"
                >
                  <div className="grid size-[46px] shrink-0 place-items-center rounded-[14px] bg-paper-soft text-green transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="mb-1 text-[15px] font-extrabold text-ink">
                      {item.title}
                    </h3>

                    <p className="text-[13px] leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Link */}
          <Link
            href="#menu"
            className="group mt-9 inline-flex items-center gap-2 text-sm font-extrabold text-green transition-all duration-300 hover:gap-4"
          >
            Explore Our Coffee
            <ArrowUpRight size={18} />
          </Link>
        </Reveal>

        {/* Image */}
        <Reveal className="relative pb-10 pl-5 sm:pl-8">
          <div className="relative h-[390px] overflow-hidden rounded-t-[180px] rounded-b-2xl bg-paper-soft sm:h-[480px] lg:h-[530px]">
            <Image
              src="/images/coffee-lovers.jpg"
              alt="Friends enjoying coffee together in a cozy cafe"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Image Caption */}
          <div className="absolute -bottom-1 left-0 flex items-center gap-3 rounded-xl bg-paper px-4 py-4 shadow-[0_12px_40px_rgba(33,27,21,0.10)] sm:px-6">
            <div className="grid size-11 shrink-0 place-items-center rounded-full bg-green text-white">
              <Coffee size={21} />
            </div>

            <div>
              <span className="block text-[9px] font-extrabold tracking-[1.5px] text-muted">
                YOUR HAPPY PLACE
              </span>

              <strong className="mt-1 block text-xs text-ink">
                Made for coffee moments.
              </strong>
            </div>
          </div>

          {/* Decoration */}
          <div className="absolute right-0 bottom-0 flex flex-col gap-2 rounded-xl bg-green px-4 py-4 text-[9px] font-extrabold tracking-[1.4px] text-white sm:right-1">
            <span>GOOD COFFEE</span>
            <span>GOOD PEOPLE</span>
            <span>GOOD MOMENTS</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
