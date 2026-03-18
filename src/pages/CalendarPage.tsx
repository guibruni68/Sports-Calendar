import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuButton } from "../components/MenuButton";
import { CalendarButton } from "../components/CalendarButton";
import { FilterCalendar } from "../components/FilterCalendar";
import type { FilterCalendarName } from "../components/FilterCalendar";
import { SearchBar } from "../components/SearchBar";
import { CTAButton } from "../components/CTAButton";
import { CardEvent } from "../components/CardEvent";
import type { CardEventSport, CardEventTipo } from "../components/CardEvent";
import { PopUpCard } from "../components/PopUpCard";
import { TagCanal } from "../components/TagCanal";
import type { ChannelName, CanalNumber } from "../components/TagCanal";
import defaultClubLogo from "../assets/default-club-logo.svg";
import logoWatch from "../assets/logo-watch.svg";
import "./CalendarPage.css";

/* ─── Week helpers ─── */

const DAY_NAMES = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"] as const;

function getWeekDays(offset: number) {
  const today = new Date();
  // Sunday of the current week
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay() + offset * 7);
  sunday.setHours(0, 0, 0, 0);

  return DAY_NAMES.map((label, i) => {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    return {
      label,
      number: String(d.getDate()).padStart(2, "0"),
      month: String(d.getMonth() + 1).padStart(2, "0"),
      isToday: d.toDateString() === today.toDateString(),
    };
  });
}

function getWeekLabel(offset: number): string {
  const days = getWeekDays(offset);
  const s = days[0];
  const e = days[6];
  return `${s.number}/${s.month} - ${e.number}/${e.month}`;
}

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
  /** Card variant — "event" for single-entity sports (Automobilismo, etc.) */
  tipo?: CardEventTipo;
  league: string;
  title: string;
  homeLogo?: string;
  awayLogo?: string;
  /** Day column index 0–6 (DOM=0, SAB=6) */
  day: number;
  /** Hour row 0–23 */
  hour: number;
  broadcasts?: Broadcast[];
}

const EVENTS: CalendarEvent[] = [
  // SEG 02 – 9 AM (2 jogos)
  { sport: "Futebol", league: "Paulistão", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 9, broadcasts: [{ channel: "Premiere", canal: "1" }, { channel: "SporTV", canal: "1" }] },
  { sport: "Basquete", league: "NBA", title: "Lakers X Celtics", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 9, broadcasts: [{ channel: "ESPN", canal: "1" }] },
  // SEG 02 – 10 AM
  { sport: "Futebol", league: "Campeonato Carioca", title: "Flamengo X Vasco", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 10, broadcasts: [{ channel: "GE TV", canal: "1" }] },
  // TER 03 – 1 PM (2 jogos)
  { sport: "Futebol", league: "Paulistão", title: "Palmeiras X São Paulo", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 2, hour: 13, broadcasts: [{ channel: "GE TV", canal: "1" }, { channel: "SporTV", canal: "2" }] },
  { sport: "Hóquei", league: "NHL", title: "Maple Leafs X Penguins", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 2, hour: 13, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  // QUA 04 – 9 AM
  { sport: "Hóquei", league: "NHL", title: "Seattle Kraken X Buffalo Sabres", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 9, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  // QUA 04 – 12 PM (3 jogos — testa o +1)
  { sport: "Futebol", league: "Paulistão", title: "Corinthians X Santos", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 12, broadcasts: [{ channel: "Premiere", canal: "1" }] },
  { sport: "Basquete", league: "NBA", title: "Warriors X Nuggets", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 12, broadcasts: [{ channel: "ESPN", canal: "3" }] },
  { sport: "Futebol", league: "Gauchão", title: "Grêmio X Internacional", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 12, broadcasts: [{ channel: "SporTV", canal: "2" }] },
  // QUI 05 – 1 PM
  { sport: "Basquete", league: "NBA", title: "Houston Rockets X Denver Nuggets", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 13, broadcasts: [{ channel: "ESPN", canal: "1" }] },
  // QUI 05 – 3 PM (4 jogos — testa o +2)
  { sport: "Futebol", league: "Premier League", title: "Chelsea X Arsenal", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 15, broadcasts: [{ channel: "ESPN", canal: "1" }] },
  { sport: "Futebol", league: "La Liga", title: "Real Madrid X Barcelona", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 15, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  { sport: "Basquete", league: "NBA", title: "Celtics X Heat", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 15, broadcasts: [{ channel: "ESPN", canal: "3" }] },
  { sport: "Hóquei", league: "NHL", title: "Kraken X Bruins", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 4, hour: 15, broadcasts: [{ channel: "SporTV", canal: "1" }] },
  // SEX 06 – 6 PM
  { sport: "Hóquei", league: "NHL", title: "Seattle Kraken X Buffalo Sabres", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 5, hour: 18, broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "SporTV", canal: "4k" }] },
  // SAB 07 – 9 AM (2 jogos)
  { sport: "Futebol", league: "Paulistão", title: "Corinthians X Ponte Preta", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 9, broadcasts: [{ channel: "SporTV", canal: "1" }, { channel: "Premiere", canal: "2" }] },
  { sport: "Basquete", league: "NBA", title: "Rockets X Grizzlies", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 9, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  // SAB 07 – 12 PM
  { sport: "Futebol", league: "Campeonato Carioca", title: "Botafogo X Fluminense", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 12, broadcasts: [{ channel: "SBT" }, { channel: "Premiere", canal: "3" }] },
  // SAB 07 – 2 PM
  { sport: "Futebol", league: "Campeonato Mineiro", title: "Atletico-MG X Cruzeiro", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 14, broadcasts: [{ channel: "Band" }, { channel: "Premiere", canal: "1" }] },
  // SAB 07 – 5 PM
  { sport: "Hóquei", league: "NHL", title: "Seattle Kraken X Buffalo Sabres", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 6, hour: 17, broadcasts: [{ channel: "ESPN", canal: "3" }] },
  // SEG 02 – 4 PM
  { sport: "Basquete", league: "NBA", title: "Houston Rockets X Denver Nuggets", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 1, hour: 16, broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "SporTV", canal: "3" }] },
  // QUA 04 – 5 PM
  { sport: "Basquete", league: "NBA", title: "Timberwolves X Suns", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 17, broadcasts: [{ channel: "ESPN", canal: "2" }] },
  // QUA 04 – 3 PM
  { sport: "Futebol", league: "Premier League", title: "Liverpool X Man City", homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, day: 3, hour: 15, broadcasts: [{ channel: "Premiere", canal: "2" }] },
  // QUI 05 – 5 PM — Automobilismo (event tipo)
  { sport: "Automobilismo", tipo: "event", league: "Fórmula 1", title: "GP da Austrália", homeLogo: defaultClubLogo, day: 4, hour: 17, broadcasts: [{ channel: "Band" }, { channel: "SporTV", canal: "2" }] },
  // SEX 06 – 10 AM — Automobilismo
  { sport: "Automobilismo", tipo: "event", league: "Fórmula 1", title: "GP do Bahrein", homeLogo: defaultClubLogo, day: 5, hour: 10, broadcasts: [{ channel: "Band" }] },
];

/* ─── Filter → Sport mapping ─── */

const FILTER_TO_SPORT: Partial<Record<FilterCalendarName, CardEventSport>> = {
  Futebol: "Futebol",
  Basquete: "Basquete",
  Hóquei: "Hóquei",
  Automobilismo: "Automobilismo",
};

/* ─── Page Component ─── */

export function CalendarPage() {
  const navigate = useNavigate();
  const [weekOffset, setWeekOffset] = useState(0);
  const [activeFilter, setActiveFilter] = useState<FilterCalendarName>("Todos");
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [expandedCells, setExpandedCells] = useState<Set<string>>(new Set());
  const mainRef = useRef<HTMLElement>(null);
  const currentHourRef = useRef<HTMLDivElement>(null);

  const weekDays = getWeekDays(weekOffset);

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
    if (weekOffset === 0 && currentHourRef.current && mainRef.current) {
      const offset = currentHourRef.current.offsetTop - 100;
      mainRef.current.scrollTo({ top: offset, behavior: "instant" });
    } else if (weekOffset !== 0 && mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [weekOffset]);

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
      {/*
        Split-scroll architecture:
        - calendarPage__main: overflow hidden (does NOT scroll)
        - calendarPage__header (CTA + Search) is first, always visible
        - calendarPage__calendarHeader (filters) and calendarPage__gridHeader (day names)
          are always-visible, non-sticky elements above the scroll area.
        - calendarPage__gridBody is the ONLY scroll container.
          Grid cells are physically impossible to escape above the day-header row.
      */}
      <main className="calendarPage__main">
        {/* Page header — CTA + Search, always on top */}
        <header className="calendarPage__header">
          <CTAButton label="Quero ser Watch" />
          <div className="calendarPage__headerSearch">
            <SearchBar onFocus={() => navigate("/search")} />
          </div>
        </header>

        {/* Calendar */}
        <section className="calendarPage__calendar">
          {/* Filter bar — always visible, never sticky */}
          <div className="calendarPage__calendarHeader">
            <CalendarButton
              label={getWeekLabel(weekOffset)}
              onPrevious={() => setWeekOffset((o) => o - 1)}
              onNext={() => setWeekOffset((o) => o + 1)}
              onClick={() => setWeekOffset(0)}
            />
            <FilterCalendar name="Todos" active={activeFilter === "Todos"} onClick={() => setActiveFilter("Todos")} />
            <FilterCalendar name="Futebol" active={activeFilter === "Futebol"} onClick={() => setActiveFilter("Futebol")} />
            <FilterCalendar name="Basquete" active={activeFilter === "Basquete"} onClick={() => setActiveFilter("Basquete")} />
            <FilterCalendar name="Hóquei" active={activeFilter === "Hóquei"} onClick={() => setActiveFilter("Hóquei")} />
            <FilterCalendar name="Futebol Americano" active={activeFilter === "Futebol Americano"} onClick={() => setActiveFilter("Futebol Americano")} />
            <FilterCalendar name="Automobilismo" active={activeFilter === "Automobilismo"} onClick={() => setActiveFilter("Automobilismo")} />
            <FilterCalendar name="Beisebol" active={activeFilter === "Beisebol"} onClick={() => setActiveFilter("Beisebol")} />
          </div>

          {/* Day-header row — always visible, never sticky */}
          <div className="calendarPage__gridHeader">
            <div className="calendarPage__cornerCell" />
            {weekDays.map((d) => (
              <div
                key={d.label}
                className={`calendarPage__dayHeader${d.isToday ? " calendarPage__dayHeader--today" : ""}`}
              >
                <span className="calendarPage__dayLabel">{d.label}</span>
                <span className="calendarPage__dayNumber">{d.number}</span>
              </div>
            ))}
          </div>

          {/* Scrollable body — only this scrolls */}
          <div ref={mainRef} className="calendarPage__gridBody">
            {/* Hour grid */}
            <div className="calendarPage__grid">
              {HOURS.map((hour) => (
                <Fragment key={hour}>
                  <div
                    ref={hour === new Date().getHours() ? currentHourRef : undefined}
                    className="calendarPage__timeLabel"
                  >
                    {formatHour(hour)}
                  </div>
                  {weekDays.map((_, dayIdx) => {
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
                            tipo={event.tipo ?? "versus"}
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

            {/* Footer scrolls with grid */}
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
          </div>
        </section>
      </main>

      {/* Modal PopUpCard */}
      {selectedEvent && (
        <div className="calendarPage__modalOverlay" onClick={() => setSelectedEvent(null)}>
          <div className="calendarPage__modalContent" onClick={(e) => e.stopPropagation()}>
            <PopUpCard
              championship={selectedEvent.league}
              tipo={selectedEvent.tipo === "event" ? "event" : "versus"}
              homeName={selectedEvent.title.split(" X ")[0]}
              awayName={selectedEvent.title.split(" X ")[1]}
              homeLogo={selectedEvent.homeLogo ?? ""}
              awayLogo={selectedEvent.awayLogo}
              gameDate={`${weekDays[selectedEvent.day].number}/${weekDays[selectedEvent.day].month} ${String(selectedEvent.hour).padStart(2, "0")}:00`}
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
