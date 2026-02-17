import type { ReactNode } from "react";
import defaultClubLogo from "../../assets/default-club-logo.svg";
import "./CardDestaque.css";

export type CardDestaqueTipo = "Jogo" | "Time" | "Competição";

export interface CardDestaqueProps {
  /** Card type */
  tipo: CardDestaqueTipo;
  /** Show "AO VIVO" badge instead of game date (Jogo only) */
  aoVivo?: boolean;
  /** Game date/time string, e.g. "27/01 19:00" (Jogo only, when not ao vivo) */
  gameDate?: string;
  /** Home team logo URL (Jogo only) */
  homeLogo?: string;
  /** Away team logo URL (Jogo only) */
  awayLogo?: string;
  /** Channel tags to render in the bottom row (Jogo only) */
  channels?: ReactNode;
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
  channels,
  logo,
  name,
  onClick,
}: CardDestaqueProps) {
  const tipoClass =
    tipo === "Jogo"
      ? "cardDestaque--jogo"
      : tipo === "Time"
        ? "cardDestaque--time"
        : "cardDestaque--competicao";

  const aoVivoClass = tipo === "Jogo" && aoVivo ? "cardDestaque--ao-vivo" : "";

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
            <span className="cardDestaque__score">
              <span className="cardDestaque__date">
                {gameDate?.replace(" ", "\n")}
              </span>
            </span>
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
        {channels && (
          <div className="cardDestaque__channels">
            {channels}
          </div>
        )}
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
