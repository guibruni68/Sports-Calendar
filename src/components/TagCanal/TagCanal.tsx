import "./TagCanal.css";

export type ChannelName =
  | "GE TV"
  | "SporTV"
  | "ESPN"
  | "HBO Max"
  | "SBT"
  | "Premiere"
  | "Band"
  | "Record"
  | "RedeTV"
  | "None";

export type CanalNumber = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "4k";

export interface TagCanalProps {
  /** The TV channel/brand name */
  channel: ChannelName;
  /** The canal number or identifier */
  canal?: CanalNumber;
}

const CHANNEL_CLASS_MAP: Record<ChannelName, string> = {
  "GE TV": "tagCanal--getv",
  SporTV: "tagCanal--sportv",
  ESPN: "tagCanal--espn",
  "HBO Max": "tagCanal--hbomax",
  SBT: "tagCanal--sbt",
  Premiere: "tagCanal--premiere",
  Band: "tagCanal--band",
  Record: "tagCanal--record",
  RedeTV: "tagCanal--redetv",
  None: "tagCanal--none",
};

function getLabel(channel: ChannelName, canal: CanalNumber): string {
  if (channel === "None") return "";

  if (channel === "SporTV") {
    const suffix = canal === "4k" ? "4K" : canal;
    return `sportv ${suffix}`;
  }

  if (channel === "GE TV") {
    return canal === "1" ? "GE TV" : `GE TV ${canal}`;
  }

  // Channels that only have canal 1 and don't show the number
  const singleCanal: ChannelName[] = ["HBO Max", "SBT", "Band", "Record", "RedeTV"];
  if (singleCanal.includes(channel) && canal === "1") {
    return channel;
  }

  return `${channel} ${canal}`;
}

export function TagCanal({ channel, canal = "1" }: TagCanalProps) {
  if (channel === "None") return null;

  const label = getLabel(channel, canal);
  const brandClass = CHANNEL_CLASS_MAP[channel];

  return (
    <span className={`tagCanal ${brandClass}`} title={label}>
      {label}
    </span>
  );
}
