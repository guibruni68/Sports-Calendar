import { Fragment } from "react";
import { TagCanal } from "../TagCanal";
import type { ChannelName, CanalNumber } from "../TagCanal";
import defaultClubLogo from "../../assets/default-club-logo.svg";
import "./CardDestaque.css";

export type CardDestaqueTipo = "Jogo" | "Evento" | "Time" | "Competição";

export interface CardDestaqueBroadcast {
  channel: ChannelName;
  canal?: CanalNumber;
}

const TvIcon = () => (
  <svg
    className="cardDestaque__tvIcon"
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 1L10 4L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export interface CardDestaqueProps {
  /** Card type */
  tipo: CardDestaqueTipo;
  /** Show "AO VIVO" badge instead of game date (Jogo / Evento only) */
  aoVivo?: boolean;
  /** Game date/time string, e.g. "27/01 19:00" (Jogo / Evento only, when not ao vivo) */
  gameDate?: string;
  /** Home team logo URL (Jogo only) */
  homeLogo?: string;
  /** Away team logo URL (Jogo only) */
  awayLogo?: string;
  /** Event logo URL, max 80×20px (Evento only) */
  eventLogo?: string;
  /** Broadcast channels — renders TagCanal tags with TV icon between first and second */
  broadcasts?: CardDestaqueBroadcast[];
  /** Logo URL (Time / Competição only) */
  logo?: string;
  /** Team or competition name (Time / Competição only) */
  name?: string;
  /** Click handler */
  onClick?: () => void;
}

export function CardDestaque({
  tipo,
  aoVivo = false,
  gameDate = "27/01 19:00",
  homeLogo,
  awayLogo,
  eventLogo,
  broadcasts = [],
  logo,
  name,
  onClick,
}: CardDestaqueProps) {
  const tipoClass =
    tipo === "Jogo"        ? "cardDestaque--jogo"
    : tipo === "Evento"    ? "cardDestaque--evento"
    : tipo === "Time"      ? "cardDestaque--time"
    : "cardDestaque--competicao";

  const aoVivoClass = aoVivo ? "cardDestaque--ao-vivo" : "";

  const channelsRow = broadcasts.length > 0 ? (
    <div className="cardDestaque__channels">
      {broadcasts.map((b, i) => (
        <Fragment key={`${b.channel}-${b.canal ?? "1"}-${i}`}>
          {i === 1 && <TvIcon />}
          <TagCanal channel={b.channel} canal={b.canal} />
        </Fragment>
      ))}
    </div>
  ) : null;

  if (tipo === "Jogo") {
    return (
      <button
        className={`cardDestaque ${tipoClass} ${aoVivoClass}`}
        onClick={onClick}
        type="button"
      >
        <div className="cardDestaque__club">
          <img
            className="cardDestaque__logo"
            src={homeLogo || defaultClubLogo}
            alt=""
            width={56}
            height={56}
            onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
          />
          {aoVivo ? (
            <span className="cardDestaque__live">AO VIVO</span>
          ) : (
            <span className="cardDestaque__score">{gameDate}</span>
          )}
          <img
            className="cardDestaque__logo"
            src={awayLogo || defaultClubLogo}
            alt=""
            width={56}
            height={56}
            onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
          />
        </div>
        {channelsRow}
      </button>
    );
  }

  if (tipo === "Evento") {
    return (
      <button
        className={`cardDestaque ${tipoClass} ${aoVivoClass}`}
        onClick={onClick}
        type="button"
      >
        <div className="cardDestaque__club">
          <img
            className="cardDestaque__eventLogo"
            src={eventLogo || defaultClubLogo}
            alt=""
            onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
          />
          {aoVivo ? (
            <span className="cardDestaque__live">AO VIVO</span>
          ) : (
            <span className="cardDestaque__score">{gameDate}</span>
          )}
        </div>
        {channelsRow}
      </button>
    );
  }

  // Tipo = Time or Competição
  return (
    <button
      className={`cardDestaque ${tipoClass}`}
      onClick={onClick}
      type="button"
    >
      <div className="cardDestaque__club">
        <img
          className="cardDestaque__logo"
          src={logo || defaultClubLogo}
          alt=""
          width={56}
          height={56}
          onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
        />
        <span className="cardDestaque__name">{name}</span>
      </div>
    </button>
  );
}
