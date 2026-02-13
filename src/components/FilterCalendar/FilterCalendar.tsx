import "./FilterCalendar.css";

export type FilterCalendarName =
  | "Todos"
  | "Futebol"
  | "Basquete"
  | "Futebol Americano"
  | "Automobilismo"
  | "Beisebol"
  | "Hóquei";

export interface FilterCalendarProps {
  /** Sport filter name */
  name: FilterCalendarName;
  /** Whether this filter is in the active/clicked state */
  active?: boolean;
  /** Click handler */
  onClick?: () => void;
}

const ACTIVE_COLORS: Record<FilterCalendarName, string> = {
  Todos: "var(--color-primary)",
  Futebol: "var(--color-sport-futebol)",
  Basquete: "var(--color-sport-basquete)",
  "Futebol Americano": "var(--color-sport-futebol-americano)",
  Automobilismo: "var(--color-sport-automobilismo)",
  Beisebol: "var(--color-sport-beisebol)",
  Hóquei: "var(--color-sport-hockey)",
};

export function FilterCalendar({
  name,
  active = false,
  onClick,
}: FilterCalendarProps) {
  return (
    <button
      className={`filterCalendar ${active ? "filterCalendar--active" : ""}`}
      style={active ? { backgroundColor: ACTIVE_COLORS[name] } : undefined}
      onClick={onClick}
      type="button"
    >
      {name}
    </button>
  );
}
