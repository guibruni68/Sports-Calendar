import { useState } from "react";
import type { SubTab } from "./showcase";
import {
  ClubeBallShowcase,
  FiltroShowcase,
  TagCanalShowcase,
  TagJogoShowcase,
  CardJogoShowcase,
  MenuButtonShowcase,
  FilterCalendarShowcase,
  SearchBarShowcase,
  CardEventShowcase,
  CardDestaqueShowcase,
  PopUpCardShowcase,
  BannerHeroShowcase,
} from "./showcase";
import "./ComponentShowcase.css";

type Component =
  | "clube-ball"
  | "filtro-campeonatos"
  | "tag-canal"
  | "tag-jogo"
  | "card-jogo"
  | "menu-button"
  | "filter-calendar"
  | "search-bar"
  | "card-event"
  | "card-destaque"
  | "popup-card"
  | "banner-hero";

const COMPONENTS: { id: Component; label: string; description: string }[] = [
  {
    id: "clube-ball",
    label: "Clube Ball",
    description:
      "Interactive club badge component with hover and selected states. Figma node 1:6010.",
  },
  {
    id: "filtro-campeonatos",
    label: "Filtro Campeonatos",
    description:
      "Championship filter chip/pill button with hover and active states. Figma node 1:6017.",
  },
  {
    id: "tag-canal",
    label: "Tag Canal",
    description:
      "TV channel tag/badge with brand-colored backgrounds. Supports 10 channels with multiple canal numbers. Figma node 1:6535.",
  },
  {
    id: "tag-jogo",
    label: "Tag Jogo",
    description:
      "Game tag pill for special matches — Clássico (derby) and Final. Customizable text with emoji. Figma node 1:6586.",
  },
  {
    id: "card-jogo",
    label: "Card Jogo",
    description:
      "Match card displaying championship, teams, date/time, and broadcast channels. Hover reveals orange border. Figma node 1:6217.",
  },
  {
    id: "menu-button",
    label: "Menu Button",
    description:
      "Navigation menu button with sport/nav icons. 10 variants across sports, navigation, and sidebar. Hover and active states with orange accent. Figma node 1:6073.",
  },
  {
    id: "filter-calendar",
    label: "Filter Calendar",
    description:
      "Sport category filter pill with unique active colors per sport. 7 variants: Todos, Futebol, Basquete, Futebol Americano, Automobilismo, Beisebol, Hóquei. Figma node 1:6765.",
  },
  {
    id: "search-bar",
    label: "Search Bar",
    description:
      "Search input with magnifying glass icon. Placeholder and icon brighten on hover/focus. Supports controlled input with typing state. Figma node 1:6694.",
  },
  {
    id: "card-event",
    label: "Card Event",
    description:
      "Sport event card with colored bar, match title, and team logos. 3 sports (Futebol, Basquete, Hóquei) with unique color schemes. Hover brightens background. Figma node 1:6710.",
  },
  {
    id: "card-destaque",
    label: "Card Destaque",
    description:
      "Featured card with 3 tipos: Jogo (match with logos, date/live badge, channels), Time (team logo + name), Competição (competition logo + name). Hover adds orange border. Figma node 1:6436.",
  },
  {
    id: "popup-card",
    label: "PopUp Card",
    description:
      "Large featured match card with decorative mesh background, championship title, team logos/names, score or AO VIVO badge, tag jogo, and broadcast channels. Figma node 1:6258.",
  },
  {
    id: "banner-hero",
    label: "Banner Hero",
    description:
      "Promotional hero banner with full-bleed image. Two size variants: Default (728x356) and Mini (620x350). Rounded corners with overflow clipping. Figma node 53:5921.",
  },
];

const SUB_TABS: { id: SubTab; label: string }[] = [
  { id: "styles", label: "Styles" },
  { id: "tokens", label: "Design Tokens" },
  { id: "properties", label: "Properties" },
];

const SHOWCASE_MAP: Record<Component, React.FC<{ subTab: SubTab }>> = {
  "clube-ball": ClubeBallShowcase,
  "filtro-campeonatos": FiltroShowcase,
  "tag-canal": TagCanalShowcase,
  "tag-jogo": TagJogoShowcase,
  "card-jogo": CardJogoShowcase,
  "menu-button": MenuButtonShowcase,
  "filter-calendar": FilterCalendarShowcase,
  "search-bar": SearchBarShowcase,
  "card-event": CardEventShowcase,
  "card-destaque": CardDestaqueShowcase,
  "popup-card": PopUpCardShowcase,
  "banner-hero": BannerHeroShowcase,
};

export function ComponentShowcase() {
  const [activeComponent, setActiveComponent] =
    useState<Component>("clube-ball");
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("styles");

  const current = COMPONENTS.find((c) => c.id === activeComponent)!;
  const ActiveShowcase = SHOWCASE_MAP[activeComponent];

  return (
    <div className="showcase">
      <aside className="showcase__sidebar">
        <div className="showcase__sidebar-header">Design System</div>
        {COMPONENTS.map((comp) => (
          <button
            key={comp.id}
            className={`showcase__sidebar-item ${activeComponent === comp.id ? "showcase__sidebar-item--active" : ""}`}
            onClick={() => {
              setActiveComponent(comp.id);
              setActiveSubTab("styles");
            }}
          >
            {comp.label}
          </button>
        ))}
      </aside>

      <main className="showcase__main">
        <div className="showcase__header">
          <h1>{current.label}</h1>
          <p>{current.description}</p>
        </div>

        <div className="showcase__tabs">
          {SUB_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`showcase__tab ${activeSubTab === tab.id ? "showcase__tab--active" : ""}`}
              onClick={() => setActiveSubTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ActiveShowcase subTab={activeSubTab} />
      </main>
    </div>
  );
}
