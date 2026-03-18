import defaultClubLogo from "../../assets/default-club-logo.svg";
import "./CardEvent.css";

export type CardEventSport = "Futebol" | "Basquete" | "Hóquei" | "Automobilismo";
export type CardEventTipo = "versus" | "event";

export interface CardEventProps {
  /** Sport type — determines bar and background colors */
  sport: CardEventSport;
  /** Match title, e.g. "Corinthians X Ponte Preta", or event name e.g. "ONE Friday Fights" */
  title: string;
  /** Home team logo URL (also used as event logo in tipo="event") */
  homeLogo?: string;
  /** Away team logo URL (unused in tipo="event") */
  awayLogo?: string;
  /** Card variant: "versus" (two teams) or "event" (single event/sport) */
  tipo?: CardEventTipo;
  /** Click handler */
  onClick?: () => void;
}

const SPORT_COLORS: Record<
  CardEventSport,
  { bar: string; bg: string; bgHover: string }
> = {
  Futebol:       { bar: "var(--color-sport-futebol)",        bg: "var(--color-sport-futebol-bg)",        bgHover: "var(--color-sport-futebol-bg-hover)" },
  Basquete:      { bar: "var(--color-sport-basquete)",       bg: "var(--color-sport-basquete-bg)",       bgHover: "var(--color-sport-basquete-bg-hover)" },
  Hóquei:        { bar: "var(--color-sport-hockey)",         bg: "var(--color-sport-hockey-bg)",         bgHover: "var(--color-sport-hockey-bg-hover)" },
  Automobilismo: { bar: "var(--color-sport-automobilismo)",  bg: "var(--color-sport-automobilismo-bg)",  bgHover: "var(--color-sport-automobilismo-bg-hover)" },
};

export function CardEvent({
  sport,
  title,
  homeLogo,
  awayLogo,
  tipo = "versus",
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

      {tipo === "event" ? (
        <span className="cardEvent__body cardEvent__body--event">
          <span className="cardEvent__title">{title}</span>
          <img
            className="cardEvent__eventLogo"
            src={homeLogo || defaultClubLogo}
            alt={title}
            onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
          />
        </span>
      ) : (
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
      )}
    </button>
  );
}
