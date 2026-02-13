import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BannerHero } from "../components/BannerHero";
import { CardDestaque } from "../components/CardDestaque";
import { CardJogo } from "../components/CardJogo";
import type { Broadcast } from "../components/CardJogo";
import { TagCanal } from "../components/TagCanal";
import { ClubeBall } from "../components/ClubeBall";
import { CardHorizontal } from "../components/CardHorizontal";
import { FiltroCampeonatos } from "../components/FiltroCampeonatos";
import { CalendarButton } from "../components/CalendarButton";
import { MenuButton } from "../components/MenuButton";
import type { MenuButtonName } from "../components/MenuButton";
import { SearchBar } from "../components/SearchBar";
import { CTAButton } from "../components/CTAButton";
import defaultClubLogo from "../assets/default-club-logo.svg";
import bannerHeroBg from "../assets/banner-hero-bg.png";
import "./SportPage.css";

/* ─── Sport configuration type ─── */

interface SportMatch {
  championship: string;
  tagJogo?: "Clássico" | "Final" | "None";
  teamA: { name: string; logoSrc: string };
  teamB: { name: string; logoSrc: string };
  dateTime: string;
  broadcasts: Broadcast[];
}

interface SportConfig {
  name: string;
  menuName: MenuButtonName;
  slug: string;
  championships: string[];
  liveGames: {
    homeLogo: string;
    awayLogo: string;
    aoVivo: boolean;
    gameDate?: string;
    channels: React.ReactNode;
  }[];
  matches: SportMatch[];
  clubs: { name: string; logoSrc: string }[];
  upcomingGames: {
    homeLogo: string;
    awayLogo: string;
    gameDate: string;
    channels: React.ReactNode;
  }[];
}

/* ─── Sport-specific data ─── */

const SPORT_DATA: Record<string, SportConfig> = {
  futebol: {
    name: "Futebol",
    menuName: "Futebol",
    slug: "futebol",
    championships: ["Todos", "Brasileirão", "Paulistão", "Champions League", "Premier League", "La Liga", "Copa do Brasil"],
    liveGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
        channels: <><TagCanal channel="SporTV" canal="1" /><TagCanal channel="GE TV" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
        channels: <><TagCanal channel="Premiere" canal="1" /><TagCanal channel="GE TV" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: false, gameDate: "27/01 19:00",
        channels: <><TagCanal channel="SporTV" canal="1" /><TagCanal channel="GE TV" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: false, gameDate: "27/01 20:30",
        channels: <><TagCanal channel="ESPN" canal="1" /><TagCanal channel="ESPN" canal="2" /></>,
      },
    ],
    matches: [
      {
        championship: "Paulistão", tagJogo: "Clássico",
        teamA: { name: "Corinthians", logoSrc: defaultClubLogo },
        teamB: { name: "Ponte Preta", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 19:00",
        broadcasts: [{ channel: "SporTV", canal: "1" }, { channel: "Premiere", canal: "1" }],
      },
      {
        championship: "Campeonato Carioca", tagJogo: "Clássico",
        teamA: { name: "Flamengo", logoSrc: defaultClubLogo },
        teamB: { name: "Vasco da Gama", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 20:30",
        broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "ESPN", canal: "2" }, { channel: "SBT", canal: "1" }],
      },
      {
        championship: "Champions League", tagJogo: "Clássico",
        teamA: { name: "Chelsea", logoSrc: defaultClubLogo },
        teamB: { name: "Borussia Dortmund", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 22:00",
        broadcasts: [{ channel: "HBO Max", canal: "1" }, { channel: "SBT", canal: "1" }],
      },
      {
        championship: "Premier League", tagJogo: "None",
        teamA: { name: "Arsenal", logoSrc: defaultClubLogo },
        teamB: { name: "Liverpool", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 23:30",
        broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "ESPN", canal: "3" }],
      },
    ],
    clubs: Array.from({ length: 11 }, (_, i) => ({ name: `Clube ${i + 1}`, logoSrc: defaultClubLogo })),
    upcomingGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, gameDate: "27/01 19:00",
        channels: <><TagCanal channel="SporTV" canal="1" /><TagCanal channel="GE TV" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, gameDate: "27/01 20:30",
        channels: <><TagCanal channel="SporTV" canal="1" /><TagCanal channel="GE TV" /></>,
      },
    ],
  },
  basquete: {
    name: "Basquete",
    menuName: "Basquete",
    slug: "basquete",
    championships: ["Todos", "NBA", "NBB", "FIBA EuroBasket", "Basquete Universitário", "WNBA Finals"],
    liveGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
        channels: <><TagCanal channel="ESPN" canal="1" /><TagCanal channel="ESPN" canal="2" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
        channels: <><TagCanal channel="ESPN" canal="3" /><TagCanal channel="ESPN" canal="5" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
        channels: <><TagCanal channel="ESPN" canal="1" /><TagCanal channel="ESPN" canal="2" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: false, gameDate: "27/01 22:00",
        channels: <><TagCanal channel="Premiere" canal="1" /><TagCanal channel="GE TV" /></>,
      },
    ],
    matches: [
      {
        championship: "Nome do Campeonato", tagJogo: "None",
        teamA: { name: "Memphis Grizzles", logoSrc: defaultClubLogo },
        teamB: { name: "Minnesota Timberwolves", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 19:00",
        broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "ESPN", canal: "3" }, { channel: "Band", canal: "1" }],
      },
      {
        championship: "Nome do Campeonato", tagJogo: "Clássico",
        teamA: { name: "Celtics", logoSrc: defaultClubLogo },
        teamB: { name: "Lakers", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 20:30",
        broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "ESPN", canal: "3" }, { channel: "Band", canal: "1" }],
      },
      {
        championship: "FIBA EuroBasket", tagJogo: "Clássico",
        teamA: { name: "Itália", logoSrc: defaultClubLogo },
        teamB: { name: "Espanha", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 22:00",
        broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "ESPN", canal: "2" }, { channel: "ESPN", canal: "3" }],
      },
      {
        championship: "NBA", tagJogo: "Final",
        teamA: { name: "Warriors", logoSrc: defaultClubLogo },
        teamB: { name: "Nuggets", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 23:30",
        broadcasts: [{ channel: "ESPN", canal: "5" }, { channel: "ESPN", canal: "6" }],
      },
    ],
    clubs: Array.from({ length: 11 }, (_, i) => ({ name: `Time ${i + 1}`, logoSrc: defaultClubLogo })),
    upcomingGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, gameDate: "27/01 19:00",
        channels: <><TagCanal channel="SporTV" canal="1" /><TagCanal channel="GE TV" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, gameDate: "27/01 19:00",
        channels: <><TagCanal channel="SporTV" canal="1" /><TagCanal channel="GE TV" /></>,
      },
    ],
  },
  "futebol-americano": {
    name: "Futebol Americano",
    menuName: "Futebol Americano",
    slug: "futebol-americano",
    championships: ["Todos", "NFL", "Super Bowl", "College Football", "CFL"],
    liveGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
        channels: <><TagCanal channel="ESPN" canal="1" /><TagCanal channel="ESPN" canal="2" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: false, gameDate: "27/01 22:00",
        channels: <><TagCanal channel="ESPN" canal="3" /><TagCanal channel="Band" canal="1" /></>,
      },
    ],
    matches: [
      {
        championship: "NFL", tagJogo: "None",
        teamA: { name: "Kansas City Chiefs", logoSrc: defaultClubLogo },
        teamB: { name: "San Francisco 49ers", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 22:00",
        broadcasts: [{ channel: "ESPN", canal: "1" }, { channel: "ESPN", canal: "2" }],
      },
      {
        championship: "NFL", tagJogo: "Final",
        teamA: { name: "Dallas Cowboys", logoSrc: defaultClubLogo },
        teamB: { name: "Philadelphia Eagles", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 23:30",
        broadcasts: [{ channel: "ESPN", canal: "3" }, { channel: "Band", canal: "1" }],
      },
    ],
    clubs: Array.from({ length: 11 }, (_, i) => ({ name: `Time ${i + 1}`, logoSrc: defaultClubLogo })),
    upcomingGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, gameDate: "28/01 22:00",
        channels: <><TagCanal channel="ESPN" canal="1" /><TagCanal channel="ESPN" canal="2" /></>,
      },
    ],
  },
  automobilismo: {
    name: "Automobilismo",
    menuName: "Automobilismo",
    slug: "automobilismo",
    championships: ["Todos", "Fórmula 1", "MotoGP", "IndyCar", "NASCAR", "Stock Car"],
    liveGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
        channels: <><TagCanal channel="Band" canal="1" /><TagCanal channel="ESPN" canal="1" /></>,
      },
    ],
    matches: [
      {
        championship: "Fórmula 1", tagJogo: "None",
        teamA: { name: "Red Bull", logoSrc: defaultClubLogo },
        teamB: { name: "Mercedes", logoSrc: defaultClubLogo },
        dateTime: "02 de Fevereiro, 11:00",
        broadcasts: [{ channel: "Band", canal: "1" }, { channel: "ESPN", canal: "1" }],
      },
      {
        championship: "Stock Car", tagJogo: "None",
        teamA: { name: "Equipe A", logoSrc: defaultClubLogo },
        teamB: { name: "Equipe B", logoSrc: defaultClubLogo },
        dateTime: "02 de Fevereiro, 14:00",
        broadcasts: [{ channel: "SporTV", canal: "2" }],
      },
    ],
    clubs: Array.from({ length: 11 }, (_, i) => ({ name: `Equipe ${i + 1}`, logoSrc: defaultClubLogo })),
    upcomingGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, gameDate: "02/02 11:00",
        channels: <><TagCanal channel="Band" canal="1" /><TagCanal channel="ESPN" canal="1" /></>,
      },
    ],
  },
  beisebol: {
    name: "Beisebol",
    menuName: "Beisebol",
    slug: "beisebol",
    championships: ["Todos", "MLB", "World Series", "NPB", "KBO"],
    liveGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
        channels: <><TagCanal channel="ESPN" canal="5" /><TagCanal channel="ESPN" canal="6" /></>,
      },
    ],
    matches: [
      {
        championship: "MLB", tagJogo: "None",
        teamA: { name: "New York Yankees", logoSrc: defaultClubLogo },
        teamB: { name: "Boston Red Sox", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 21:00",
        broadcasts: [{ channel: "ESPN", canal: "5" }, { channel: "ESPN", canal: "6" }],
      },
      {
        championship: "MLB", tagJogo: "Clássico",
        teamA: { name: "Los Angeles Dodgers", logoSrc: defaultClubLogo },
        teamB: { name: "San Francisco Giants", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 23:00",
        broadcasts: [{ channel: "ESPN", canal: "1" }],
      },
    ],
    clubs: Array.from({ length: 11 }, (_, i) => ({ name: `Time ${i + 1}`, logoSrc: defaultClubLogo })),
    upcomingGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, gameDate: "28/01 21:00",
        channels: <><TagCanal channel="ESPN" canal="5" /><TagCanal channel="ESPN" canal="6" /></>,
      },
    ],
  },
  hoquei: {
    name: "Hóquei",
    menuName: "Hóquei",
    slug: "hoquei",
    championships: ["Todos", "NHL", "KHL", "SHL", "AHL"],
    liveGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: true,
        channels: <><TagCanal channel="ESPN" canal="2" /><TagCanal channel="ESPN" canal="3" /></>,
      },
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, aoVivo: false, gameDate: "27/01 21:00",
        channels: <><TagCanal channel="ESPN" canal="5" /><TagCanal channel="HBO Max" /></>,
      },
    ],
    matches: [
      {
        championship: "NHL", tagJogo: "Clássico",
        teamA: { name: "Seattle Kraken", logoSrc: defaultClubLogo },
        teamB: { name: "Buffalo Sabres", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 18:30",
        broadcasts: [{ channel: "ESPN", canal: "2" }, { channel: "ESPN", canal: "3" }, { channel: "HBO Max", canal: "1" }],
      },
      {
        championship: "NHL", tagJogo: "Clássico",
        teamA: { name: "Maple Leafs", logoSrc: defaultClubLogo },
        teamB: { name: "Pittsburgh Penguins", logoSrc: defaultClubLogo },
        dateTime: "27 de Janeiro, 23:00",
        broadcasts: [{ channel: "SporTV", canal: "2" }, { channel: "ESPN", canal: "5" }],
      },
    ],
    clubs: Array.from({ length: 11 }, (_, i) => ({ name: `Time ${i + 1}`, logoSrc: defaultClubLogo })),
    upcomingGames: [
      {
        homeLogo: defaultClubLogo, awayLogo: defaultClubLogo, gameDate: "28/01 18:30",
        channels: <><TagCanal channel="ESPN" canal="2" /><TagCanal channel="ESPN" canal="3" /></>,
      },
    ],
  },
};

/* ─── Carousel Arrow helper ─── */

function CarouselArrow({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      className={`sportPage__carouselArrow sportPage__carouselArrow--${direction}`}
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

/* ─── Placeholder image for CardHorizontal ─── */
const PLACEHOLDER_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='260' fill='%231b1c21'%3E%3Crect width='400' height='260'/%3E%3C/svg%3E";

/* ─── Sport routes mapping ─── */
const SPORT_ROUTES: Record<string, string> = {
  Futebol: "/sport/futebol",
  Basquete: "/sport/basquete",
  Hóquei: "/sport/hoquei",
  "Futebol Americano": "/sport/futebol-americano",
  Automobilismo: "/sport/automobilismo",
  Beisebol: "/sport/beisebol",
};

/* ─── Page Component ─── */

const AIRTABLE_BASE = "https://api.airtable.com/v0/appFzpEcAata6XxpD/team";
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN ?? "";

interface AirtableTeam {
  name: string;
  logoSrc: string;
}

export function SportPage({ sport }: { sport: string }) {
  const navigate = useNavigate();
  const config = SPORT_DATA[sport];
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [apiClubs, setApiClubs] = useState<AirtableTeam[]>([]);
  const matchesRef = useRef<HTMLDivElement>(null);
  const clubsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sport !== "futebol") return;

    const controller = new AbortController();
    fetch(`${AIRTABLE_BASE}?view=Grid%20view&filterByFormula=AND({name-team}!='',{Logo}!='')`, {
      headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` },
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        const teams: AirtableTeam[] = data.records
          .filter((r: { fields: { "name-team"?: string; Logo?: string } }) =>
            r.fields["name-team"]?.trim() && r.fields.Logo?.trim()
          )
          .map((r: { fields: { "name-team": string; Logo: string } }) => ({
            name: r.fields["name-team"],
            logoSrc: r.fields.Logo,
          }));
        setApiClubs(teams);
      })
      .catch(() => {});
    return () => controller.abort();
  }, [sport]);

  const clubs = sport === "futebol" && apiClubs.length > 0 ? apiClubs : config?.clubs ?? [];

  const scroll = useCallback((ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
  }, []);

  if (!config) return null;

  return (
    <div className="sportPage">
      {/* ─── Sidebar ─── */}
      <aside className="sportPage__sidebar">
        <div className="sportPage__logo">
          STREAMING by <span className="sportPage__logoAccent">WATCH</span>
        </div>

        <span className="sportPage__menuLabel">Menu</span>

        <nav className="sportPage__navGroup">
          <MenuButton name="Home" onClick={() => navigate("/")} />
          <MenuButton name="Calendário" onClick={() => navigate("/calendar")} />
        </nav>

        <hr className="sportPage__divider" />

        <div className="sportPage__sportsGroup">
          {(["Futebol", "Basquete", "Futebol Americano", "Automobilismo", "Beisebol", "Hóquei"] as MenuButtonName[]).map((s) => (
            <MenuButton
              key={s}
              name={s}
              active={s === config.menuName}
              onClick={() => navigate(SPORT_ROUTES[s])}
            />
          ))}
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="sportPage__main">
        {/* Header */}
        <header className="sportPage__header">
          <div className="sportPage__headerSearch">
            <SearchBar onFocus={() => navigate("/search")} />
          </div>
          <CTAButton label="Quero ser Watch" />
        </header>

        {/* Banner + Live Games */}
        <section className="sportPage__banners">
          <div className="sportPage__bannerMain">
            <BannerHero imageSrc={bannerHeroBg} alt={`Banner ${config.name}`} />
          </div>
          <div className="sportPage__liveGamesWrapper">
            <div className="sportPage__liveGames">
              <h2 className="sportPage__liveGamesTitle">Jogos ao vivo:</h2>
              {config.liveGames.map((game, i) => (
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

        {/* Championship Filters + Matches */}
        <section className="sportPage__matchSection">
          <div className="sportPage__filters">
            {config.championships.map((c) => (
              <FiltroCampeonatos
                key={c}
                label={c}
                active={activeFilter === c}
                onClick={() => setActiveFilter(c)}
              />
            ))}
          </div>

          <hr className="sportPage__sectionDivider" />

          <CalendarButton label="Hoje" />

          <div className="sportPage__carouselWrapper">
            <CarouselArrow direction="left" onClick={() => scroll(matchesRef, "left")} />
            <div className="sportPage__carousel" ref={matchesRef}>
              {config.matches.map((match, i) => (
                <CardJogo
                  key={i}
                  championship={match.championship}
                  tagJogo={match.tagJogo}
                  teamA={match.teamA}
                  teamB={match.teamB}
                  dateTime={match.dateTime}
                  broadcasts={match.broadcasts}
                />
              ))}
              {Array.from({ length: 7 }, (_, i) => (
                <CardHorizontal key={`h1-${i}`} imageSrc={PLACEHOLDER_IMG} tag="" />
              ))}
            </div>
            <CarouselArrow direction="right" onClick={() => scroll(matchesRef, "right")} />
          </div>
        </section>

        {/* Clubs Carousel */}
        <section className="sportPage__clubsSection">
          <div className="sportPage__carouselWrapper">
            <CarouselArrow direction="left" onClick={() => scroll(clubsRef, "left")} />
            <div className="sportPage__carousel sportPage__carousel--clubs" ref={clubsRef}>
              {clubs.map((club, i) => (
                <ClubeBall key={i} logoSrc={club.logoSrc} clubName={club.name} />
              ))}
            </div>
            <CarouselArrow direction="right" onClick={() => scroll(clubsRef, "right")} />
          </div>
        </section>

        {/* Upcoming Games + Mini Banner */}
        <section className="sportPage__matchSection">
          <hr className="sportPage__sectionDivider" />

          <div className="sportPage__bottomRow">
            <div className="sportPage__upcomingCard">
              <h2 className="sportPage__upcomingTitle">Começam daqui a pouco!</h2>
              {config.upcomingGames.map((game, i) => (
                <CardDestaque
                  key={i}
                  tipo="Jogo"
                  aoVivo={false}
                  gameDate={game.gameDate}
                  homeLogo={game.homeLogo}
                  awayLogo={game.awayLogo}
                  channels={game.channels}
                />
              ))}
            </div>
            <div className="sportPage__bannerMini">
              <BannerHero imageSrc={bannerHeroBg} alt={`Banner ${config.name}`} size="Mini" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="sportPage__footer">
          <div className="sportPage__footerLinks">
            <span className="sportPage__footerLink">Terms Of Service</span>
            <span className="sportPage__footerLink">Report Abuse</span>
            <span className="sportPage__footerLink">Privacy & Data Policy</span>
          </div>
          <span className="sportPage__copyright">
            2026 All Rights Reserved &copy; WatchStats
          </span>
        </footer>
      </main>
    </div>
  );
}
