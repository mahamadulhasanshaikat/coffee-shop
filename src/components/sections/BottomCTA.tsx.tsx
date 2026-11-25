import { Coffee } from "lucide-react";
import Button from "@/components/ui/Button";

export default function BottomCTA() {
  return (
    <section className="bottom-cta section-pad">
      <div className="mini-cup">
        <Coffee size={42} />
      </div>

      <div>
        <h2>Let’s Enjoy Coffee Together</h2>
        <p>Visit our store or order online today!</p>
      </div>

      <Button href="#menu" variant="light">
        Order Now
      </Button>
    </section>
  );
}