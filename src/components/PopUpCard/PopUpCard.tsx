import type { ReactNode } from "react";
import looperBg from "../../assets/looper-bg.png";
import defaultClubLogo from "../../assets/default-club-logo.svg";
import "./PopUpCard.css";

export type PopUpCardTipo = "versus" | "event";

export interface PopUpCardProps {
  /** Championship name (e.g. "Paulistão", "Brasileirão") */
  championship: string;
  /** Home team logo URL (also used as event image in tipo="event") */
  homeLogo: string;
  /** Home team name */
  homeName: string;
  /** Away team logo URL (unused in tipo="event") */
  awayLogo?: string;
  /** Away team name (unused in tipo="event") */
  awayName?: string;
  /** Show "AO VIVO" badge */
  aoVivo?: boolean;
  /** Game date/time string (shown when not ao vivo) */
  gameDate?: string;
  /** Tag Jogo element (e.g. <TagJogo />) — unused in tipo="event" */
  tagJogo?: ReactNode;
  /** Channel tags for broadcast info */
  channels?: ReactNode;
  /** Card variant: "versus" (two teams) or "event" (single event/sport) */
  tipo?: PopUpCardTipo;
}

export function PopUpCard({
  championship,
  homeLogo,
  homeName,
  awayLogo,
  awayName,
  aoVivo = false,
  gameDate = "27/01 19:00",
  tagJogo,
  channels,
  tipo = "versus",
}: PopUpCardProps) {
  return (
    <div className={`popUpCard${tipo === "event" ? " popUpCard--event" : ""}`}>
      <img
        className="popUpCard__looper"
        src={looperBg}
        alt=""
        aria-hidden="true"
      />

      {tipo === "event" ? (
        <div className="popUpCard__eventLayout">
          <div className="popUpCard__eventLogoWrap">
            <img
              className="popUpCard__eventLogo"
              src={homeLogo || defaultClubLogo}
              alt={homeName}
              onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
            />
          </div>
          <div className="popUpCard__eventInfo">
            <span className="popUpCard__championship">{championship}</span>
            {aoVivo ? (
              <span className="popUpCard__live">AO VIVO</span>
            ) : (
              <span className="popUpCard__score">{gameDate}</span>
            )}
          </div>
        </div>
      ) : (
        <>
          <span className="popUpCard__championship">{championship}</span>

          <div className="popUpCard__teams">
            <div className="popUpCard__team">
              <img
                className="popUpCard__logo"
                src={homeLogo || defaultClubLogo}
                alt={homeName}
                width={164}
                height={164}
                onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
              />
              <span className="popUpCard__teamName">{homeName}</span>
            </div>

            <div className="popUpCard__center">
              {aoVivo ? (
                <span className="popUpCard__live">AO VIVO</span>
              ) : (
                <span className="popUpCard__score">{gameDate}</span>
              )}
              {tagJogo && <div className="popUpCard__tagJogo">{tagJogo}</div>}
            </div>

            <div className="popUpCard__team">
              <img
                className="popUpCard__logo"
                src={awayLogo || defaultClubLogo}
                alt={awayName}
                width={164}
                height={164}
                onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
              />
              <span className="popUpCard__teamName">{awayName}</span>
            </div>
          </div>
        </>
      )}

      {channels && (
        <div className="popUpCard__channels">{channels}</div>
      )}
    </div>
  );
}
