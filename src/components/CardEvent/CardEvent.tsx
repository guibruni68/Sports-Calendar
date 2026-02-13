import defaultClubLogo from "../../assets/default-club-logo.svg";
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
  Futebol: { bar: "var(--color-sport-futebol)", bg: "var(--color-sport-futebol-bg)", bgHover: "var(--color-sport-futebol-bg-hover)" },
  Basquete: { bar: "var(--color-sport-basquete)", bg: "var(--color-sport-basquete-bg)", bgHover: "var(--color-sport-basquete-bg-hover)" },
  Hóquei: { bar: "var(--color-sport-hockey)", bg: "var(--color-sport-hockey-bg)", bgHover: "var(--color-sport-hockey-bg-hover)" },
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
            src={homeLogo || defaultClubLogo}
            alt=""
            width={26}
            height={26}
            onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
          />
          <span className="cardEvent__separator">X</span>
          <img
            className="cardEvent__logo"
            src={awayLogo || defaultClubLogo}
            alt=""
            width={26}
            height={26}
            onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
          />
        </span>
      </span>
    </button>
  );
}
