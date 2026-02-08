import type { ReactNode } from "react";
import looperBg from "../../assets/looper-bg.png";
import "./PopUpCard.css";

export interface PopUpCardProps {
  /** Championship name (e.g. "Paulistão", "Brasileirão") */
  championship: string;
  /** Home team logo URL */
  homeLogo: string;
  /** Home team name */
  homeName: string;
  /** Away team logo URL */
  awayLogo: string;
  /** Away team name */
  awayName: string;
  /** Show "AO VIVO" badge */
  aoVivo?: boolean;
  /** Game date/time string (shown when not ao vivo) */
  gameDate?: string;
  /** Tag Jogo element (e.g. <TagJogo />) */
  tagJogo?: ReactNode;
  /** Channel tags for broadcast info */
  channels?: ReactNode;
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
}: PopUpCardProps) {
  return (
    <div className="popUpCard">
      <img
        className="popUpCard__looper"
        src={looperBg}
        alt=""
        aria-hidden="true"
      />

      <span className="popUpCard__championship">{championship}</span>

      <div className="popUpCard__teams">
        <div className="popUpCard__team">
          <img
            className="popUpCard__logo"
            src={homeLogo}
            alt={homeName}
            width={164}
            height={164}
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
            src={awayLogo}
            alt={awayName}
            width={164}
            height={164}
          />
          <span className="popUpCard__teamName">{awayName}</span>
        </div>
      </div>

      {channels && (
        <div className="popUpCard__channels">{channels}</div>
      )}
    </div>
  );
}
