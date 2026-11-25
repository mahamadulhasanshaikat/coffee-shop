
import Image from "next/image";
import {
  Bean,
  Gem,
  Heart,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const features = [
  { icon: Bean, title: "Fresh Beans", subtitle: "Always fresh, always aromatic" },
  { icon: Gem, title: "Best Taste", subtitle: "Quality in every single cup" },
  { icon: Heart, title: "Cozy Atmosphere", subtitle: "A place to relax and enjoy" },
  { icon: Headphones, title: "Friendly Service", subtitle: "Here to make your day better" },
];

export default function WhyChooseUs() {
  return (
    <section className="why section-pad" id="gallery">
      <div className="why-main">
        <Reveal className="why-copy">
          <SectionHeading
            label="Why Choose Us"
            title={
              <>
                Why Choose <span>CoffeeShop?</span>
              </>
            }
          />

          <p className="why-description">
            We believe great coffee is more than just a drink.
            It is a little moment of happiness, made with care
            and served with love.
          </p>

          <div className="why-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="why-feature">
                  <div className="why-feature-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <b>{feature.title}</b>
                    <small>{feature.subtitle}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="beans-photo photo-wrap">
          <Image
            src="/images/coffee-beans.jpg"
            alt="Premium fresh coffee beans"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
          />

          <div className="beans-photo-caption">
            <span>Made with passion</span>
            <b>Every cup tells a story.</b>
          </div>
        </Reveal>
      </div>

      <Reveal className="why-promo">
        <div className="why-promo-content">
          <span className="why-promo-kicker">
            A little joy in every cup
          </span>

          <h3>
            Start Your Day
            <br />
            with Great Coffee
          </h3>

          <p>
            Get your favourite coffee delivered or enjoy
            it in our café.
          </p>

          <Button href="#menu" variant="light">
            Order Now <ArrowUpRight size={17} />
          </Button>
        </div>

        <div className="why-promo-image">
          <Image
            src="/images/cappuccino.jpg"
            alt="Freshly prepared cappuccino"
            fill
            sizes="(max-width: 760px) 80vw, 30vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
