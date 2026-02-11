import { useState } from "react";
import { MenuButton } from "../components/MenuButton";
import { CalendarButton } from "../components/CalendarButton";
import { FilterCalendar } from "../components/FilterCalendar";
import type { FilterCalendarName } from "../components/FilterCalendar";
import { SearchBar } from "../components/SearchBar";
import { CTAButton } from "../components/CTAButton";
import { CardEvent } from "../components/CardEvent";
import type { CardEventSport } from "../components/CardEvent";
import defaultClubLogo from "../assets/default-club-logo.svg";
import "./CalendarPage.css";

/* ─── Week days ─── */

const WEEK_DAYS = [
  { label: "DOM", number: "01" },
  { label: "SEG", number: "02" },
  { label: "TER", number: "03" },
  { label: "QUA", number: "04" },
  { label: "QUI", number: "05" },
  { label: "SEX", number: "06" },
  { label: "SAB", number: "07" },
];

/* ─── Hours (7 AM – 7 PM) ─── */

const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

function formatHour(h: number): string {
  if (h === 0) return "12 AM";
  if (h < 12) return `${h} AM`;
  if (h === 12) return "12 PM";
  return `${h - 12} PM`;
}

/* ─── Static event data (from Figma design) ─── */

interface CalendarEvent {
  sport: CardEventSport;
  title: string;
  homeLogo: string;
  awayLogo: string;
  /** Day column index 0–6 (DOM=0, SAB=6) */
  day: number;
  /** Hour row 7–19 */
  hour: number;
}

const EVENTS: CalendarEvent[] = [
  // SEG 02 – 9 AM
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 9 },
  // SEG 02 – 10 AM
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 10 },
  // QUA 04 – 9 AM
  { sport: "Hóquei", title: "Seattle Kraken X Buffalo Sabres", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 9 },
  // SAB 07 – 9 AM
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 9 },
  // QUA 04 – 12 PM
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 12 },
  // SAB 07 – 12 PM
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 12 },
  // TER 03 – 1 PM
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 2, hour: 13 },
  // QUI 05 – 1 PM
  { sport: "Basquete", title: "Houston Rockets X Denver Nuggets", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 13 },
  // SAB 07 – 2 PM
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 14 },
  // QUA 04 – 3 PM
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 15 },
  // SEG 02 – 4 PM
  { sport: "Basquete", title: "Houston Rockets X Denver Nuggets", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 16 },
  // QUA 04 – 5 PM
  { sport: "Basquete", title: "Houston Rockets X Denver Nuggets", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 17 },
  // SAB 07 – 5 PM (was labeled 6 PM area in design but appears at 5 PM row)
  { sport: "Hóquei", title: "Seattle Kraken X Buffalo Sabres", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 17 },
  // SEX 06 – 6 PM
  { sport: "Hóquei", title: "Seattle Kraken X Buffalo Sabres", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 5, hour: 18 },
];

/* ─── Filter → Sport mapping ─── */

const FILTER_TO_SPORT: Partial<Record<FilterCalendarName, CardEventSport>> = {
  Futebol: "Futebol",
  Basquete: "Basquete",
  Hóquei: "Hóquei",
};

/* ─── Page Component ─── */

export function CalendarPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCalendarName>("Todos");

  function getEvent(day: number, hour: number): CalendarEvent | undefined {
    return EVENTS.find((e) => {
      if (e.day !== day || e.hour !== hour) return false;
      if (activeFilter === "Todos") return true;
      const sport = FILTER_TO_SPORT[activeFilter];
      return sport ? e.sport === sport : false;
    });
  }

  return (
    <div className="calendarPage">
      {/* ─── Sidebar ─── */}
      <aside className="calendarPage__sidebar">
        <div className="calendarPage__logo">
          STREAMING by <span className="calendarPage__logoAccent">WATCH</span>
        </div>

        <span className="calendarPage__menuLabel">Menu</span>

        <nav className="calendarPage__navGroup">
          <MenuButton name="Home" />
          <MenuButton name="Calendário" active />
        </nav>

        <hr className="calendarPage__divider" />

        <div className="calendarPage__sportsGroup">
          <MenuButton name="Futebol" />
          <MenuButton name="Basquete" />
          <MenuButton name="Hóquei" />
          <MenuButton name="Futebol Americano" />
          <MenuButton name="Automobilismo" />
          <MenuButton name="Beisebol" />
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="calendarPage__main">
        {/* Header */}
        <header className="calendarPage__header">
          <div className="calendarPage__headerSearch">
            <SearchBar />
          </div>
          <CTAButton label="Subscribe" />
        </header>

        {/* Calendar */}
        <section className="calendarPage__calendar">
          {/* Calendar Header */}
          <div className="calendarPage__calendarHeader">
            <CalendarButton label="01/02 - 07/02" />
            <FilterCalendar name="Todos" active={activeFilter === "Todos"} onClick={() => setActiveFilter("Todos")} />
            <FilterCalendar name="Futebol" active={activeFilter === "Futebol"} onClick={() => setActiveFilter("Futebol")} />
            <FilterCalendar name="Basquete" active={activeFilter === "Basquete"} onClick={() => setActiveFilter("Basquete")} />
            <FilterCalendar name="Hóquei" active={activeFilter === "Hóquei"} onClick={() => setActiveFilter("Hóquei")} />
            <FilterCalendar name="Futebol Americano" active={activeFilter === "Futebol Americano"} onClick={() => setActiveFilter("Futebol Americano")} />
            <FilterCalendar name="Automobilismo" active={activeFilter === "Automobilismo"} onClick={() => setActiveFilter("Automobilismo")} />
            <FilterCalendar name="Beisebol" active={activeFilter === "Beisebol"} onClick={() => setActiveFilter("Beisebol")} />
          </div>

          {/* Calendar Grid */}
          <div className="calendarPage__grid">
            {/* Header row: corner + 7 days */}
            <div className="calendarPage__cornerCell" />
            {WEEK_DAYS.map((d) => (
              <div key={d.label} className="calendarPage__dayHeader">
                <span className="calendarPage__dayLabel">{d.label}</span>
                <span className="calendarPage__dayNumber">{d.number}</span>
              </div>
            ))}

            {/* Hour rows */}
            {HOURS.map((hour) => (
              <>
                {/* Time label */}
                <div key={`t-${hour}`} className="calendarPage__timeLabel">
                  {formatHour(hour)}
                </div>
                {/* 7 day cells */}
                {WEEK_DAYS.map((_, dayIdx) => {
                  const event = getEvent(dayIdx, hour);
                  return (
                    <div key={`c-${hour}-${dayIdx}`} className="calendarPage__cell">
                      {event && (
                        <CardEvent
                          sport={event.sport}
                          title={event.title}
                          homeLogo={event.homeLogo}
                          awayLogo={event.awayLogo}
                        />
                      )}
                    </div>
                  );
                })}
              </>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="calendarPage__footer">
          <div className="calendarPage__footerLinks">
            <span className="calendarPage__footerLink">Terms Of Service</span>
            <span className="calendarPage__footerLink">Report Abuse</span>
            <span className="calendarPage__footerLink">Privacy & Data Policy</span>
          </div>
          <span className="calendarPage__copyright">
            2026 All Rights Reserved &copy; WatchStats
          </span>
        </footer>
      </main>
    </div>
  );
}
