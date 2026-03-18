import { useRef, useCallback, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { BannerCarousel } from "../components/BannerCarousel";
import { CardDestaque } from "../components/CardDestaque";
import type { CardDestaqueBroadcast } from "../components/CardDestaque";
import { CardJogo } from "../components/CardJogo";
import type { Broadcast } from "../components/CardJogo";
import { PopUpCard } from "../components/PopUpCard";
import { TagCanal } from "../components/TagCanal";
import { SearchBar } from "../components/SearchBar";
import { MenuButton } from "../components/MenuButton";
import { CalendarButton } from "../components/CalendarButton";
import { CTAButton } from "../components/CTAButton";
import { fetchEvents } from "../services/eventsService";
import type { EventData } from "../services/eventsService";
import defaultClubLogo from "../assets/default-club-logo.svg";
import logoWatch from "../assets/logo-watch.svg";
import "./HomePage.css";

interface SelectedMatch {
  championship: string;
  homeName: string;
  awayName: string;
  homeLogo: string;
  awayLogo: string;
  aoVivo?: boolean;
  gameDate?: string;
  broadcasts?: Broadcast[];
}

/* ─── Static match data (from Figma design) ─── */

const CAROUSEL_1 = [
  {
    championship: "FIBA EuroBasket",
    tagJogo: "Clássico" as const,
    teamA: { name: "Itália", logoSrc: defaultClubLogo },
    teamB: { name: "Espanha", logoSrc: defaultClubLogo },
    dateTime: "27 de Janeiro, 22:00",
    broadcasts: [
      { channel: "ESPN" as const, canal: "1" as const },
      { channel: "ESPN" as const, canal: "2" as const },
      { channel: "ESPN" as const, canal: "3" as const },
      { channel: "ESPN" as const, canal: "5" as const },
    ] satisfies Broadcast[],
  },
  {
    championship: "NBA",
    tagJogo: "Final" as const,
    teamA: { name: "Memphis Grizzles", logoSrc: defaultClubLogo },
    teamB: { name: "Minnesota Timberwolves", logoSrc: defaultClubLogo },
    dateTime: "27 de Janeiro, 19:00",
    broadcasts: [
      { channel: "ESPN" as const, canal: "5" as const },
      { channel: "ESPN" as const, canal: "6" as const },
      { channel: "Band" as const, canal: "1" as const },
    ] satisfies Broadcast[],
  },
  {
    championship: "Paulistão",
    tagJogo: "Clássico" as const,
    teamA: { name: "Corinthians", logoSrc: defaultClubLogo },
    teamB: { name: "Ponte Preta", logoSrc: defaultClubLogo },
    dateTime: "27 de Janeiro, 19:00",
    broadcasts: [
      { channel: "GE TV" as const, canal: "1" as const },
      { channel: "SporTV" as const, canal: "1" as const },
      { channel: "Premiere" as const, canal: "1" as const },
      { channel: "Premiere" as const, canal: "2" as const },
      { channel: "Premiere" as const, canal: "3" as const },
    ] satisfies Broadcast[],
  },
  {
    championship: "Campeonato Carioca",
    tagJogo: "Clássico" as const,
    teamA: { name: "Flamengo", logoSrc: defaultClubLogo },
    teamB: { name: "Vasco da Gama", logoSrc: defaultClubLogo },
    dateTime: "27 de Janeiro, 19:00",
    broadcasts: [
      { channel: "ESPN" as const, canal: "1" as const },
      { channel: "ESPN" as const, canal: "2" as const },
      { channel: "ESPN" as const, canal: "3" as const },
      { channel: "SBT" as const, canal: "1" as const },
    ] satisfies Broadcast[],
  },
];

const CAROUSEL_2 = [
  {
    championship: "NBA",
    tagJogo: "Clássico" as const,
    teamA: { name: "Celtics", logoSrc: defaultClubLogo },
    teamB: { name: "Lakers", logoSrc: defaultClubLogo },
    dateTime: "27 de Janeiro, 20:30",
    broadcasts: [
      { channel: "ESPN" as const, canal: "1" as const },
      { channel: "ESPN" as const, canal: "2" as const },
      { channel: "ESPN" as const, canal: "3" as const },
      { channel: "Band" as const, canal: "1" as const },
      { channel: "HBO Max" as const, canal: "1" as const },
    ] satisfies Broadcast[],
  },
  {
    championship: "NHL",
    tagJogo: "Final" as const,
    teamA: { name: "Seattle Kraken", logoSrc: defaultClubLogo },
    teamB: { name: "Buffalo Sabres", logoSrc: defaultClubLogo },
    dateTime: "27 de Janeiro, 18:30",
    broadcasts: [
      { channel: "ESPN" as const, canal: "2" as const },
      { channel: "ESPN" as const, canal: "3" as const },
      { channel: "ESPN" as const, canal: "6" as const },
      { channel: "HBO Max" as const, canal: "1" as const },
    ] satisfies Broadcast[],
  },
  {
    championship: "Champions League",
    tagJogo: "Clássico" as const,
    teamA: { name: "Chelsea", logoSrc: defaultClubLogo },
    teamB: { name: "Borussia Dortmund", logoSrc: defaultClubLogo },
    dateTime: "27 de Janeiro, 20:00",
    broadcasts: [
      { channel: "Premiere" as const, canal: "1" as const },
      { channel: "SBT" as const, canal: "1" as const },
      { channel: "HBO Max" as const, canal: "1" as const },
    ] satisfies Broadcast[],
  },
  {
    championship: "NHL",
    tagJogo: "Clássico" as const,
    teamA: { name: "Maple Leafs", logoSrc: defaultClubLogo },
    teamB: { name: "Pittsburgh Penguins", logoSrc: defaultClubLogo },
    dateTime: "27 de Janeiro, 23:00",
    broadcasts: [
      { channel: "SporTV" as const, canal: "2" as const },
      { channel: "ESPN" as const, canal: "5" as const },
      { channel: "HBO Max" as const, canal: "1" as const },
    ] satisfies Broadcast[],
  },
];

const LIVE_GAMES: {
  championship: string; homeName: string; awayName: string;
  homeLogo: string; awayLogo: string; aoVivo: boolean;
  gameDate?: string; broadcasts: CardDestaqueBroadcast[];
}[] = [
  {
    championship: "Paulistão", homeName: "Corinthians", awayName: "Ponte Preta",
    homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
    broadcasts: [{ channel: "SporTV", canal: "1" }, { channel: "GE TV" }],
  },
  {
    championship: "NBA", homeName: "Celtics", awayName: "Lakers",
    homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
    broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "GE TV" }],
  },
  {
    championship: "Champions League", homeName: "Chelsea", awayName: "Borussia Dortmund",
    homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: false, gameDate: "27/01 19:00",
    broadcasts: [{ channel: "SporTV", canal: "1" }, { channel: "GE TV" }],
  },
  {
    championship: "NHL", homeName: "Seattle Kraken", awayName: "Buffalo Sabres",
    homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: false, gameDate: "27/01 19:00",
    broadcasts: [{ channel: "ESPN", canal: "5" }, { channel: "ESPN", canal: "6" }],
  },
  {
    championship: "NBA", homeName: "Memphis Grizzlies", awayName: "Minnesota Timberwolves",
    homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: false, gameDate: "27/01 20:30",
    broadcasts: [{ channel: "SporTV", canal: "1" }, { channel: "GE TV" }],
  },
  {
    championship: "FIBA EuroBasket", homeName: "Itália", awayName: "Espanha",
    homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: false, gameDate: "27/01 18:30",
    broadcasts: [{ channel: "SporTV", canal: "1" }, { channel: "GE TV" }],
  },
];

function CarouselArrow({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      className={`homePage__carouselArrow homePage__carouselArrow--${direction}`}
      onClick={onClick}
      type="button"
      aria-label={direction === "left" ? "Anterior" : "Próximo"}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d={direction === "left" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function getWeekLabel(offset: number): string {
  const today = new Date();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay() + offset * 7);
  sunday.setHours(0, 0, 0, 0);
  const sat = new Date(sunday);
  sat.setDate(sunday.getDate() + 6);
  const fmt = (d: Date) =>
    `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
  return offset === 0 ? "Hoje" : `${fmt(sunday)} - ${fmt(sat)}`;
}

const MONTH_MAP: Record<string, string> = {
  janeiro: "01", fevereiro: "02", março: "03", abril: "04",
  maio: "05", junho: "06", julho: "07", agosto: "08",
  setembro: "09", outubro: "10", novembro: "11", dezembro: "12",
};

function formatGameDate(raw: string | undefined): string | undefined {
  if (!raw) return raw;
  if (/^\d{2}\/\d{2}/.test(raw)) return raw;
  const m = raw.match(/(\d+)\s+de\s+(\w+),?\s+(\d{1,2}:\d{2})/i);
  if (m) {
    const day = m[1].padStart(2, "0");
    const month = MONTH_MAP[m[2].toLowerCase()] ?? "??";
    return `${day}/${month} ${m[3]}`;
  }
  return raw;
}

function parseChannel(ch: string): Broadcast {
  const parts = ch.trim().split(" ");
  const canal = parts.length > 1 ? parts.pop() : undefined;
  const channel = parts.join(" ");
  return { channel, canal } as Broadcast;
}

export function HomePage() {
  const navigate = useNavigate();
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const [weekOffset, setWeekOffset] = useState(0);
  const [apiEvents, setApiEvents] = useState<EventData[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<SelectedMatch | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchEvents(undefined, controller.signal)
      .then(setApiEvents)
      .catch(() => {});
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!selectedMatch) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMatch(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedMatch]);

  const events = apiEvents.length > 0
    ? apiEvents.map((e) => ({
        championship: e.league,
        tagJogo: "None" as const,
        teamA: { name: e.homeTeam, logoSrc: e.homeTeamLogo || defaultClubLogo },
        teamB: { name: e.awayTeam, logoSrc: e.awayTeamLogo || defaultClubLogo },
        dateTime: e.date,
        broadcasts: e.channels.map(parseChannel),
      }))
    : [...CAROUSEL_1, ...CAROUSEL_2];

  const scroll = useCallback((ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (!ref.current) return;
    const amount = 320;
    ref.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  return (
    <div className="homePage">
      {/* ─── Sidebar ─── */}
      <aside className="homePage__sidebar">
        <div className="homePage__logo">
          <img src={logoWatch} alt="Streaming by Watch" className="homePage__logoImg" />
        </div>

        <span className="homePage__menuLabel">Menu</span>

        <nav className="homePage__navGroup">
          <MenuButton name="Home" active />
          <MenuButton name="Calendário" onClick={() => navigate("/calendar")} />
        </nav>

        <hr className="homePage__divider" />

        <div className="homePage__sportsGroup">
          <MenuButton name="Futebol" onClick={() => navigate("/sport/futebol")} />
          <MenuButton name="Basquete" onClick={() => navigate("/sport/basquete")} />
          <MenuButton name="Futebol Americano" onClick={() => navigate("/sport/futebol-americano")} />
          <MenuButton name="Automobilismo" onClick={() => navigate("/sport/automobilismo")} />
          <MenuButton name="Beisebol" onClick={() => navigate("/sport/beisebol")} />
          <MenuButton name="Hóquei" onClick={() => navigate("/sport/hoquei")} />
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="homePage__main">
        {/* Header */}
        <header className="homePage__header">
          <CTAButton label="Quero ser Watch" />
          <div className="homePage__headerSearch">
            <SearchBar onFocus={() => navigate("/search")} />
          </div>
        </header>

        {/* Banners */}
        <section className="homePage__banners">
          <div className="homePage__bannerMain">
            <BannerCarousel alt="Banner principal" />
          </div>
          <div className="homePage__liveGamesWrapper">
            <div className="homePage__liveGames">
              <h2 className="homePage__liveGamesTitle">Jogos ao vivo:</h2>
              {LIVE_GAMES.map((game, i) => (
                <CardDestaque
                  key={i}
                  tipo="Jogo"
                  aoVivo={game.aoVivo}
                  gameDate={game.gameDate}
                  homeLogo={game.homeLogo}
                  awayLogo={game.awayLogo}
                  broadcasts={game.broadcasts}
                  onClick={() => setSelectedMatch({
                    championship: game.championship,
                    homeName: game.homeName,
                    awayName: game.awayName,
                    homeLogo: game.homeLogo,
                    awayLogo: game.awayLogo,
                    aoVivo: game.aoVivo,
                    gameDate: game.gameDate,
                    broadcasts: game.broadcasts,
                  })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Match Section */}
        <section className="homePage__matchSection">
          <CalendarButton
            label={getWeekLabel(weekOffset)}
            onPrevious={() => setWeekOffset((o) => o - 1)}
            onNext={() => setWeekOffset((o) => o + 1)}
            onClick={() => setWeekOffset(0)}
          />
          <div className="homePage__carouselWrapper">
            <CarouselArrow direction="left" onClick={() => scroll(carousel1Ref, "left")} />
            <div className="homePage__carousel" ref={carousel1Ref}>
              {events.map((match, i) => (
                <CardJogo
                  key={`c1-${i}`}
                  championship={match.championship}
                  tagJogo={match.tagJogo}
                  teamA={match.teamA}
                  teamB={match.teamB}
                  dateTime={match.dateTime}
                  broadcasts={match.broadcasts}
                  onClick={() => setSelectedMatch({
                    championship: match.championship,
                    homeName: match.teamA.name,
                    awayName: match.teamB.name,
                    homeLogo: match.teamA.logoSrc,
                    awayLogo: match.teamB.logoSrc,
                    gameDate: formatGameDate(match.dateTime),
                    broadcasts: match.broadcasts,
                  })}
                />
              ))}
            </div>
            <CarouselArrow direction="right" onClick={() => scroll(carousel1Ref, "right")} />
          </div>
        </section>

        {/* Standings Widgets */}
        <section className="homePage__standingsSection">
          <h2 className="homePage__standingsTitle">Classificação Principais Competições</h2>
          <div className="homePage__standingsRow">
            <div className="homePage__standingsWidget">
              <div className="homePage__standingsScroll">
                <div className="homePage__standingsIframeWrap">
                  <iframe
                    id="sofa-standings-home-83-87678"
                    src="https://widgets.sofascore.com/pt-BR/embed/tournament/83/season/87678/standings/Brasileiro%20Serie%20A%202026?widgetTitle=Brasileiro%20Serie%20A%202026&showCompetitionLogo=true"
                    style={{ height: 1123, maxWidth: 768, width: "100%" }}
                    frameBorder="0"
                    scrolling="no"
                    title="Classificação Brasileiro Série A 2026"
                  />
                </div>
              </div>
            </div>
            <div className="homePage__standingsWidget">
              <div className="homePage__standingsScroll">
                <div className="homePage__standingsIframeWrap">
                  <iframe
                    id="sofa-standings-home-177-80229"
                    src="https://widgets.sofascore.com/pt-BR/embed/tournament/177/season/80229/standings/NBA%20Eastern%20Conference?widgetTitle=NBA%20Eastern%20Conference&showCompetitionLogo=true"
                    style={{ height: 923, maxWidth: 768, width: "100%" }}
                    frameBorder="0"
                    scrolling="no"
                    title="Classificação NBA Eastern Conference"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="homePage__footer">
          <div className="homePage__footerLinks">
            <span className="homePage__footerLink">Terms Of Service</span>
            <span className="homePage__footerLink">Report Abuse</span>
            <span className="homePage__footerLink">Privacy & Data Policy</span>
          </div>
          <span className="homePage__copyright">
            2026 All Rights Reserved &copy; WatchStats
          </span>
        </footer>
      </main>

      {/* Modal PopUpCard */}
      {selectedMatch && (
        <div className="homePage__modalOverlay" onClick={() => setSelectedMatch(null)}>
          <div className="homePage__modalContent" onClick={(e) => e.stopPropagation()}>
            <PopUpCard
              championship={selectedMatch.championship}
              homeName={selectedMatch.homeName}
              awayName={selectedMatch.awayName}
              homeLogo={selectedMatch.homeLogo}
              awayLogo={selectedMatch.awayLogo}
              aoVivo={selectedMatch.aoVivo}
              gameDate={selectedMatch.gameDate}
              channels={
                selectedMatch.broadcasts && (
                  <>
                    {selectedMatch.broadcasts.map((b, i) => (
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
