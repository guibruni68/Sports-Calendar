import "./CardEvent.css";

export type CardEventSport = "Futebol" | "Basquete" | "Hóquei";

export interface CardEventProps {
  /** Sport type — determines bar and background colors */
  sport: CardEventSport;
  /** Match title, e.g. "Corinthians X Ponte Preta" */
  title: string;
  /** Home team logo URL */
  homeLogo: string;
  /** Away team logo URL */
  awayLogo: string;
  /** Click handler */
  onClick?: () => void;
}

const SPORT_COLORS: Record<
  CardEventSport,
  { bar: string; bg: string; bgHover: string }
> = {
  Futebol: { bar: "#40BD01", bg: "#243223", bgHover: "#306F13" },
  Basquete: { bar: "#FF0800", bg: "#372023", bgHover: "#591B1D" },
  Hóquei: { bar: "#0077FF", bg: "#1E2B3C", bgHover: "#104C93" },
};

export function CardEvent({
  sport,
  title,
  homeLogo,
  awayLogo,
  onClick,
}: CardEventProps) {
  const colors = SPORT_COLORS[sport];

  return (
    <button
      className="cardEvent"
      onClick={onClick}
      type="button"
      style={
        {
          "--card-bg": colors.bg,
          "--card-bg-hover": colors.bgHover,
          "--card-bar": colors.bar,
        } as React.CSSProperties
      }
    >
      <span className="cardEvent__bar" />
      <span className="cardEvent__body">
        <span className="cardEvent__title">{title}</span>
        <span className="cardEvent__teams">
          <img
            className="cardEvent__logo"
            src={homeLogo}
            alt=""
            width={26}
            height={26}
          />
          <span className="cardEvent__separator">X</span>
          <img
            className="cardEvent__logo"
            src={awayLogo}
            alt=""
            width={26}
            height={26}
          />
        </span>
      </span>
    </button>
  );
}
