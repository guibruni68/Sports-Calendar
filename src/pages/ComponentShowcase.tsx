import { useState } from "react";
import { ClubeBall } from "../components/ClubeBall";
import { FiltroCampeonatos } from "../components/FiltroCampeonatos";
import { TagCanal } from "../components/TagCanal";
import type { ChannelName, CanalNumber } from "../components/TagCanal";
import { TagJogo } from "../components/TagJogo";
import type { TagJogoName } from "../components/TagJogo";
import { CardJogo } from "../components/CardJogo";
import { MenuButton } from "../components/MenuButton";
import type { MenuButtonName } from "../components/MenuButton";
import { FilterCalendar } from "../components/FilterCalendar";
import type { FilterCalendarName } from "../components/FilterCalendar";
import { SearchBar } from "../components/SearchBar";
import { CardEvent } from "../components/CardEvent";
import type { CardEventSport } from "../components/CardEvent";
import { CardDestaque } from "../components/CardDestaque";
import { PopUpCard } from "../components/PopUpCard";
import { TagCanal as TagCanalComponent } from "../components/TagCanal";
import corinthiansLogo from "../assets/corinthians-logo.png";
import pontePretaLogo from "../assets/ponte-preta-logo.png";
import defaultRef from "../assets/reference/default-state.png";
import hoverRef from "../assets/reference/hover-state.png";
import clickedRef from "../assets/reference/clicked-state.png";
import filtroDefaultRef from "../assets/reference/filtro-default.png";
import filtroHoverRef from "../assets/reference/filtro-hover.png";
import tagGetvRef from "../assets/reference/tag-getv.png";
import tagEspnRef from "../assets/reference/tag-espn.png";
import tagPremiereRef from "../assets/reference/tag-premiere.png";
import tagSportvRef from "../assets/reference/tag-sportv.png";
import tagHbomaxRef from "../assets/reference/tag-hbomax.png";
import tagRecordRef from "../assets/reference/tag-record.png";
import tagJogoClassicoRef from "../assets/reference/tagjogo-classico.png";
import tagJogoFinalRef from "../assets/reference/tagjogo-final.png";
import cardJogoDefaultRef from "../assets/reference/card-jogo-default.png";
import cardJogoHoverRef from "../assets/reference/card-jogo-hover.png";
import menuButtonSetRef from "../assets/reference/node-6073-set.png";
import filterCalendarSetRef from "../assets/reference/filter-calendar-set.png";
import searchBarSetRef from "../assets/reference/search-bar-set.png";
import cardEventSetRef from "../assets/reference/cards-events-set.png";
import cardDestaqueSetRef from "../assets/reference/calendar-date-set.png";
import popUpCardSetRef from "../assets/reference/popup-card-set.png";
import "./ComponentShowcase.css";

type Component = "clube-ball" | "filtro-campeonatos" | "tag-canal" | "tag-jogo" | "card-jogo" | "menu-button" | "filter-calendar" | "search-bar" | "card-event" | "card-destaque" | "popup-card";
type SubTab = "styles" | "tokens" | "properties";

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
];

const SUB_TABS: { id: SubTab; label: string }[] = [
  { id: "styles", label: "Styles" },
  { id: "tokens", label: "Design Tokens" },
  { id: "properties", label: "Properties" },
];

export function ComponentShowcase() {
  const [activeComponent, setActiveComponent] =
    useState<Component>("clube-ball");
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("styles");

  const current = COMPONENTS.find((c) => c.id === activeComponent)!;

  return (
    <div className="showcase">
      {/* Component selector */}
      <div className="showcase__component-nav">
        {COMPONENTS.map((comp) => (
          <button
            key={comp.id}
            className={`showcase__component-btn ${activeComponent === comp.id ? "showcase__component-btn--active" : ""}`}
            onClick={() => {
              setActiveComponent(comp.id);
              setActiveSubTab("styles");
            }}
          >
            {comp.label}
          </button>
        ))}
      </div>

      <div className="showcase__header">
        <h1>{current.label}</h1>
        <p>{current.description}</p>
      </div>

      {/* Sub tabs */}
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

      {/* Content */}
      {activeComponent === "clube-ball" && (
        <ClubeBallShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "filtro-campeonatos" && (
        <FiltroShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "tag-canal" && (
        <TagCanalShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "tag-jogo" && (
        <TagJogoShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "card-jogo" && (
        <CardJogoShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "menu-button" && (
        <MenuButtonShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "filter-calendar" && (
        <FilterCalendarShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "search-bar" && (
        <SearchBarShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "card-event" && (
        <CardEventShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "card-destaque" && (
        <CardDestaqueShowcase subTab={activeSubTab} />
      )}
      {activeComponent === "popup-card" && (
        <PopUpCardShowcase subTab={activeSubTab} />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CLUBE BALL SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

function ClubeBallShowcase({ subTab }: { subTab: SubTab }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [demoSelected, setDemoSelected] = useState(false);
  const [demoSize, setDemoSize] = useState<"sm" | "md" | "lg">("md");

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Variants</h2>
          <div className="styles-row">
            <div className="styles-item">
              <ClubeBall logoSrc={corinthiansLogo} clubName="Corinthians" />
              <span className="styles-item__label">Default</span>
            </div>
            <div className="styles-item">
              <ClubeBall
                logoSrc={corinthiansLogo}
                clubName="Corinthians"
                selected
              />
              <span className="styles-item__label">Selected</span>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Size Variations</h2>
          <div className="styles-row">
            <div className="styles-item">
              <ClubeBall
                logoSrc={corinthiansLogo}
                clubName="Corinthians"
                size="sm"
              />
              <span className="styles-item__label">Small (80px)</span>
            </div>
            <div className="styles-item">
              <ClubeBall
                logoSrc={corinthiansLogo}
                clubName="Corinthians"
                size="md"
              />
              <span className="styles-item__label">Medium (124px)</span>
            </div>
            <div className="styles-item">
              <ClubeBall
                logoSrc={corinthiansLogo}
                clubName="Corinthians"
                size="lg"
              />
              <span className="styles-item__label">Large (164px)</span>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Interactive Demo</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Click a club ball to toggle selection. Hover to see the border
            transition.
          </p>
          <div className="demo-area">
            {[0, 1, 2].map((id) => (
              <ClubeBall
                key={id}
                logoSrc={corinthiansLogo}
                clubName="Corinthians"
                selected={selectedId === id}
                onClick={() =>
                  setSelectedId(selectedId === id ? null : id)
                }
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <div className="styles-row">
            <div className="styles-item">
              <img
                src={defaultRef}
                alt="Figma default"
                style={{ width: 124, height: 124, borderRadius: 104 }}
              />
              <span className="styles-item__label">Figma: Default</span>
            </div>
            <div className="styles-item">
              <img
                src={hoverRef}
                alt="Figma hover"
                style={{ width: 124, height: 124, borderRadius: 104 }}
              />
              <span className="styles-item__label">Figma: Hover</span>
            </div>
            <div className="styles-item">
              <img
                src={clickedRef}
                alt="Figma clicked"
                style={{ width: 124, height: 124, borderRadius: 104 }}
              />
              <span className="styles-item__label">Figma: Selected</span>
            </div>
          </div>
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Color Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#1B1C21" }}
              />
              <div className="token-card__label">Background</div>
              <div className="token-card__value">#1B1C21</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#EA580C" }}
              />
              <div className="token-card__label">Border / Accent</div>
              <div className="token-card__value">#EA580C</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{
                  backgroundColor: "transparent",
                  border: "2px dashed #3f3f46",
                }}
              />
              <div className="token-card__label">Border Default</div>
              <div className="token-card__value">transparent</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Container Size (md)</div>
              <div className="token-card__value">124 x 124px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Logo Size (md)</div>
              <div className="token-card__value">88 x 88px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Container Size (sm)</div>
              <div className="token-card__value">80 x 80px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Logo Size (sm)</div>
              <div className="token-card__value">56 x 56px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Container Size (lg)</div>
              <div className="token-card__value">164 x 164px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Logo Size (lg)</div>
              <div className="token-card__value">116 x 116px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Border Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">104px (circle)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Width</div>
              <div className="token-card__value">2px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Stroke Align</div>
              <div className="token-card__value">inside</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Animation Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Hover Transition</div>
              <div className="token-card__value">300ms ease-out</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Click Transition</div>
              <div className="token-card__value">1022ms gentle</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Animation Type</div>
              <div className="token-card__value">Smart Animate</div>
            </div>
          </div>
        </div>
      </>
    );

  // properties
  return (
    <>
      <div className="showcase__section">
        <h2>Live Preview</h2>
        <div className="demo-area">
          <ClubeBall
            logoSrc={corinthiansLogo}
            clubName="Corinthians"
            selected={demoSelected}
            size={demoSize}
            onClick={() => setDemoSelected(!demoSelected)}
          />
        </div>
        <div className="demo-controls">
          <label>
            <input
              type="checkbox"
              checked={demoSelected}
              onChange={(e) => setDemoSelected(e.target.checked)}
            />
            selected
          </label>
          <label>
            size:
            <select
              value={demoSize}
              onChange={(e) =>
                setDemoSize(e.target.value as "sm" | "md" | "lg")
              }
            >
              <option value="sm">sm (80px)</option>
              <option value="md">md (124px) — default</option>
              <option value="lg">lg (164px)</option>
            </select>
          </label>
        </div>
      </div>

      <div className="showcase__section">
        <h2>Props Documentation</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>logoSrc</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>URL or imported path of the club logo image (required)</td>
            </tr>
            <tr>
              <td><code>clubName</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Club name used for alt text and ARIA label (required)</td>
            </tr>
            <tr>
              <td><code>selected</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Whether the club ball displays the selected (orange border) state</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>"sm" | "md" | "lg"</code></td>
              <td><code>"md"</code></td>
              <td>Size variant — sm (80px), md (124px), lg (164px)</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Callback fired when the club ball is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { ClubeBall } from "./components/ClubeBall";
import corinthiansLogo from "./assets/corinthians-logo.png";

<ClubeBall
  logoSrc={corinthiansLogo}
  clubName="Corinthians"
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>With selection state</h3>
        <div className="code-block">
          {`const [selected, setSelected] = useState(false);

<ClubeBall
  logoSrc={corinthiansLogo}
  clubName="Corinthians"
  selected={selected}
  onClick={() => setSelected(!selected)}
/>`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FILTRO CAMPEONATOS SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

const CHAMPIONSHIPS = [
  "Todos",
  "Champions League",
  "Paulistão",
  "Premier League",
  "La Liga",
  "Brasileirão",
];

function FiltroShowcase({ subTab }: { subTab: SubTab }) {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [demoActive, setDemoActive] = useState(false);
  const [demoSize, setDemoSize] = useState<"sm" | "md" | "lg">("md");
  const [demoLabel, setDemoLabel] = useState("Brasileirão");

  if (subTab === "styles")
    return (
      <>
        {/* Variants */}
        <div className="showcase__section">
          <h2>Variants</h2>
          <div className="styles-row">
            <div className="styles-item">
              <FiltroCampeonatos label="Todos" />
              <span className="styles-item__label">Default</span>
            </div>
            <div className="styles-item">
              <FiltroCampeonatos label="Todos" active />
              <span className="styles-item__label">Active</span>
            </div>
          </div>
        </div>

        {/* All championship names */}
        <div className="showcase__section">
          <h2>All Championship Options</h2>
          <div className="styles-row" style={{ gap: 12 }}>
            {CHAMPIONSHIPS.map((name) => (
              <FiltroCampeonatos
                key={name}
                label={name}
                active={activeFilter === name}
                onClick={() => setActiveFilter(name)}
              />
            ))}
          </div>
        </div>

        {/* Size variations */}
        <div className="showcase__section">
          <h2>Size Variations</h2>
          <div className="styles-row">
            <div className="styles-item">
              <FiltroCampeonatos label="La Liga" size="sm" />
              <span className="styles-item__label">Small</span>
            </div>
            <div className="styles-item">
              <FiltroCampeonatos label="La Liga" size="md" />
              <span className="styles-item__label">Medium (default)</span>
            </div>
            <div className="styles-item">
              <FiltroCampeonatos label="La Liga" size="lg" />
              <span className="styles-item__label">Large</span>
            </div>
          </div>
        </div>

        {/* Interactive demo */}
        <div className="showcase__section">
          <h2>Interactive Demo</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Click a filter to select it. Only one filter is active at a time.
            Hover to preview the active state.
          </p>
          <div className="demo-area">
            {CHAMPIONSHIPS.map((name) => (
              <FiltroCampeonatos
                key={name}
                label={name}
                active={activeFilter === name}
                onClick={() => setActiveFilter(name)}
              />
            ))}
          </div>
        </div>

        {/* Figma reference */}
        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <div className="styles-row">
            <div className="styles-item">
              <img
                src={filtroDefaultRef}
                alt="Figma filtro default"
                style={{ height: 40, borderRadius: 8 }}
              />
              <span className="styles-item__label">Figma: Default</span>
            </div>
            <div className="styles-item">
              <img
                src={filtroHoverRef}
                alt="Figma filtro hover"
                style={{ height: 40, borderRadius: 8 }}
              />
              <span className="styles-item__label">Figma: Hover / Active</span>
            </div>
          </div>
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Color Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#1B1C21" }}
              />
              <div className="token-card__label">Background (default)</div>
              <div className="token-card__value">#1B1C21</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#EA580C" }}
              />
              <div className="token-card__label">Background (active/hover)</div>
              <div className="token-card__value">#EA580C</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#FFFFFF" }}
              />
              <div className="token-card__label">Text Color</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Font Family</div>
              <div className="token-card__value">Montserrat</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Weight</div>
              <div className="token-card__value">400 (Regular)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Size</div>
              <div className="token-card__value">16px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Line Height</div>
              <div className="token-card__value">24px (150%)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Letter Spacing</div>
              <div className="token-card__value">0px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Text Align</div>
              <div className="token-card__value">center</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Padding (vertical)</div>
              <div className="token-card__value">8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Padding (horizontal)</div>
              <div className="token-card__value">16px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Height</div>
              <div className="token-card__value">40px (HUG)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Width</div>
              <div className="token-card__value">fit-content (HUG)</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Border & Animation Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border</div>
              <div className="token-card__value">none</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Hover Transition</div>
              <div className="token-card__value">300ms ease-out</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Animation Type</div>
              <div className="token-card__value">Smart Animate</div>
            </div>
          </div>
        </div>
      </>
    );

  // properties
  return (
    <>
      <div className="showcase__section">
        <h2>Live Preview</h2>
        <div className="demo-area">
          <FiltroCampeonatos
            label={demoLabel}
            active={demoActive}
            size={demoSize}
            onClick={() => setDemoActive(!demoActive)}
          />
        </div>
        <div className="demo-controls">
          <label>
            <input
              type="checkbox"
              checked={demoActive}
              onChange={(e) => setDemoActive(e.target.checked)}
            />
            active
          </label>
          <label>
            label:
            <select
              value={demoLabel}
              onChange={(e) => setDemoLabel(e.target.value)}
            >
              {CHAMPIONSHIPS.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label>
            size:
            <select
              value={demoSize}
              onChange={(e) =>
                setDemoSize(e.target.value as "sm" | "md" | "lg")
              }
            >
              <option value="sm">sm</option>
              <option value="md">md — default</option>
              <option value="lg">lg</option>
            </select>
          </label>
        </div>
      </div>

      <div className="showcase__section">
        <h2>Props Documentation</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>label</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>The championship name displayed inside the chip (required)</td>
            </tr>
            <tr>
              <td><code>active</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Whether the filter is in the active/selected state (orange background)</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>"sm" | "md" | "lg"</code></td>
              <td><code>"md"</code></td>
              <td>Size variant — sm (compact), md (default 40px), lg (large)</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Callback fired when the filter chip is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { FiltroCampeonatos } from "./components/FiltroCampeonatos";

<FiltroCampeonatos label="Brasileirão" />`}
        </div>
        <h3 style={{ marginTop: 24 }}>Filter group with single selection</h3>
        <div className="code-block">
          {`const [active, setActive] = useState("Todos");

const championships = [
  "Todos", "Champions League", "Paulistão",
  "Premier League", "La Liga", "Brasileirão"
];

{championships.map((name) => (
  <FiltroCampeonatos
    key={name}
    label={name}
    active={active === name}
    onClick={() => setActive(name)}
  />
))}`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   TAG CANAL SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

const ALL_CHANNELS: ChannelName[] = [
  "GE TV",
  "SporTV",
  "ESPN",
  "HBO Max",
  "SBT",
  "Premiere",
  "Band",
  "Record",
  "RedeTV",
];

const BRAND_COLORS: Record<string, string> = {
  "GE TV": "#6B0CAE",
  SporTV: "#2B762B",
  ESPN: "#C70000",
  "HBO Max": "#060516",
  SBT: "#0A0663",
  Premiere: "#007700",
  Band: "#73766E",
  Record: "#0910E3",
  RedeTV: "#097E79",
};

const CANAL_OPTIONS: Record<string, CanalNumber[]> = {
  "GE TV": ["1", "2"],
  SporTV: ["1", "2", "3", "4", "5", "4k"],
  ESPN: ["1", "2", "3", "4", "5", "6"],
  "HBO Max": ["1"],
  SBT: ["1"],
  Premiere: ["1", "2", "3", "4", "5"],
  Band: ["1"],
  Record: ["1"],
  RedeTV: ["1"],
};

const TAG_REFS = [
  { src: tagGetvRef, label: "GE TV" },
  { src: tagEspnRef, label: "ESPN" },
  { src: tagPremiereRef, label: "Premiere" },
  { src: tagSportvRef, label: "SporTV" },
  { src: tagHbomaxRef, label: "HBO Max" },
  { src: tagRecordRef, label: "Record" },
];

function TagCanalShowcase({ subTab }: { subTab: SubTab }) {
  const [demoChannel, setDemoChannel] = useState<ChannelName>("ESPN");
  const [demoCanal, setDemoCanal] = useState<CanalNumber>("1");

  if (subTab === "styles")
    return (
      <>
        {/* All brands */}
        <div className="showcase__section">
          <h2>All Channel Brands</h2>
          <div className="styles-row" style={{ gap: 8, flexWrap: "wrap" }}>
            {ALL_CHANNELS.map((ch) => (
              <TagCanal key={ch} channel={ch} canal="1" />
            ))}
          </div>
        </div>

        {/* Multi-canal channels */}
        <div className="showcase__section">
          <h2>Multi-Canal Channels</h2>

          <h3>ESPN (Canals 1–6)</h3>
          <div className="styles-row" style={{ gap: 8, marginBottom: 24 }}>
            {(["1", "2", "3", "4", "5", "6"] as CanalNumber[]).map((c) => (
              <TagCanal key={c} channel="ESPN" canal={c} />
            ))}
          </div>

          <h3>SporTV (Canals 1–5, 4K)</h3>
          <div className="styles-row" style={{ gap: 8, marginBottom: 24 }}>
            {(["1", "2", "3", "4", "5", "4k"] as CanalNumber[]).map((c) => (
              <TagCanal key={c} channel="SporTV" canal={c} />
            ))}
          </div>

          <h3>Premiere (Canals 1–5)</h3>
          <div className="styles-row" style={{ gap: 8 }}>
            {(["1", "2", "3", "4", "5"] as CanalNumber[]).map((c) => (
              <TagCanal key={c} channel="Premiere" canal={c} />
            ))}
          </div>
        </div>

        {/* Figma reference */}
        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <div className="styles-row" style={{ gap: 12, flexWrap: "wrap" }}>
            {TAG_REFS.map((ref) => (
              <div key={ref.label} className="styles-item">
                <img
                  src={ref.src}
                  alt={`Figma ${ref.label}`}
                  style={{ height: 24, borderRadius: 4 }}
                />
                <span className="styles-item__label">Figma: {ref.label}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Brand Color Tokens</h2>
          <div className="token-grid">
            {Object.entries(BRAND_COLORS).map(([name, color]) => (
              <div key={name} className="token-card">
                <div
                  className="token-card__preview"
                  style={{ backgroundColor: color }}
                />
                <div className="token-card__label">{name}</div>
                <div className="token-card__value">{color}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Font Family</div>
              <div className="token-card__value">Montserrat</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Weight</div>
              <div className="token-card__value">400 (Regular)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Size</div>
              <div className="token-card__value">12px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Line Height</div>
              <div className="token-card__value">16px (133%)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Text Color</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Border Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Height</div>
              <div className="token-card__value">24px (fixed)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Padding</div>
              <div className="token-card__value">4px 8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Width</div>
              <div className="token-card__value">fit-content (HUG)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">4px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border</div>
              <div className="token-card__value">none</div>
            </div>
          </div>
        </div>
      </>
    );

  // properties
  return (
    <>
      <div className="showcase__section">
        <h2>Live Preview</h2>
        <div className="demo-area">
          <TagCanal channel={demoChannel} canal={demoCanal} />
        </div>
        <div className="demo-controls">
          <label>
            channel:
            <select
              value={demoChannel}
              onChange={(e) => {
                const ch = e.target.value as ChannelName;
                setDemoChannel(ch);
                setDemoCanal("1");
              }}
            >
              {ALL_CHANNELS.map((ch) => (
                <option key={ch} value={ch}>
                  {ch}
                </option>
              ))}
            </select>
          </label>
          <label>
            canal:
            <select
              value={demoCanal}
              onChange={(e) => setDemoCanal(e.target.value as CanalNumber)}
            >
              {(CANAL_OPTIONS[demoChannel] || ["1"]).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="showcase__section">
        <h2>Props Documentation</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>channel</code></td>
              <td><code>ChannelName</code></td>
              <td>—</td>
              <td>The TV channel brand (required). One of: GE TV, SporTV, ESPN, HBO Max, SBT, Premiere, Band, Record, RedeTV, None</td>
            </tr>
            <tr>
              <td><code>canal</code></td>
              <td><code>CanalNumber</code></td>
              <td><code>"1"</code></td>
              <td>The canal number. One of: "0", "1", "2", "3", "4", "5", "6", "4k"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { TagCanal } from "./components/TagCanal";

<TagCanal channel="ESPN" canal="1" />
<TagCanal channel="SporTV" canal="4k" />
<TagCanal channel="HBO Max" />`}
        </div>
        <h3 style={{ marginTop: 24 }}>Displaying multiple tags for a match</h3>
        <div className="code-block">
          {`const channels = [
  { channel: "ESPN", canal: "1" },
  { channel: "Premiere", canal: "3" },
];

<div style={{ display: "flex", gap: 4 }}>
  {channels.map((ch) => (
    <TagCanal
      key={\`\${ch.channel}-\${ch.canal}\`}
      channel={ch.channel}
      canal={ch.canal}
    />
  ))}
</div>`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   TAG JOGO SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

function TagJogoShowcase({ subTab }: { subTab: SubTab }) {
  const [demoName, setDemoName] = useState<TagJogoName>("Clássico");
  const [demoText, setDemoText] = useState("");

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Variants</h2>
          <div className="styles-row" style={{ gap: 12 }}>
            <div className="styles-item">
              <TagJogo name="Clássico" />
              <span className="styles-item__label">Clássico</span>
            </div>
            <div className="styles-item">
              <TagJogo name="Final" />
              <span className="styles-item__label">Final</span>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Custom Text</h2>
          <div className="styles-row" style={{ gap: 12 }}>
            <TagJogo name="Clássico" text="🔥 Derbi!" />
            <TagJogo name="Final" text="🏆 Grande Final!" />
            <TagJogo name="Clássico" text="⚡ Rivalidade!" />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <div className="styles-row" style={{ gap: 16 }}>
            <div className="styles-item">
              <img
                src={tagJogoClassicoRef}
                alt="Figma Clássico"
                style={{ height: 24, borderRadius: 9999 }}
              />
              <span className="styles-item__label">Figma: Clássico</span>
            </div>
            <div className="styles-item">
              <img
                src={tagJogoFinalRef}
                alt="Figma Final"
                style={{ height: 24, borderRadius: 9999 }}
              />
              <span className="styles-item__label">Figma: Final</span>
            </div>
          </div>
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Color Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#EA580C" }}
              />
              <div className="token-card__label">Clássico Background</div>
              <div className="token-card__value">#EA580C</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#8400DB" }}
              />
              <div className="token-card__label">Final Background</div>
              <div className="token-card__value">#8400DB</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#FFFFFF" }}
              />
              <div className="token-card__label">Text Color</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Font Family</div>
              <div className="token-card__value">Segoe UI</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Weight</div>
              <div className="token-card__value">700 (Bold)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Size</div>
              <div className="token-card__value">14px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Line Height</div>
              <div className="token-card__value">16px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Border Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Height</div>
              <div className="token-card__value">24px (HUG)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Padding</div>
              <div className="token-card__value">4px 12px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">9999px (full pill)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border</div>
              <div className="token-card__value">none</div>
            </div>
          </div>
        </div>
      </>
    );

  // properties
  return (
    <>
      <div className="showcase__section">
        <h2>Live Preview</h2>
        <div className="demo-area">
          <TagJogo
            name={demoName}
            text={demoText || undefined}
          />
        </div>
        <div className="demo-controls">
          <label>
            name:
            <select
              value={demoName}
              onChange={(e) => setDemoName(e.target.value as TagJogoName)}
            >
              <option value="Clássico">Clássico</option>
              <option value="Final">Final</option>
              <option value="None">None (hidden)</option>
            </select>
          </label>
          <label>
            text (custom):
            <input
              type="text"
              value={demoText}
              onChange={(e) => setDemoText(e.target.value)}
              placeholder="Leave empty for default"
            />
          </label>
        </div>
      </div>

      <div className="showcase__section">
        <h2>Props Documentation</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>name</code></td>
              <td><code>TagJogoName</code></td>
              <td>—</td>
              <td>Tag type (required): "Clássico" (orange), "Final" (purple), or "None" (hidden)</td>
            </tr>
            <tr>
              <td><code>text</code></td>
              <td><code>string</code></td>
              <td>auto</td>
              <td>Custom text. Defaults to "⚔️ Clássico!" or "🏆 Final!" based on name</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { TagJogo } from "./components/TagJogo";

<TagJogo name="Clássico" />
<TagJogo name="Final" />`}
        </div>
        <h3 style={{ marginTop: 24 }}>Custom text</h3>
        <div className="code-block">
          {`<TagJogo name="Clássico" text="🔥 Derbi!" />
<TagJogo name="Final" text="🏆 Grande Final!" />`}
        </div>
        <h3 style={{ marginTop: 24 }}>Conditionally hidden</h3>
        <div className="code-block">
          {`<TagJogo name={isSpecialMatch ? "Clássico" : "None"} />`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CARD JOGO SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

function CardJogoShowcase({ subTab }: { subTab: SubTab }) {
  const [demoTag, setDemoTag] = useState<TagJogoName>("Clássico");
  const [demoChampionship, setDemoChampionship] = useState("Paulistão");

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Default State</h2>
          <CardJogo
            championship="Paulistão"
            tagJogo="Clássico"
            teamA={{ name: "Corinthians", logoSrc: corinthiansLogo }}
            teamB={{ name: "Ponte Preta", logoSrc: pontePretaLogo }}
            dateTime="20/03 - 21:30"
            broadcasts={[
              { channel: "GE TV", canal: "1" },
              { channel: "SporTV", canal: "1" },
              { channel: "Premiere", canal: "1" },
              { channel: "Premiere", canal: "2" },
              { channel: "Premiere", canal: "3" },
            ]}
          />
        </div>

        <div className="showcase__section">
          <h2>Hover State</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Hover over the card above to see the orange border. Below is the
            Figma reference for both states.
          </p>
          <div className="styles-row" style={{ gap: 24 }}>
            <div className="styles-item">
              <img
                src={cardJogoDefaultRef}
                alt="Figma Card Jogo Default"
                style={{ width: 492, borderRadius: 10 }}
              />
              <span className="styles-item__label">Figma: Default</span>
            </div>
            <div className="styles-item">
              <img
                src={cardJogoHoverRef}
                alt="Figma Card Jogo Hover"
                style={{ width: 492, borderRadius: 10 }}
              />
              <span className="styles-item__label">Figma: Hover</span>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Variants</h2>
          <div className="styles-row" style={{ gap: 24, flexWrap: "wrap" }}>
            <div className="styles-item">
              <CardJogo
                championship="Brasileirão"
                tagJogo="Final"
                teamA={{ name: "Corinthians", logoSrc: corinthiansLogo }}
                teamB={{ name: "Ponte Preta", logoSrc: pontePretaLogo }}
                dateTime="15/12 - 16:00"
                broadcasts={[
                  { channel: "ESPN", canal: "1" },
                  { channel: "HBO Max", canal: "1" },
                ]}
              />
              <span className="styles-item__label">With "Final" tag</span>
            </div>
            <div className="styles-item">
              <CardJogo
                championship="Champions League"
                tagJogo="None"
                teamA={{ name: "Corinthians", logoSrc: corinthiansLogo }}
                teamB={{ name: "Ponte Preta", logoSrc: pontePretaLogo }}
                dateTime="08/04 - 16:00"
                broadcasts={[{ channel: "SBT", canal: "1" }]}
              />
              <span className="styles-item__label">Without tag</span>
            </div>
          </div>
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Color Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#1B1C21" }}
              />
              <div className="token-card__label">Card Background</div>
              <div className="token-card__value">#1B1C21</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#ED590D" }}
              />
              <div className="token-card__label">Hover Border</div>
              <div className="token-card__value">#ED590D</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#EA580C" }}
              />
              <div className="token-card__label">Championship Text</div>
              <div className="token-card__value">#EA580C</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#FFFFFF" }}
              />
              <div className="token-card__label">Team Name</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
              />
              <div className="token-card__label">Date/Time</div>
              <div className="token-card__value">#FFFFFF 70%</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              />
              <div className="token-card__label">Broadcast Border</div>
              <div className="token-card__value">#FFFFFF 10%</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Championship Font</div>
              <div className="token-card__value">Segoe UI Semibold 20px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Championship Line Height</div>
              <div className="token-card__value">25px (125%)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Team Name Font</div>
              <div className="token-card__value">Montserrat Regular 16px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Date/Time Font</div>
              <div className="token-card__value">Montserrat Regular 16px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Layout Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Card Size</div>
              <div className="token-card__value">492 x 256px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Container Padding</div>
              <div className="token-card__value">20px (all sides)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Section Gap</div>
              <div className="token-card__value">10px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Team Logo Size</div>
              <div className="token-card__value">40 x 40px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">10px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Hover Border Width</div>
              <div className="token-card__value">4px (inside)</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Animation Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Hover Transition</div>
              <div className="token-card__value">300ms ease-out</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Animation Type</div>
              <div className="token-card__value">Smart Animate</div>
            </div>
          </div>
        </div>
      </>
    );

  // properties
  return (
    <>
      <div className="showcase__section">
        <h2>Live Preview</h2>
        <div className="demo-area">
          <CardJogo
            championship={demoChampionship}
            tagJogo={demoTag}
            teamA={{ name: "Corinthians", logoSrc: corinthiansLogo }}
            teamB={{ name: "Ponte Preta", logoSrc: pontePretaLogo }}
            dateTime="20/03 - 21:30"
            broadcasts={[
              { channel: "GE TV", canal: "1" },
              { channel: "SporTV", canal: "1" },
              { channel: "Premiere", canal: "1" },
            ]}
          />
        </div>
        <div className="demo-controls">
          <label>
            championship:
            <input
              type="text"
              value={demoChampionship}
              onChange={(e) => setDemoChampionship(e.target.value)}
            />
          </label>
          <label>
            tagJogo:
            <select
              value={demoTag}
              onChange={(e) =>
                setDemoTag(e.target.value as TagJogoName)
              }
            >
              <option value="Clássico">Clássico</option>
              <option value="Final">Final</option>
              <option value="None">None</option>
            </select>
          </label>
        </div>
      </div>

      <div className="showcase__section">
        <h2>Props Documentation</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>championship</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Championship name displayed at the top (required)</td>
            </tr>
            <tr>
              <td><code>tagJogo</code></td>
              <td><code>TagJogoName</code></td>
              <td><code>"None"</code></td>
              <td>Match tag type: "Clássico", "Final", or "None"</td>
            </tr>
            <tr>
              <td><code>tagJogoText</code></td>
              <td><code>string</code></td>
              <td>auto</td>
              <td>Custom text for the TagJogo pill</td>
            </tr>
            <tr>
              <td><code>teamA</code></td>
              <td><code>TeamInfo</code></td>
              <td>—</td>
              <td>Home team: {"{ name: string; logoSrc: string }"} (required)</td>
            </tr>
            <tr>
              <td><code>teamB</code></td>
              <td><code>TeamInfo</code></td>
              <td>—</td>
              <td>Away team: {"{ name: string; logoSrc: string }"} (required)</td>
            </tr>
            <tr>
              <td><code>dateTime</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Date and time string, e.g. "20/03 - 21:30" (required)</td>
            </tr>
            <tr>
              <td><code>broadcasts</code></td>
              <td><code>Broadcast[]</code></td>
              <td><code>[]</code></td>
              <td>List of broadcast channels {"{ channel: ChannelName; canal?: CanalNumber }"}</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Callback when the card is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { CardJogo } from "./components/CardJogo";

<CardJogo
  championship="Paulistão"
  tagJogo="Clássico"
  teamA={{ name: "Corinthians", logoSrc: corinthiansLogo }}
  teamB={{ name: "Ponte Preta", logoSrc: pontePretaLogo }}
  dateTime="20/03 - 21:30"
  broadcasts={[
    { channel: "GE TV", canal: "1" },
    { channel: "SporTV", canal: "1" },
    { channel: "Premiere", canal: "1" },
  ]}
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>Without tag and minimal broadcasts</h3>
        <div className="code-block">
          {`<CardJogo
  championship="Champions League"
  teamA={{ name: "Barcelona", logoSrc: barcelonaLogo }}
  teamB={{ name: "Bayern", logoSrc: bayernLogo }}
  dateTime="08/04 - 16:00"
  broadcasts={[{ channel: "SBT", canal: "1" }]}
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>With click handler</h3>
        <div className="code-block">
          {`<CardJogo
  championship="Brasileirão"
  tagJogo="Final"
  teamA={{ name: "Flamengo", logoSrc: flamengoLogo }}
  teamB={{ name: "Palmeiras", logoSrc: palmeirasLogo }}
  dateTime="15/12 - 16:00"
  onClick={() => navigate("/match/123")}
/>`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MENU BUTTON SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

const ALL_MENU_NAMES: MenuButtonName[] = [
  "Futebol",
  "Basquete",
  "Hóquei",
  "Futebol Americano",
  "Automobilismo",
  "Beisebol",
  "Home",
  "Onde Assistir",
  "Calendário",
  "Sidebar",
];

const SPORT_MENU_NAMES: MenuButtonName[] = [
  "Futebol",
  "Basquete",
  "Hóquei",
  "Futebol Americano",
  "Automobilismo",
  "Beisebol",
];

const NAV_MENU_NAMES: MenuButtonName[] = [
  "Home",
  "Onde Assistir",
  "Calendário",
];

function MenuButtonShowcase({ subTab }: { subTab: SubTab }) {
  const [activeName, setActiveName] = useState<MenuButtonName | null>(null);
  const [demoName, setDemoName] = useState<MenuButtonName>("Futebol");
  const [demoActive, setDemoActive] = useState(false);

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Sport Variants</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Uppercase labels, Inter 400 14px. Click to toggle active state.
          </p>
          <div
            className="demo-area"
            style={{ flexDirection: "column", alignItems: "flex-start", gap: 16 }}
          >
            {SPORT_MENU_NAMES.map((name) => (
              <MenuButton
                key={name}
                name={name}
                active={activeName === name}
                onClick={() =>
                  setActiveName(activeName === name ? null : name)
                }
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Navigation Variants</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Mixed-case labels, Inter 400-500 16px. Home uses medium weight (500).
          </p>
          <div
            className="demo-area"
            style={{ flexDirection: "column", alignItems: "flex-start", gap: 16 }}
          >
            {NAV_MENU_NAMES.map((name) => (
              <MenuButton
                key={name}
                name={name}
                active={activeName === name}
                onClick={() =>
                  setActiveName(activeName === name ? null : name)
                }
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Sidebar Variant</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Icon-only variant at 20x20. No text label.
          </p>
          <div className="demo-area">
            <MenuButton
              name="Sidebar"
              active={activeName === "Sidebar"}
              onClick={() =>
                setActiveName(activeName === "Sidebar" ? null : "Sidebar")
              }
            />
          </div>
        </div>

        <div className="showcase__section">
          <h2>States</h2>
          <div className="styles-row" style={{ gap: 32 }}>
            <div className="styles-item">
              <MenuButton name="Futebol" />
              <span className="styles-item__label">Default</span>
            </div>
            <div className="styles-item">
              <MenuButton name="Futebol" active />
              <span className="styles-item__label">Active</span>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={menuButtonSetRef}
            alt="Figma Menu Button component set"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Color Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#A4A4A4" }}
              />
              <div className="token-card__label">Default Color</div>
              <div className="token-card__value">#A4A4A4</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#EA580C" }}
              />
              <div className="token-card__label">Hover / Active</div>
              <div className="token-card__value">#EA580C</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens — Sports</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Font Family</div>
              <div className="token-card__value">Inter</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Weight</div>
              <div className="token-card__value">400 (Regular)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Size</div>
              <div className="token-card__value">14px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Line Height</div>
              <div className="token-card__value">17px (auto)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Text Transform</div>
              <div className="token-card__value">UPPERCASE</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens — Navigation</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Font Family</div>
              <div className="token-card__value">Inter</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Weight</div>
              <div className="token-card__value">400 (Home: 500)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Size</div>
              <div className="token-card__value">16px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Line Height</div>
              <div className="token-card__value">19px (auto)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Text Transform</div>
              <div className="token-card__value">none (mixed case)</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Layout Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Layout</div>
              <div className="token-card__value">Horizontal flex</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Gap</div>
              <div className="token-card__value">8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Align</div>
              <div className="token-card__value">center</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Icon Size</div>
              <div className="token-card__value">24x24 (Sidebar: 20x20)</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Animation Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Hover Transition</div>
              <div className="token-card__value">300ms ease-out</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Animation Type</div>
              <div className="token-card__value">Smart Animate</div>
            </div>
          </div>
        </div>
      </>
    );

  // properties
  return (
    <>
      <div className="showcase__section">
        <h2>Live Preview</h2>
        <div className="demo-area">
          <MenuButton
            name={demoName}
            active={demoActive}
            onClick={() => setDemoActive(!demoActive)}
          />
        </div>
        <div className="demo-controls">
          <label>
            name:
            <select
              value={demoName}
              onChange={(e) => {
                setDemoName(e.target.value as MenuButtonName);
                setDemoActive(false);
              }}
            >
              {ALL_MENU_NAMES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label>
            <input
              type="checkbox"
              checked={demoActive}
              onChange={(e) => setDemoActive(e.target.checked)}
            />
            active
          </label>
        </div>
      </div>

      <div className="showcase__section">
        <h2>Props Documentation</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>name</code></td>
              <td><code>MenuButtonName</code></td>
              <td>—</td>
              <td>Button variant (required). One of: Futebol, Basquete, Hóquei, Futebol Americano, Automobilismo, Beisebol, Home, Onde Assistir, Calendário, Sidebar</td>
            </tr>
            <tr>
              <td><code>active</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Whether the button is in the active/clicked state (orange color)</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Callback fired when the button is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic sport button</h3>
        <div className="code-block">
          {`import { MenuButton } from "./components/MenuButton";

<MenuButton name="Futebol" />`}
        </div>
        <h3 style={{ marginTop: 24 }}>Navigation with active state</h3>
        <div className="code-block">
          {`const [active, setActive] = useState<MenuButtonName>("Home");

<MenuButton
  name="Home"
  active={active === "Home"}
  onClick={() => setActive("Home")}
/>
<MenuButton
  name="Onde Assistir"
  active={active === "Onde Assistir"}
  onClick={() => setActive("Onde Assistir")}
/>
<MenuButton
  name="Calendário"
  active={active === "Calendário"}
  onClick={() => setActive("Calendário")}
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>Sidebar icon-only</h3>
        <div className="code-block">
          {`<MenuButton name="Sidebar" onClick={toggleSidebar} />`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FILTER CALENDAR SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

const ALL_FILTER_NAMES: FilterCalendarName[] = [
  "Todos",
  "Futebol",
  "Basquete",
  "Futebol Americano",
  "Automobilismo",
  "Beisebol",
  "Hóquei",
];

const FILTER_ACTIVE_COLORS: Record<FilterCalendarName, string> = {
  Todos: "#EA580C",
  Futebol: "#40BD01",
  Basquete: "#FF0800",
  "Futebol Americano": "#E11577",
  Automobilismo: "#9B18BC",
  Beisebol: "#2822DA",
  Hóquei: "#0077FF",
};

function FilterCalendarShowcase({ subTab }: { subTab: SubTab }) {
  const [activeFilter, setActiveFilter] = useState<FilterCalendarName>("Todos");
  const [demoName, setDemoName] = useState<FilterCalendarName>("Futebol");
  const [demoActive, setDemoActive] = useState(false);

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Active States — Each Sport Color</h2>
          <div className="styles-row" style={{ gap: 8, flexWrap: "wrap" }}>
            {ALL_FILTER_NAMES.map((name) => (
              <FilterCalendar key={name} name={name} active />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Default State</h2>
          <div className="styles-row" style={{ gap: 8, flexWrap: "wrap" }}>
            {ALL_FILTER_NAMES.map((name) => (
              <FilterCalendar key={name} name={name} />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Interactive Demo</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Click a filter to select it. Hover to see the intermediate state.
          </p>
          <div className="demo-area" style={{ gap: 8, flexWrap: "wrap" }}>
            {ALL_FILTER_NAMES.map((name) => (
              <FilterCalendar
                key={name}
                name={name}
                active={activeFilter === name}
                onClick={() => setActiveFilter(name)}
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={filterCalendarSetRef}
            alt="Figma Filter Calendar component set"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Active Color Tokens (per sport)</h2>
          <div className="token-grid">
            {ALL_FILTER_NAMES.map((name) => (
              <div key={name} className="token-card">
                <div
                  className="token-card__preview"
                  style={{ backgroundColor: FILTER_ACTIVE_COLORS[name] }}
                />
                <div className="token-card__label">{name}</div>
                <div className="token-card__value">
                  {FILTER_ACTIVE_COLORS[name]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>State Color Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#303030" }}
              />
              <div className="token-card__label">Default Background</div>
              <div className="token-card__value">#303030</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#4F4E4E" }}
              />
              <div className="token-card__label">Hover Background</div>
              <div className="token-card__value">#4F4E4E</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#B9B9B9" }}
              />
              <div className="token-card__label">Default Text</div>
              <div className="token-card__value">#B9B9B9</div>
            </div>
            <div className="token-card">
              <div
                className="token-card__preview"
                style={{ backgroundColor: "#FFFFFF" }}
              />
              <div className="token-card__label">Hover / Active Text</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Font Family</div>
              <div className="token-card__value">Inter</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Weight</div>
              <div className="token-card__value">500 (Medium)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Size</div>
              <div className="token-card__value">14px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Line Height</div>
              <div className="token-card__value">20px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Border Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Padding</div>
              <div className="token-card__value">4px 16px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Height</div>
              <div className="token-card__value">28px (HUG)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Gap (inner)</div>
              <div className="token-card__value">8px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Animation Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Hover Transition</div>
              <div className="token-card__value">300ms ease-out</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Animation Type</div>
              <div className="token-card__value">Dissolve</div>
            </div>
          </div>
        </div>
      </>
    );

  // properties
  return (
    <>
      <div className="showcase__section">
        <h2>Live Preview</h2>
        <div className="demo-area">
          <FilterCalendar
            name={demoName}
            active={demoActive}
            onClick={() => setDemoActive(!demoActive)}
          />
        </div>
        <div className="demo-controls">
          <label>
            name:
            <select
              value={demoName}
              onChange={(e) => {
                setDemoName(e.target.value as FilterCalendarName);
                setDemoActive(false);
              }}
            >
              {ALL_FILTER_NAMES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label>
            <input
              type="checkbox"
              checked={demoActive}
              onChange={(e) => setDemoActive(e.target.checked)}
            />
            active
          </label>
        </div>
      </div>

      <div className="showcase__section">
        <h2>Props Documentation</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>name</code></td>
              <td><code>FilterCalendarName</code></td>
              <td>—</td>
              <td>Sport filter name (required). One of: Todos, Futebol, Basquete, Futebol Americano, Automobilismo, Beisebol, Hóquei</td>
            </tr>
            <tr>
              <td><code>active</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Whether the filter is in the active/clicked state (sport-colored background)</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Callback fired when the filter is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { FilterCalendar } from "./components/FilterCalendar";

<FilterCalendar name="Futebol" />`}
        </div>
        <h3 style={{ marginTop: 24 }}>Filter group with single selection</h3>
        <div className="code-block">
          {`const [active, setActive] = useState<FilterCalendarName>("Todos");

const sports: FilterCalendarName[] = [
  "Todos", "Futebol", "Basquete",
  "Futebol Americano", "Automobilismo",
  "Beisebol", "Hóquei"
];

{sports.map((name) => (
  <FilterCalendar
    key={name}
    name={name}
    active={active === name}
    onClick={() => setActive(name)}
  />
))}`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH BAR SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

function SearchBarShowcase({ subTab }: { subTab: SubTab }) {
  const [demoValue, setDemoValue] = useState("");

  if (subTab === "styles") {
    return (
      <>
        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={searchBarSetRef}
            alt="Search Bar – Figma reference"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>

        <div className="showcase__section">
          <h2>States</h2>

          <h3>Default</h3>
          <p className="showcase__hint">Icon and placeholder in #A4A4A4</p>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8 }}>
            <SearchBar />
          </div>

          <h3 style={{ marginTop: 24 }}>Hover</h3>
          <p className="showcase__hint">Hover to see icon &amp; placeholder turn white</p>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8 }}>
            <SearchBar />
          </div>

          <h3 style={{ marginTop: 24 }}>Typing (Focused)</h3>
          <p className="showcase__hint">Click to focus — icon stays white, user text is white</p>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8 }}>
            <SearchBar value={demoValue} onChange={setDemoValue} placeholder="Buscar times, jogos..." />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Custom Placeholder</h2>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8, gap: 16 }}>
            <SearchBar placeholder="Pesquisar..." />
            <SearchBar placeholder="Buscar canal" />
          </div>
        </div>
      </>
    );
  }

  if (subTab === "tokens") {
    return (
      <>
        <div className="showcase__section">
          <h2>Layout</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Display</td><td>inline-flex</td></tr>
              <tr><td>Width</td><td>190px</td></tr>
              <tr><td>Height</td><td>40px (content-driven)</td></tr>
              <tr><td>Padding</td><td>10px 8px</td></tr>
              <tr><td>Gap</td><td>8px</td></tr>
              <tr><td>Border Radius</td><td>6px</td></tr>
              <tr><td>Box Sizing</td><td>border-box</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Colors</h2>
          <table className="token-table">
            <thead>
              <tr><th>Element</th><th>Default</th><th>Hover / Focus</th></tr>
            </thead>
            <tbody>
              <tr><td>Background</td><td>#2E3034</td><td>#2E3034</td></tr>
              <tr><td>Icon</td><td>#A4A4A4</td><td>#FFFFFF</td></tr>
              <tr><td>Placeholder</td><td>#A4A4A4</td><td>#FFFFFF</td></tr>
              <tr><td>Input text</td><td>#FFFFFF</td><td>#FFFFFF</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Typography</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Font Family</td><td>Segoe UI, sans-serif</td></tr>
              <tr><td>Font Weight</td><td>400 (Regular)</td></tr>
              <tr><td>Font Size</td><td>16px</td></tr>
              <tr><td>Line Height</td><td>21px</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Icon</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Size</td><td>16 × 16</td></tr>
              <tr><td>Type</td><td>Magnifying glass (inline SVG)</td></tr>
              <tr><td>Color control</td><td>fill="currentColor"</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Animation</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Transition property</td><td>color</td></tr>
              <tr><td>Duration</td><td>300ms</td></tr>
              <tr><td>Easing</td><td>ease-out</td></tr>
              <tr><td>Trigger</td><td>:hover, :focus-within</td></tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  // Properties tab
  return (
    <>
      <div className="showcase__section">
        <h2>Props</h2>
        <table className="token-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>placeholder</td><td>string</td><td>"Buscar times, jogos..."</td><td>Placeholder text when input is empty</td></tr>
            <tr><td>value</td><td>string</td><td>undefined</td><td>Controlled input value</td></tr>
            <tr><td>onChange</td><td>(value: string) =&gt; void</td><td>—</td><td>Callback when input value changes</td></tr>
            <tr><td>onFocus</td><td>() =&gt; void</td><td>—</td><td>Callback when input gains focus</td></tr>
            <tr><td>onBlur</td><td>() =&gt; void</td><td>—</td><td>Callback when input loses focus</td></tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>CSS Classes</h2>
        <table className="token-table">
          <thead>
            <tr><th>Class</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>.searchBar</td><td>Container — flex layout with background</td></tr>
            <tr><td>.searchBar__icon</td><td>SVG magnifying glass icon</td></tr>
            <tr><td>.searchBar__input</td><td>Text input element</td></tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { SearchBar } from "./components/SearchBar";

<SearchBar />`}
        </div>
        <h3 style={{ marginTop: 24 }}>Controlled input</h3>
        <div className="code-block">
          {`const [query, setQuery] = useState("");

<SearchBar
  value={query}
  onChange={setQuery}
  placeholder="Pesquisar..."
  onFocus={() => console.log("focused")}
  onBlur={() => console.log("blurred")}
/>`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CARD EVENT SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

function CardEventShowcase({ subTab }: { subTab: SubTab }) {
  const sports: CardEventSport[] = ["Futebol", "Basquete", "Hóquei"];

  const sampleData: Record<CardEventSport, { title: string; home: string; away: string }> = {
    Futebol: { title: "Corinthians X Ponte Preta", home: corinthiansLogo, away: pontePretaLogo },
    Basquete: { title: "Houston Rockets X Denver Nuggets", home: corinthiansLogo, away: pontePretaLogo },
    Hóquei: { title: "Seattle Kraken X Buffalo Sabres", home: corinthiansLogo, away: pontePretaLogo },
  };

  if (subTab === "styles") {
    return (
      <>
        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={cardEventSetRef}
            alt="Card Event – Figma reference"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>

        <div className="showcase__section">
          <h2>All Sports — Default</h2>
          <p className="showcase__hint">Each sport has a unique color bar and background</p>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8, gap: 16 }}>
            {sports.map((sport) => (
              <CardEvent
                key={sport}
                sport={sport}
                title={sampleData[sport].title}
                homeLogo={sampleData[sport].home}
                awayLogo={sampleData[sport].away}
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Hover State</h2>
          <p className="showcase__hint">Hover over each card — background brightens to a more saturated sport color</p>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8, gap: 16 }}>
            {sports.map((sport) => (
              <CardEvent
                key={sport}
                sport={sport}
                title={sampleData[sport].title}
                homeLogo={sampleData[sport].home}
                awayLogo={sampleData[sport].away}
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Sport Color Bars</h2>
          <table className="token-table">
            <thead>
              <tr><th>Sport</th><th>Bar Color</th><th>Default BG</th><th>Hover BG</th></tr>
            </thead>
            <tbody>
              <tr><td>Futebol</td><td><span style={{ color: "#40BD01" }}>#40BD01</span> (green)</td><td>#243223</td><td>#306F13</td></tr>
              <tr><td>Basquete</td><td><span style={{ color: "#FF0800" }}>#FF0800</span> (red)</td><td>#372023</td><td>#591B1D</td></tr>
              <tr><td>Hóquei</td><td><span style={{ color: "#0077FF" }}>#0077FF</span> (blue)</td><td>#1E2B3C</td><td>#104C93</td></tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  if (subTab === "tokens") {
    return (
      <>
        <div className="showcase__section">
          <h2>Layout</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Width</td><td>145px</td></tr>
              <tr><td>Height</td><td>73px</td></tr>
              <tr><td>Border Radius</td><td>4px</td></tr>
              <tr><td>Layout Direction</td><td>Horizontal (row)</td></tr>
              <tr><td>Overflow</td><td>hidden</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Bar</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Width</td><td>3px</td></tr>
              <tr><td>Height</td><td>stretch (fill)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Body</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Direction</td><td>Vertical (column)</td></tr>
              <tr><td>Padding</td><td>4px 6px</td></tr>
              <tr><td>Gap</td><td>6px</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Typography — Title</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Font Family</td><td>Segoe UI, sans-serif</td></tr>
              <tr><td>Font Weight</td><td>600 (Semibold)</td></tr>
              <tr><td>Font Size</td><td>12px</td></tr>
              <tr><td>Line Height</td><td>13px</td></tr>
              <tr><td>Color</td><td>#FFFFFF</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Typography — Separator ("X")</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Font Family</td><td>Inter, sans-serif</td></tr>
              <tr><td>Font Weight</td><td>500 (Medium)</td></tr>
              <tr><td>Font Size</td><td>12px</td></tr>
              <tr><td>Line Height</td><td>16px</td></tr>
              <tr><td>Color</td><td>#FFFFFF</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Teams Row</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Direction</td><td>Horizontal</td></tr>
              <tr><td>Gap</td><td>4px</td></tr>
              <tr><td>Align</td><td>center</td></tr>
              <tr><td>Logo Size</td><td>26 × 26px</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Animation</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Transition property</td><td>background-color</td></tr>
              <tr><td>Duration</td><td>300ms</td></tr>
              <tr><td>Easing</td><td>ease-out</td></tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  // Properties tab
  return (
    <>
      <div className="showcase__section">
        <h2>Props</h2>
        <table className="token-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>sport</td><td>CardEventSport</td><td>—</td><td>Sport type (determines colors)</td></tr>
            <tr><td>title</td><td>string</td><td>—</td><td>Match title, e.g. "Team A X Team B"</td></tr>
            <tr><td>homeLogo</td><td>string</td><td>—</td><td>Home team logo URL</td></tr>
            <tr><td>awayLogo</td><td>string</td><td>—</td><td>Away team logo URL</td></tr>
            <tr><td>onClick</td><td>() =&gt; void</td><td>—</td><td>Click handler</td></tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Types</h2>
        <div className="code-block">
          {`type CardEventSport = "Futebol" | "Basquete" | "Hóquei";`}
        </div>
      </div>

      <div className="showcase__section">
        <h2>CSS Classes</h2>
        <table className="token-table">
          <thead>
            <tr><th>Class</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>.cardEvent</td><td>Outer button container</td></tr>
            <tr><td>.cardEvent__bar</td><td>Colored left bar</td></tr>
            <tr><td>.cardEvent__body</td><td>Vertical content area</td></tr>
            <tr><td>.cardEvent__title</td><td>Match title text</td></tr>
            <tr><td>.cardEvent__teams</td><td>Horizontal logos + separator row</td></tr>
            <tr><td>.cardEvent__logo</td><td>Team logo image (26px)</td></tr>
            <tr><td>.cardEvent__separator</td><td>"X" text between logos</td></tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { CardEvent } from "./components/CardEvent";

<CardEvent
  sport="Futebol"
  title="Corinthians X Ponte Preta"
  homeLogo="/logos/corinthians.png"
  awayLogo="/logos/ponte-preta.png"
  onClick={() => console.log("clicked")}
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>All sports</h3>
        <div className="code-block">
          {`const events = [
  { sport: "Futebol", title: "Corinthians X Ponte Preta", ... },
  { sport: "Basquete", title: "Rockets X Nuggets", ... },
  { sport: "Hóquei", title: "Kraken X Sabres", ... },
];

{events.map((ev) => (
  <CardEvent
    key={ev.title}
    sport={ev.sport}
    title={ev.title}
    homeLogo={ev.homeLogo}
    awayLogo={ev.awayLogo}
  />
))}`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CARD DESTAQUE SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

function CardDestaqueShowcase({ subTab }: { subTab: SubTab }) {
  const sampleChannels = (
    <>
      <TagCanalComponent channel="SporTV" canal="1" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.7 }}>
        <path d="M11.3332 1.3335L7.99984 4.66683L4.6665 1.3335" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3335 4.6665H2.66683C1.93045 4.6665 1.3335 5.26346 1.3335 5.99984V13.3332C1.3335 14.0696 1.93045 14.6665 2.66683 14.6665H13.3335C14.0699 14.6665 14.6668 14.0696 14.6668 13.3332V5.99984C14.6668 5.26346 14.0699 4.6665 13.3335 4.6665Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <TagCanalComponent channel="GE TV" canal="1" />
    </>
  );

  if (subTab === "styles") {
    return (
      <>
        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={cardDestaqueSetRef}
            alt="Card Destaque – Figma reference"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>

        <div className="showcase__section">
          <h2>Tipo: Jogo — Ao Vivo</h2>
          <p className="showcase__hint">Live match with "AO VIVO" badge. Hover adds orange border + rounded corners.</p>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8, gap: 16 }}>
            <CardDestaque
              tipo="Jogo"
              aoVivo
              homeLogo={corinthiansLogo}
              awayLogo={pontePretaLogo}
              channels={sampleChannels}
            />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Tipo: Jogo — With Date</h2>
          <p className="showcase__hint">Upcoming match with date/time pill. Hover adds orange border + rounded corners.</p>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8, gap: 16 }}>
            <CardDestaque
              tipo="Jogo"
              gameDate="27/01 19:00"
              homeLogo={corinthiansLogo}
              awayLogo={pontePretaLogo}
              channels={sampleChannels}
            />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Tipo: Time</h2>
          <p className="showcase__hint">Team card with logo and name. Always rounded, hover adds border.</p>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8, gap: 16 }}>
            <CardDestaque
              tipo="Time"
              logo={corinthiansLogo}
              name="Corinthians"
            />
            <CardDestaque
              tipo="Time"
              logo={pontePretaLogo}
              name="Ponte Preta"
            />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Tipo: Competição</h2>
          <p className="showcase__hint">Competition card with logo and name. Same layout as Time.</p>
          <div className="showcase__row" style={{ background: "#1a1a1a", padding: 24, borderRadius: 8, gap: 16 }}>
            <CardDestaque
              tipo="Competição"
              logo={corinthiansLogo}
              name="Copa do Brasil"
            />
            <CardDestaque
              tipo="Competição"
              logo={pontePretaLogo}
              name="Campeonato Paulista"
            />
          </div>
        </div>
      </>
    );
  }

  if (subTab === "tokens") {
    return (
      <>
        <div className="showcase__section">
          <h2>Layout — Tipo: Jogo</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Width</td><td>272px</td></tr>
              <tr><td>Height</td><td>116px</td></tr>
              <tr><td>Direction</td><td>column</td></tr>
              <tr><td>Padding</td><td>0 4px</td></tr>
              <tr><td>Gap</td><td>8px</td></tr>
              <tr><td>Border Radius (default)</td><td>0</td></tr>
              <tr><td>Border Radius (hover)</td><td>24px</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Layout — Tipo: Time / Competição</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Width</td><td>250px</td></tr>
              <tr><td>Height</td><td>70px</td></tr>
              <tr><td>Direction</td><td>column</td></tr>
              <tr><td>Gap</td><td>8px</td></tr>
              <tr><td>Border Radius</td><td>24px (always)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Colors</h2>
          <table className="token-table">
            <thead>
              <tr><th>Element</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Card Background</td><td>#1B1C21</td></tr>
              <tr><td>Hover Border</td><td>2px solid #EA580C</td></tr>
              <tr><td>Score Pill BG</td><td>rgba(234, 88, 12, 0.1)</td></tr>
              <tr><td>Score Pill Text</td><td>#EA580C</td></tr>
              <tr><td>AO VIVO Badge BG</td><td>#C5023C</td></tr>
              <tr><td>AO VIVO Badge Text</td><td>#FAFAFA</td></tr>
              <tr><td>Name Text</td><td>#FFFFFF</td></tr>
              <tr><td>Channels Border Top</td><td>rgba(255,255,255, 0.1)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Typography</h2>
          <table className="token-table">
            <thead>
              <tr><th>Element</th><th>Font</th><th>Weight</th><th>Size</th><th>Line Height</th></tr>
            </thead>
            <tbody>
              <tr><td>Game Date</td><td>Inter</td><td>600</td><td>18px</td><td>22px</td></tr>
              <tr><td>AO VIVO</td><td>Roboto</td><td>700</td><td>12px</td><td>16px</td></tr>
              <tr><td>Team/Competition Name</td><td>Lexend</td><td>600</td><td>16px</td><td>20px</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Logos</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Size</td><td>56 × 56px</td></tr>
              <tr><td>Border Radius</td><td>50% (circle)</td></tr>
              <tr><td>Background</td><td>#FFFFFF</td></tr>
              <tr><td>Object Fit</td><td>contain</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Animation</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Transition</td><td>border-color, border-radius</td></tr>
              <tr><td>Duration</td><td>300ms</td></tr>
              <tr><td>Easing</td><td>ease-out</td></tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  // Properties tab
  return (
    <>
      <div className="showcase__section">
        <h2>Props</h2>
        <table className="token-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>tipo</td><td>CardDestaqueTipo</td><td>—</td><td>Card type: "Jogo", "Time", or "Competição"</td></tr>
            <tr><td>aoVivo</td><td>boolean</td><td>false</td><td>Show "AO VIVO" badge (Jogo only)</td></tr>
            <tr><td>gameDate</td><td>string</td><td>"27/01 19:00"</td><td>Date/time string (Jogo, when not live)</td></tr>
            <tr><td>homeLogo</td><td>string</td><td>—</td><td>Home team logo URL (Jogo)</td></tr>
            <tr><td>awayLogo</td><td>string</td><td>—</td><td>Away team logo URL (Jogo)</td></tr>
            <tr><td>channels</td><td>ReactNode</td><td>—</td><td>Channel tags for bottom row (Jogo)</td></tr>
            <tr><td>logo</td><td>string</td><td>—</td><td>Logo URL (Time/Competição)</td></tr>
            <tr><td>name</td><td>string</td><td>—</td><td>Name text (Time/Competição)</td></tr>
            <tr><td>onClick</td><td>() =&gt; void</td><td>—</td><td>Click handler</td></tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Types</h2>
        <div className="code-block">
          {`type CardDestaqueTipo = "Jogo" | "Time" | "Competição";`}
        </div>
      </div>

      <div className="showcase__section">
        <h2>CSS Classes</h2>
        <table className="token-table">
          <thead>
            <tr><th>Class</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>.cardDestaque</td><td>Outer button container</td></tr>
            <tr><td>.cardDestaque--jogo</td><td>Match variant (wider, no default radius)</td></tr>
            <tr><td>.cardDestaque--time</td><td>Team variant (compact, always rounded)</td></tr>
            <tr><td>.cardDestaque--competicao</td><td>Competition variant</td></tr>
            <tr><td>.cardDestaque__club</td><td>Horizontal logos + center element row</td></tr>
            <tr><td>.cardDestaque__logo</td><td>Team/competition logo (56px circle)</td></tr>
            <tr><td>.cardDestaque__score</td><td>Date/time pill container</td></tr>
            <tr><td>.cardDestaque__date</td><td>Date/time text</td></tr>
            <tr><td>.cardDestaque__live</td><td>AO VIVO badge</td></tr>
            <tr><td>.cardDestaque__name</td><td>Team/competition name text</td></tr>
            <tr><td>.cardDestaque__channels</td><td>Bottom channel row with top border</td></tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Match card (Jogo) — Live</h3>
        <div className="code-block">
          {`import { CardDestaque } from "./components/CardDestaque";
import { TagCanal } from "./components/TagCanal";

<CardDestaque
  tipo="Jogo"
  aoVivo
  homeLogo="/logos/corinthians.png"
  awayLogo="/logos/ponte-preta.png"
  channels={
    <>
      <TagCanal name="SporTV" canal="1" />
      <TagCanal name="GE TV" canal="1" />
    </>
  }
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>Match card (Jogo) — With date</h3>
        <div className="code-block">
          {`<CardDestaque
  tipo="Jogo"
  gameDate="27/01 19:00"
  homeLogo="/logos/corinthians.png"
  awayLogo="/logos/ponte-preta.png"
  channels={<TagCanal name="SporTV" canal="1" />}
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>Team card (Time)</h3>
        <div className="code-block">
          {`<CardDestaque
  tipo="Time"
  logo="/logos/corinthians.png"
  name="Corinthians"
  onClick={() => navigate("/team/corinthians")}
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>Competition card (Competição)</h3>
        <div className="code-block">
          {`<CardDestaque
  tipo="Competição"
  logo="/logos/copa-do-brasil.png"
  name="Copa do Brasil"
/>`}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   POPUP CARD SHOWCASE
   ═══════════════════════════════════════════════════════════════════════════ */

function PopUpCardShowcase({ subTab }: { subTab: SubTab }) {
  const sampleChannels = (
    <>
      <TagCanalComponent channel="GE TV" canal="1" />
      <TagCanalComponent channel="SporTV" canal="1" />
      <TagCanalComponent channel="Premiere" canal="1" />
      <TagCanalComponent channel="Premiere" canal="2" />
      <TagCanalComponent channel="Premiere" canal="3" />
    </>
  );

  if (subTab === "styles") {
    return (
      <>
        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={popUpCardSetRef}
            alt="PopUp Card – Figma reference"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>

        <div className="showcase__section">
          <h2>Ao Vivo = False (With Date)</h2>
          <p className="showcase__hint">Default state showing game date/time in center</p>
          <div className="showcase__row" style={{ background: "#111", padding: 24, borderRadius: 8, justifyContent: "center" }}>
            <PopUpCard
              championship="Paulistão"
              homeLogo={corinthiansLogo}
              homeName="Corinthians"
              awayLogo={pontePretaLogo}
              awayName="Ponte Preta"
              gameDate="27/01 19:00"
              tagJogo={<TagJogo name="Clássico" text="⚔️ Clássico!" />}
              channels={sampleChannels}
            />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Ao Vivo = True</h2>
          <p className="showcase__hint">Live match with "AO VIVO" badge replacing the date</p>
          <div className="showcase__row" style={{ background: "#111", padding: 24, borderRadius: 8, justifyContent: "center" }}>
            <PopUpCard
              championship="Brasileirão"
              homeLogo={corinthiansLogo}
              homeName="Corinthians"
              awayLogo={pontePretaLogo}
              awayName="Ponte Preta"
              aoVivo
              tagJogo={<TagJogo name="Clássico" text="⚔️ Clássico!" />}
              channels={sampleChannels}
            />
          </div>
        </div>
      </>
    );
  }

  if (subTab === "tokens") {
    return (
      <>
        <div className="showcase__section">
          <h2>Card Layout</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Width</td><td>600px</td></tr>
              <tr><td>Height</td><td>441px</td></tr>
              <tr><td>Border Radius</td><td>24px</td></tr>
              <tr><td>Background</td><td>#1B1C21</td></tr>
              <tr><td>Overflow</td><td>hidden</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Looper BG (Decorative Mesh)</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Position</td><td>absolute, left: -87px</td></tr>
              <tr><td>Size</td><td>662 × 441px</td></tr>
              <tr><td>Opacity</td><td>0.45</td></tr>
              <tr><td>Stroke</td><td>Gradient purple (#6B0CAE) → orange (#EA580C)</td></tr>
              <tr><td>Pattern</td><td>70 polygons with 0→1 opacity progression</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Typography</h2>
          <table className="token-table">
            <thead>
              <tr><th>Element</th><th>Font</th><th>Weight</th><th>Size</th><th>Color</th></tr>
            </thead>
            <tbody>
              <tr><td>Championship</td><td>Montserrat Alternates</td><td>700</td><td>36px</td><td>#EA580C</td></tr>
              <tr><td>Team Name</td><td>Montserrat Alternates</td><td>700</td><td>24px</td><td>#FFFFFF</td></tr>
              <tr><td>Game Date</td><td>Inter</td><td>600</td><td>22px</td><td>#FFFFFF</td></tr>
              <tr><td>AO VIVO</td><td>Roboto</td><td>700</td><td>22px</td><td>#FAFAFA</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Team Logos</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Size</td><td>164 × 164px</td></tr>
              <tr><td>Border Radius</td><td>50% (circle)</td></tr>
              <tr><td>Background</td><td>#FFFFFF</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>AO VIVO Badge</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Background</td><td>#C5023C</td></tr>
              <tr><td>Padding</td><td>5px 15px</td></tr>
              <tr><td>Border Radius</td><td>7px</td></tr>
            </tbody>
          </table>
        </div>

        <div className="showcase__section">
          <h2>Channels Row</h2>
          <table className="token-table">
            <thead>
              <tr><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Direction</td><td>Horizontal</td></tr>
              <tr><td>Gap</td><td>12px</td></tr>
              <tr><td>Padding</td><td>13px 0</td></tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

  // Properties tab
  return (
    <>
      <div className="showcase__section">
        <h2>Props</h2>
        <table className="token-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>championship</td><td>string</td><td>—</td><td>Championship name (e.g. "Paulistão")</td></tr>
            <tr><td>homeLogo</td><td>string</td><td>—</td><td>Home team logo URL</td></tr>
            <tr><td>homeName</td><td>string</td><td>—</td><td>Home team name</td></tr>
            <tr><td>awayLogo</td><td>string</td><td>—</td><td>Away team logo URL</td></tr>
            <tr><td>awayName</td><td>string</td><td>—</td><td>Away team name</td></tr>
            <tr><td>aoVivo</td><td>boolean</td><td>false</td><td>Show AO VIVO badge instead of date</td></tr>
            <tr><td>gameDate</td><td>string</td><td>"27/01 19:00"</td><td>Date/time string</td></tr>
            <tr><td>tagJogo</td><td>ReactNode</td><td>—</td><td>Tag Jogo element (e.g. Clássico)</td></tr>
            <tr><td>channels</td><td>ReactNode</td><td>—</td><td>Channel tags for broadcast row</td></tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>CSS Classes</h2>
        <table className="token-table">
          <thead>
            <tr><th>Class</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>.popUpCard</td><td>Outer container (600 × 441)</td></tr>
            <tr><td>.popUpCard__looper</td><td>Decorative mesh background</td></tr>
            <tr><td>.popUpCard__championship</td><td>Championship title text</td></tr>
            <tr><td>.popUpCard__teams</td><td>Row with both teams + center</td></tr>
            <tr><td>.popUpCard__team</td><td>Individual team column</td></tr>
            <tr><td>.popUpCard__logo</td><td>Team logo (164px circle)</td></tr>
            <tr><td>.popUpCard__teamName</td><td>Team name text</td></tr>
            <tr><td>.popUpCard__center</td><td>Center column (score/live/tag)</td></tr>
            <tr><td>.popUpCard__score</td><td>Date/time text</td></tr>
            <tr><td>.popUpCard__live</td><td>AO VIVO badge</td></tr>
            <tr><td>.popUpCard__tagJogo</td><td>Tag Jogo wrapper</td></tr>
            <tr><td>.popUpCard__channels</td><td>Bottom broadcast row</td></tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { PopUpCard } from "./components/PopUpCard";
import { TagCanal } from "./components/TagCanal";
import { TagJogo } from "./components/TagJogo";

<PopUpCard
  championship="Paulistão"
  homeLogo="/logos/corinthians.png"
  homeName="Corinthians"
  awayLogo="/logos/ponte-preta.png"
  awayName="Ponte Preta"
  gameDate="27/01 19:00"
  tagJogo={<TagJogo name="Clássico" text="⚔️ Clássico!" />}
  channels={
    <>
      <TagCanal channel="SporTV" canal="1" />
      <TagCanal channel="Premiere" canal="1" />
    </>
  }
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>Live match</h3>
        <div className="code-block">
          {`<PopUpCard
  championship="Brasileirão"
  homeLogo="/logos/sao-paulo.png"
  homeName="São Paulo"
  awayLogo="/logos/santos.png"
  awayName="Santos"
  aoVivo
  tagJogo={<TagJogo name="Clássico" text="⚔️ Clássico!" />}
  channels={
    <>
      <TagCanal channel="GE TV" canal="1" />
      <TagCanal channel="SporTV" canal="1" />
    </>
  }
/>`}
        </div>
      </div>
    </>
  );
}
