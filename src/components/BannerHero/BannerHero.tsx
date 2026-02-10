import "./BannerHero.css";

export type BannerHeroSize = "Default" | "Mini";

export interface BannerHeroProps {
  /** The banner image source URL */
  imageSrc: string;
  /** Alt text for the banner image */
  alt?: string;
  /** Size variant: "Default" (728x356) or "Mini" (620x350) */
  size?: BannerHeroSize;
  /** Click handler for the banner */
  onClick?: () => void;
  /** Optional link URL — renders as an anchor when provided */
  href?: string;
}

export function BannerHero({
  imageSrc,
  alt = "Banner",
  size = "Default",
  onClick,
  href,
}: BannerHeroProps) {
  const sizeClass = size === "Mini" ? "bannerHero--mini" : "";
  const className = `bannerHero ${sizeClass}`.trim();

  const content = (
    <img
      className="bannerHero__image"
      src={imageSrc}
      alt={alt}
      draggable={false}
    />
  );

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={className}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {content}
    </div>
  );
}
