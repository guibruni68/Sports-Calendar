import "./CTAButton.css";

export interface CTAButtonProps {
  /** Button label text */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Optional link URL — renders as an anchor when provided */
  href?: string;
}

export function CTAButton({ label, onClick, href }: CTAButtonProps) {
  if (href) {
    return (
      <a
        className="ctaButton"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <button className="ctaButton" onClick={onClick}>
      {label}
    </button>
  );
}
