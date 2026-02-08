import "./SearchBar.css";

export interface SearchBarProps {
  /** Placeholder text shown when input is empty */
  placeholder?: string;
  /** Controlled input value */
  value?: string;
  /** Callback when input value changes */
  onChange?: (value: string) => void;
  /** Callback when input gains focus */
  onFocus?: () => void;
  /** Callback when input loses focus */
  onBlur?: () => void;
}

export function SearchBar({
  placeholder = "Buscar times, jogos...",
  value,
  onChange,
  onFocus,
  onBlur,
}: SearchBarProps) {
  return (
    <div className="searchBar">
      <svg
        className="searchBar__icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M12.0482 11.0737L15 14.0248L14.0248 15L11.0737 12.0482C9.9757 12.9285 8.60993 13.4072 7.20262 13.4052C3.77877 13.4052 1 10.6265 1 7.20262C1 3.77877 3.77877 1 7.20262 1C10.6265 1 13.4052 3.77877 13.4052 7.20262C13.4072 8.60993 12.9285 9.9757 12.0482 11.0737ZM10.6657 10.5624C11.5404 9.66291 12.0289 8.45722 12.0269 7.20262C12.0269 4.53687 9.86768 2.37836 7.20262 2.37836C4.53687 2.37836 2.37836 4.53687 2.37836 7.20262C2.37836 9.86768 4.53687 12.0269 7.20262 12.0269C8.45722 12.0289 9.66291 11.5404 10.5624 10.6657L10.6657 10.5624Z"
          fill="currentColor"
        />
      </svg>
      <input
        className="searchBar__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}
