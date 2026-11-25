import type { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <span className="eyebrow">
        <span />
        {label}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}