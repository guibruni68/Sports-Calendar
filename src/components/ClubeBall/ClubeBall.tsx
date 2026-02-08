import { useState } from "react";
import "./ClubeBall.css";

export interface ClubeBallProps {
  /** URL or imported path of the club logo image */
  logoSrc: string;
  /** Club name used for alt text and accessibility */
  clubName: string;
  /** Whether this club ball is in the selected state */
  selected?: boolean;
  /** Size variant: "sm" (80px), "md" (124px, default), "lg" (164px) */
  size?: "sm" | "md" | "lg";
  /** Callback when the club ball is clicked */
  onClick?: () => void;
}

export function ClubeBall({
  logoSrc,
  clubName,
  selected = false,
  size = "md",
  onClick,
}: ClubeBallProps) {
  const [isPressed, setIsPressed] = useState(false);

  const sizeClass = size !== "md" ? `clubeBall--${size}` : "";
  const selectedClass = selected || isPressed ? "selected" : "";

  return (
    <button
      type="button"
      className={`clubeBall ${sizeClass} ${selectedClass}`.trim()}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      aria-label={clubName}
      aria-pressed={selected}
      title={clubName}
    >
      <img
        className="clubeBall__logo"
        src={logoSrc}
        alt={`${clubName} logo`}
      />
    </button>
  );
}
