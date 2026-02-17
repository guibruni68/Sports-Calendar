import { useRef, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BannerCarousel } from "../components/BannerCarousel";
import { CardDestaque } from "../components/CardDestaque";
import { CardJogo } from "../components/CardJogo";
import type { Broadcast } from "../components/CardJogo";
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

const LIVE_GAMES = [
  {
    homeLogo: defaultClubLogo,
    awayLogo: defaultClubLogo,
    aoVivo: true,
    channels: (
      <>
        <TagCanal channel="SporTV" canal="1" />
        <TagCanal channel="GE TV" />
      </>
    ),
  },
  {
    homeLogo: defaultClubLogo,
    awayLogo: defaultClubLogo,
    aoVivo: true,
    channels: (
      <>
        <TagCanal channel="ESPN" canal="1" />
        <TagCanal channel="GE TV" />
      </>
    ),
  },
  {
    homeLogo: defaultClubLogo,
    awayLogo: defaultClubLogo,
    aoVivo: false,
    gameDate: "27/01 19:00",
    channels: (
      <>
        <TagCanal channel="SporTV" canal="1" />
        <TagCanal channel="GE TV" />
      </>
    ),
  },
  {
    homeLogo: defaultClubLogo,
    awayLogo: defaultClubLogo,
    aoVivo: false,
    gameDate: "27/01 19:00",
    channels: (
      <>
        <TagCanal channel="ESPN" canal="5" />
        <TagCanal channel="ESPN" canal="6" />
      </>
    ),
  },
  {
    homeLogo: defaultClubLogo,
    awayLogo: defaultClubLogo,
    aoVivo: false,
    gameDate: "27/01 20:30",
    channels: (
      <>
        <TagCanal channel="SporTV" canal="1" />
        <TagCanal channel="GE TV" />
      </>
    ),
  },
  {
    homeLogo: defaultClubLogo,
    awayLogo: defaultClubLogo,
    aoVivo: false,
    gameDate: "27/01 18:30",
    channels: (
      <>
        <TagCanal channel="SporTV" canal="1" />
        <TagCanal channel="GE TV" />
      </>
    ),
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

function parseChannel(ch: string): Broadcast {
  const parts = ch.trim().split(" ");
  const canal = parts.length > 1 ? parts.pop() : undefined;
  const channel = parts.join(" ");
  return { channel, canal } as Broadcast;
}

export function HomePage() {
  const navigate = useNavigate();
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const [apiEvents, setApiEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetchEvents(undefined, controller.signal)
      .then(setApiEvents)
      .catch(() => {});
    return () => controller.abort();
  }, []);

  const events = apiEvents.length > 0
    ? apiEvents.map((e) => ({
        championship: "",
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
          <div className="homePage__headerSearch">
            <SearchBar onFocus={() => navigate("/search")} />
          </div>
          <CTAButton label="Quero ser Watch" />
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
                  channels={game.channels}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Match Section */}
        <section className="homePage__matchSection">
          <CalendarButton label="Hoje" />
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
    </div>
  );
}
