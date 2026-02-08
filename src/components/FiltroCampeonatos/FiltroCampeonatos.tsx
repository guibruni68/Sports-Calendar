import "./FiltroCampeonatos.css";

export interface FiltroCampeonatosProps {
  /** The label text displayed inside the filter chip */
  label: string;
  /** Whether this filter is currently active/selected */
  active?: boolean;
  /** Size variant: "sm", "md" (default), "lg" */
  size?: "sm" | "md" | "lg";
  /** Callback when the filter is clicked */
  onClick?: () => void;
}

export function FiltroCampeonatos({
  label,
  active = false,
  size = "md",
  onClick,
}: FiltroCampeonatosProps) {
  const sizeClass = size !== "md" ? `filtroCampeonatos--${size}` : "";
  const activeClass = active ? "active" : "";

  return (
    <button
      type="button"
      className={`filtroCampeonatos ${sizeClass} ${activeClass}`.trim()}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
