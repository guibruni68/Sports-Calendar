import { TagJogo } from "../TagJogo";
import type { TagJogoName } from "../TagJogo";
import { TagCanal } from "../TagCanal";
import type { ChannelName, CanalNumber } from "../TagCanal";
import defaultClubLogo from "../../assets/default-club-logo.svg";
import "./CardJogo.css";

export interface Broadcast {
  channel: ChannelName;
  canal?: CanalNumber;
}

export interface TeamInfo {
  name: string;
  logoSrc: string;
}

export interface CardJogoProps {
  /** Championship name displayed at the top */
  championship: string;
  /** Tag type for the match (Clássico, Final, or None) */
  tagJogo?: TagJogoName;
  /** Custom text for the TagJogo */
  tagJogoText?: string;
  /** Home team info */
  teamA: TeamInfo;
  /** Away team info */
  teamB: TeamInfo;
  /** Date and time string (e.g. "20/03 - 21:30") */
  dateTime: string;
  /** List of broadcast channels */
  broadcasts?: Broadcast[];
  /** Click handler */
  onClick?: () => void;
}

const TvIcon = () => (
  <svg
    className="cardJogo__tvIcon"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="4"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 1L10 4L13 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function CardJogo({
  championship,
  tagJogo = "None",
  tagJogoText,
  teamA,
  teamB,
  dateTime,
  broadcasts = [],
  onClick,
}: CardJogoProps) {
  return (
    <div className="cardJogo" onClick={onClick} role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined}>
      <div className="cardJogo__container">
        <div className="cardJogo__header">
          <span className="cardJogo__championship">{championship}</span>
          <TagJogo name={tagJogo} text={tagJogoText} />
        </div>

        <div className="cardJogo__matchup">
          <div className="cardJogo__team">
            <img
              className="cardJogo__teamLogo"
              src={teamA.logoSrc || defaultClubLogo}
              alt={teamA.name}
              onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
            />
            <span className="cardJogo__teamName">{teamA.name}</span>
          </div>
          <div className="cardJogo__team">
            <img
              className="cardJogo__teamLogo"
              src={teamB.logoSrc || defaultClubLogo}
              alt={teamB.name}
              onError={(e) => { e.currentTarget.src = defaultClubLogo; }}
            />
            <span className="cardJogo__teamName">{teamB.name}</span>
          </div>
        </div>

        <span className="cardJogo__dateTime">{dateTime}</span>

        {broadcasts.length > 0 && (
          <div className="cardJogo__broadcasts">
            <TvIcon />
            {broadcasts.map((b, i) => (
              <TagCanal
                key={`${b.channel}-${b.canal ?? "1"}-${i}`}
                channel={b.channel}
                canal={b.canal}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
