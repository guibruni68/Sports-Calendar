import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuButton } from "../components/MenuButton";
import { CardDestaque } from "../components/CardDestaque";
import { TagCanal } from "../components/TagCanal";
import { SearchBar } from "../components/SearchBar";
import { CTAButton } from "../components/CTAButton";
import defaultClubLogo from "../assets/default-club-logo.svg";
import "./SearchPage.css";

/* ─── Static search result data (from Figma design) ─── */

const JOGOS_RESULTS = [
  {
    homeLogo: defaultClubLogo,
    awayLogo: defaultClubLogo,
    aoVivo: true,
    channels: (
      <>
        <TagCanal channel="Premiere" canal="1" />
        <TagCanal channel="SporTV" canal="4k" />
      </>
    ),
  },
  {
    homeLogo: defaultClubLogo,
    awayLogo: defaultClubLogo,
    aoVivo: false,
    gameDate: "19/02 20:00",
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
    gameDate: "04/03 19:00",
    channels: (
      <>
        <TagCanal channel="SporTV" canal="1" />
        <TagCanal channel="GE TV" />
      </>
    ),
  },
];

const TIMES_RESULTS = [
  { name: "Seleção Brasileira de Futebol", logo: defaultClubLogo },
  { name: "Seleção Brasileira de Basquete", logo: defaultClubLogo },
  { name: "Seleção Brasileira de Rugby", logo: defaultClubLogo },
  { name: "Brasiliense Futebol Clube", logo: defaultClubLogo },
  { name: "Real Brasília", logo: defaultClubLogo },
];

const COMPETICOES_RESULTS = [
  { name: "Copa do Brasil", logo: defaultClubLogo },
  { name: "Brasileirão Série A", logo: defaultClubLogo },
  { name: "Brasileirão Série B", logo: defaultClubLogo },
  { name: "Brasileirão Série C", logo: defaultClubLogo },
];

/* ─── Page Component ─── */

export function SearchPage() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("Bra");

  return (
    <div className="searchPage">
      {/* ─── Sidebar ─── */}
      <aside className="searchPage__sidebar">
        <div className="searchPage__logo">
          STREAMING by <span className="searchPage__logoAccent">WATCH</span>
        </div>

        <span className="searchPage__menuLabel">Menu</span>

        <nav className="searchPage__navGroup">
          <MenuButton name="Home" onClick={() => navigate("/")} />
          <MenuButton name="Calendário" onClick={() => navigate("/calendar")} />
        </nav>

        <hr className="searchPage__divider" />

        <div className="searchPage__sportsGroup">
          <MenuButton name="Futebol" onClick={() => navigate("/sport/futebol")} />
          <MenuButton name="Basquete" onClick={() => navigate("/sport/basquete")} />
          <MenuButton name="Futebol Americano" onClick={() => navigate("/sport/futebol-americano")} />
          <MenuButton name="Automobilismo" onClick={() => navigate("/sport/automobilismo")} />
          <MenuButton name="Beisebol" onClick={() => navigate("/sport/beisebol")} />
          <MenuButton name="Hóquei" onClick={() => navigate("/sport/hoquei")} />
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="searchPage__main">
        {/* Header */}
        <header className="searchPage__header">
          <CTAButton label="Quero ser Watch" />
          <div className="searchPage__headerSearch">
            <SearchBar value={searchValue} onChange={setSearchValue} />
          </div>
        </header>

        {/* Search Results */}
        <section className="searchPage__results">
          {/* Jogos Column */}
          <div className="searchPage__resultCard">
            <h2 className="searchPage__resultTitle">Jogos</h2>
            <div className="searchPage__resultList">
              {JOGOS_RESULTS.map((game, i) => (
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

          {/* Times Column */}
          <div className="searchPage__resultCard">
            <h2 className="searchPage__resultTitle">Times</h2>
            <div className="searchPage__resultList">
              {TIMES_RESULTS.map((team, i) => (
                <CardDestaque
                  key={i}
                  tipo="Time"
                  logo={team.logo}
                  name={team.name}
                />
              ))}
            </div>
          </div>

          {/* Competições Column */}
          <div className="searchPage__resultCard">
            <h2 className="searchPage__resultTitle">Competições</h2>
            <div className="searchPage__resultList">
              {COMPETICOES_RESULTS.map((comp, i) => (
                <CardDestaque
                  key={i}
                  tipo="Competição"
                  logo={comp.logo}
                  name={comp.name}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="searchPage__footer">
          <div className="searchPage__footerLinks">
            <span className="searchPage__footerLink">Terms Of Service</span>
            <span className="searchPage__footerLink">Report Abuse</span>
            <span className="searchPage__footerLink">Privacy & Data Policy</span>
          </div>
          <span className="searchPage__copyright">
            2026 All Rights Reserved &copy; WatchStats
          </span>
        </footer>
      </main>
    </div>
  );
}
