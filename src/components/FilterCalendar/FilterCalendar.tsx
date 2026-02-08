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
  Todos: "#EA580C",
  Futebol: "#40BD01",
  Basquete: "#FF0800",
  "Futebol Americano": "#E11577",
  Automobilismo: "#9B18BC",
  Beisebol: "#2822DA",
  Hóquei: "#0077FF",
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
