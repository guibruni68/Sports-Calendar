import "./CardHorizontal.css";

export interface CardHorizontalProps {
  /** Image source URL */
  imageSrc: string;
  /** Alt text for the image */
  alt?: string;
  /** Tag text displayed in top-left corner. Set to "" to hide */
  tag?: string;
  /** Click handler */
  onClick?: () => void;
  /** Optional link URL — renders as an anchor when provided */
  href?: string;
}

export function CardHorizontal({
  imageSrc,
  alt = "Card",
  tag = "NOVO",
  onClick,
  href,
}: CardHorizontalProps) {
  const content = (
    <>
      <img
        className="cardHorizontal__image"
        src={imageSrc}
        alt={alt}
        draggable={false}
      />
      {tag && (
        <span className="cardHorizontal__tag">{tag}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className="cardHorizontal"
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
      className="cardHorizontal"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {content}
    </div>
  );
}
