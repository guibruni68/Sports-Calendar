import type { ReactNode } from "react";
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

  if (tipo === "Jogo") {
    return (
      <button
        className={`cardDestaque ${tipoClass}`}
        onClick={onClick}
        type="button"
      >
        <div className="cardDestaque__club">
          {homeLogo && (
            <img
              className="cardDestaque__logo"
              src={homeLogo}
              alt=""
              width={56}
              height={56}
            />
          )}
          {aoVivo ? (
            <span className="cardDestaque__live">AO VIVO</span>
          ) : (
            <span className="cardDestaque__score">
              <span className="cardDestaque__date">{gameDate}</span>
            </span>
          )}
          {awayLogo && (
            <img
              className="cardDestaque__logo"
              src={awayLogo}
              alt=""
              width={56}
              height={56}
            />
          )}
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
        {logo && (
          <img
            className="cardDestaque__logo"
            src={logo}
            alt=""
            width={56}
            height={56}
          />
        )}
        <span className="cardDestaque__name">{name}</span>
      </div>
    </button>
  );
}
