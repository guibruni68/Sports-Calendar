import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuButton } from "../components/MenuButton";
import { CalendarButton } from "../components/CalendarButton";
import { FilterCalendar } from "../components/FilterCalendar";
import type { FilterCalendarName } from "../components/FilterCalendar";
import { SearchBar } from "../components/SearchBar";
import { CTAButton } from "../components/CTAButton";
import { CardEvent } from "../components/CardEvent";
import type { CardEventSport } from "../components/CardEvent";
import { PopUpCard } from "../components/PopUpCard";
import { TagCanal } from "../components/TagCanal";
import type { ChannelName, CanalNumber } from "../components/TagCanal";
import defaultClubLogo from "../assets/default-club-logo.svg";
import logoWatch from "../assets/logo-watch.svg";
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

/* ─── Hours (24h) ─── */

const HOURS = Array.from({ length: 24 }, (_, i) => i);

function formatHour(h: number): string {
  if (h === 0) return "12 AM";
  if (h < 12) return `${h} AM`;
  if (h === 12) return "12 PM";
  return `${h - 12} PM`;
}

/* ─── Static event data (from Figma design) ─── */

interface Broadcast {
  channel: ChannelName;
  canal?: CanalNumber;
}

interface CalendarEvent {
  sport: CardEventSport;
  title: string;
  homeLogo: string;
  awayLogo: string;
  /** Day column index 0–6 (DOM=0, SAB=6) */
  day: number;
  /** Hour row 0–23 */
  hour: number;
  broadcasts?: Broadcast[];
}

const EVENTS: CalendarEvent[] = [
  // SEG 02 – 9 AM (2 jogos)
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 9, broadcasts: [{ channel: "Premiere", canal: "1" }, { channel: "SporTV", canal: "1" }] },
  { sport: "Basquete", title: "Lakers X Celtics", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 9, broadcasts: [{ channel: "ESPN", canal: "1" }] },
  // SEG 02 – 10 AM
  { sport: "Futebol", title: "Flamengo X Vasco", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 10, broadcasts: [{ channel: "GE TV", canal: "1" }] },
  // TER 03 – 1 PM (2 jogos)
  { sport: "Futebol", title: "Palmeiras X São Paulo", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 2, hour: 13, broadcasts: [{ channel: "GE TV", canal: "1" }, { channel: "SporTV", canal: "2" }] },
  { sport: "Hóquei", title: "Maple Leafs X Penguins", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 2, hour: 13, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  // QUA 04 – 9 AM
  { sport: "Hóquei", title: "Seattle Kraken X Buffalo Sabres", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 9, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  // QUA 04 – 12 PM (3 jogos — testa o +1)
  { sport: "Futebol", title: "Corinthians X Santos", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 12, broadcasts: [{ channel: "Premiere", canal: "1" }] },
  { sport: "Basquete", title: "Warriors X Nuggets", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 12, broadcasts: [{ channel: "ESPN", canal: "3" }] },
  { sport: "Futebol", title: "Grêmio X Internacional", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 12, broadcasts: [{ channel: "SporTV", canal: "2" }] },
  // QUI 05 – 1 PM
  { sport: "Basquete", title: "Houston Rockets X Denver Nuggets", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 13, broadcasts: [{ channel: "ESPN", canal: "1" }] },
  // QUI 05 – 3 PM (4 jogos — testa o +2)
  { sport: "Futebol", title: "Chelsea X Arsenal", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 15, broadcasts: [{ channel: "ESPN", canal: "1" }] },
  { sport: "Futebol", title: "Real Madrid X Barcelona", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 15, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  { sport: "Basquete", title: "Celtics X Heat", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 15, broadcasts: [{ channel: "ESPN", canal: "3" }] },
  { sport: "Hóquei", title: "Kraken X Bruins", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 15, broadcasts: [{ channel: "SporTV", canal: "1" }] },
  // SEX 06 – 6 PM
  { sport: "Hóquei", title: "Seattle Kraken X Buffalo Sabres", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 5, hour: 18, broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "SporTV", canal: "4k" }] },
  // SAB 07 – 9 AM (2 jogos)
  { sport: "Futebol", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 9, broadcasts: [{ channel: "SporTV", canal: "1" }, { channel: "Premiere", canal: "2" }] },
  { sport: "Basquete", title: "Rockets X Grizzlies", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 9, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  // SAB 07 – 12 PM
  { sport: "Futebol", title: "Botafogo X Fluminense", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 12, broadcasts: [{ channel: "SBT" }, { channel: "Premiere", canal: "3" }] },
  // SAB 07 – 2 PM
  { sport: "Futebol", title: "Atletico-MG X Cruzeiro", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 14, broadcasts: [{ channel: "Band" }, { channel: "Premiere", canal: "1" }] },
  // SAB 07 – 5 PM
  { sport: "Hóquei", title: "Seattle Kraken X Buffalo Sabres", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 17, broadcasts: [{ channel: "ESPN", canal: "3" }] },
  // SEG 02 – 4 PM
  { sport: "Basquete", title: "Houston Rockets X Denver Nuggets", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 16, broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "SporTV", canal: "3" }] },
  // QUA 04 – 5 PM
  { sport: "Basquete", title: "Timberwolves X Suns", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 17, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  // QUA 04 – 3 PM
  { sport: "Futebol", title: "Liverpool X Man City", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 15, broadcasts: [{ channel: "Premiere", canal: "2" }] },
];

/* ─── Filter → Sport mapping ─── */

const FILTER_TO_SPORT: Partial<Record<FilterCalendarName, CardEventSport>> = {
  Futebol: "Futebol",
  Basquete: "Basquete",
  Hóquei: "Hóquei",
};

/* ─── Page Component ─── */

export function CalendarPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterCalendarName>("Todos");
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [expandedCells, setExpandedCells] = useState<Set<string>>(new Set());
  const mainRef = useRef<HTMLElement>(null);
  const currentHourRef = useRef<HTMLDivElement>(null);

  function toggleExpand(key: string) {
    setExpandedCells((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  useEffect(() => {
    if (expandedCells.size === 0) return;
    const main = mainRef.current;

    function handleScroll() {
      setExpandedCells(new Set());
    }

    main?.addEventListener("scroll", handleScroll);
    return () => {
      main?.removeEventListener("scroll", handleScroll);
    };
  }, [expandedCells.size]);

  useEffect(() => {
    if (currentHourRef.current && mainRef.current) {
      const offset = currentHourRef.current.offsetTop - 100;
      mainRef.current.scrollTo({ top: offset, behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    if (!selectedEvent) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedEvent]);

  function getEvents(day: number, hour: number): CalendarEvent[] {
    return EVENTS.filter((e) => {
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
          <img src={logoWatch} alt="Streaming by Watch" className="calendarPage__logoImg" />
        </div>

        <span className="calendarPage__menuLabel">Menu</span>

        <nav className="calendarPage__navGroup">
          <MenuButton name="Home" onClick={() => navigate("/")} />
          <MenuButton name="Calendário" active />
        </nav>

        <hr className="calendarPage__divider" />

        <div className="calendarPage__sportsGroup">
          <MenuButton name="Futebol" onClick={() => navigate("/sport/futebol")} />
          <MenuButton name="Basquete" onClick={() => navigate("/sport/basquete")} />
          <MenuButton name="Futebol Americano" onClick={() => navigate("/sport/futebol-americano")} />
          <MenuButton name="Automobilismo" onClick={() => navigate("/sport/automobilismo")} />
          <MenuButton name="Beisebol" onClick={() => navigate("/sport/beisebol")} />
          <MenuButton name="Hóquei" onClick={() => navigate("/sport/hoquei")} />
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main ref={mainRef} className="calendarPage__main">
        {/* Header */}
        <header className="calendarPage__header">
          <div className="calendarPage__headerSearch">
            <SearchBar onFocus={() => navigate("/search")} />
          </div>
          <CTAButton label="Quero ser Watch" />
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
              <Fragment key={hour}>
                {/* Time label */}
                <div
                  ref={hour === new Date().getHours() ? currentHourRef : undefined}
                  className="calendarPage__timeLabel"
                >
                  {formatHour(hour)}
                </div>
                {/* 7 day cells */}
                {WEEK_DAYS.map((_, dayIdx) => {
                  const events = getEvents(dayIdx, hour);
                  const cellKey = `${hour}-${dayIdx}`;
                  const isExpanded = expandedCells.has(cellKey);
                  const visible = isExpanded ? events : events.slice(0, 2);
                  const overflow = events.length - 2;
                  return (
                    <div key={`c-${cellKey}`} className="calendarPage__cell">
                      {visible.map((event, idx) => (
                        <CardEvent
                          key={idx}
                          sport={event.sport}
                          title={event.title}
                          homeLogo={event.homeLogo}
                          awayLogo={event.awayLogo}
                          onClick={() => setSelectedEvent(event)}
                        />
                      ))}
                      {overflow > 0 && !isExpanded && (
                        <button
                          className="calendarPage__cellOverflow"
                          onClick={() => toggleExpand(cellKey)}
                        >
                          +{overflow}
                        </button>
                      )}
                      {isExpanded && (
                        <button
                          className="calendarPage__cellOverflow"
                          onClick={() => toggleExpand(cellKey)}
                        >
                          ×
                        </button>
                      )}
                    </div>
                  );
                })}
              </Fragment>
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

      {/* Modal PopUpCard */}
      {selectedEvent && (
        <div className="calendarPage__modalOverlay" onClick={() => setSelectedEvent(null)}>
          <div className="calendarPage__modalContent" onClick={(e) => e.stopPropagation()}>
            <PopUpCard
              championship={selectedEvent.sport}
              homeName={selectedEvent.title.split(" X ")[0]}
              awayName={selectedEvent.title.split(" X ")[1]}
              homeLogo={selectedEvent.homeLogo}
              awayLogo={selectedEvent.awayLogo}
              gameDate={`${WEEK_DAYS[selectedEvent.day].label} ${WEEK_DAYS[selectedEvent.day].number} - ${formatHour(selectedEvent.hour)}`}
              channels={
                selectedEvent.broadcasts && (
                  <>
                    {selectedEvent.broadcasts.map((b, i) => (
                      <TagCanal key={`${b.channel}-${b.canal ?? "1"}-${i}`} channel={b.channel} canal={b.canal} />
                    ))}
                  </>
                )
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
