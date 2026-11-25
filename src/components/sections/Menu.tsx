import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Menu() {
  return (
    <section className="menu-section section-pad" id="menu">
      <SectionHeading
        label="Our Menu"
        centered
        title={
          <>
            Our Special <span>Menu</span>
          </>
        }
        description="Thoughtfully crafted favourites, made fresh throughout the day."
      />

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <Reveal
            key={item.id}
            delay={index * 0.08}
            className="menu-card"
          >
            <Link href="#contact">
              <div className="menu-photo">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>

              <span className="menu-tag">{item.tag}</span>

              <div className="menu-card-bottom">
                <h3>{item.name}</h3>
                <b>{item.price}</b>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="center-action">
        <Button href="#specials" variant="green">
          View Full Menu
        </Button>
      </div>
    </section>
  );
}