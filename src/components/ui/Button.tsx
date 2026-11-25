
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "brown" | "green" | "light";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "brown",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`button button-${variant} ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
