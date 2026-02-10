import "./CalendarButton.css";

export interface CalendarButtonProps {
  /** Label text displayed in the center button */
  label?: string;
  /** Callback when the left arrow is clicked */
  onPrevious?: () => void;
  /** Callback when the right arrow is clicked */
  onNext?: () => void;
  /** Callback when the center button is clicked */
  onClick?: () => void;
}

export function CalendarButton({
  label = "Hoje",
  onPrevious,
  onNext,
  onClick,
}: CalendarButtonProps) {
  return (
    <div className="calendarButton">
      <button
        className="calendarButton__arrow"
        onClick={onPrevious}
        aria-label="Dia anterior"
      >
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
          <path
            d="M5 1L1 5L5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button className="calendarButton__label" onClick={onClick}>
        {label}
      </button>

      <button
        className="calendarButton__arrow"
        onClick={onNext}
        aria-label="Próximo dia"
      >
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
          <path
            d="M1 1L5 5L1 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
