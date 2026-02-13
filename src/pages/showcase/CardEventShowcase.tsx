import { useState } from "react";
import { CardEvent } from "../../components/CardEvent";
import type { CardEventSport } from "../../components/CardEvent";
import corinthiansLogo from "../../assets/corinthians-logo.png";
import pontePretaLogo from "../../assets/ponte-preta-logo.png";
import cardEventSetRef from "../../assets/reference/cards-events-set.png";
import type { ShowcaseProps } from "./types";

const SPORTS: CardEventSport[] = ["Futebol", "Basquete", "Hóquei"];

const SAMPLE_DATA: Record<CardEventSport, { title: string; home: string; away: string }> = {
  Futebol: { title: "Corinthians X Ponte Preta", home: corinthiansLogo, away: pontePretaLogo },
  Basquete: { title: "Houston Rockets X Denver Nuggets", home: corinthiansLogo, away: pontePretaLogo },
  Hóquei: { title: "Seattle Kraken X Buffalo Sabres", home: corinthiansLogo, away: pontePretaLogo },
};

const SPORT_COLORS: Record<CardEventSport, { bar: string; defaultBg: string; hoverBg: string }> = {
  Futebol: { bar: "#40BD01", defaultBg: "#243223", hoverBg: "#306F13" },
  Basquete: { bar: "#FF0800", defaultBg: "#372023", hoverBg: "#591B1D" },
  Hóquei: { bar: "#0077FF", defaultBg: "#1E2B3C", hoverBg: "#104C93" },
};

export function CardEventShowcase({ subTab }: ShowcaseProps) {
  const [demoSport, setDemoSport] = useState<CardEventSport>("Futebol");

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Variants — All Sports</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Each sport has a unique color bar and background</p>
          <div className="demo-area" style={{ gap: 16 }}>
            {SPORTS.map((sport) => (
              <CardEvent
                key={sport}
                sport={sport}
                title={SAMPLE_DATA[sport].title}
                homeLogo={SAMPLE_DATA[sport].home}
                awayLogo={SAMPLE_DATA[sport].away}
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Interactive Demo</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Hover over each card — background brightens to a more saturated sport color</p>
          <div className="demo-area" style={{ gap: 16 }}>
            {SPORTS.map((sport) => (
              <CardEvent
                key={sport}
                sport={sport}
                title={SAMPLE_DATA[sport].title}
                homeLogo={SAMPLE_DATA[sport].home}
                awayLogo={SAMPLE_DATA[sport].away}
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={cardEventSetRef}
            alt="Card Event – Figma reference"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Color Tokens (per sport)</h2>
          <div className="token-grid">
            {SPORTS.map((sport) => (
              <div key={`${sport}-bar`} className="token-card">
                <div className="token-card__preview" style={{ backgroundColor: SPORT_COLORS[sport].bar }} />
                <div className="token-card__label">{sport} — Bar</div>
                <div className="token-card__value">{SPORT_COLORS[sport].bar}</div>
              </div>
            ))}
            {SPORTS.map((sport) => (
              <div key={`${sport}-bg`} className="token-card">
                <div className="token-card__preview" style={{ backgroundColor: SPORT_COLORS[sport].defaultBg }} />
                <div className="token-card__label">{sport} — Default BG</div>
                <div className="token-card__value">{SPORT_COLORS[sport].defaultBg}</div>
              </div>
            ))}
            {SPORTS.map((sport) => (
              <div key={`${sport}-hover`} className="token-card">
                <div className="token-card__preview" style={{ backgroundColor: SPORT_COLORS[sport].hoverBg }} />
                <div className="token-card__label">{sport} — Hover BG</div>
                <div className="token-card__value">{SPORT_COLORS[sport].hoverBg}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Title Font</div>
              <div className="token-card__value">Segoe UI Semibold 12px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Title Line Height</div>
              <div className="token-card__value">13px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Title Color</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Separator ("X") Font</div>
              <div className="token-card__value">Inter Medium 12px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Separator Line Height</div>
              <div className="token-card__value">16px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Layout Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Card Size</div>
              <div className="token-card__value">145 x 73px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">4px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Bar Width</div>
              <div className="token-card__value">3px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Body Padding</div>
              <div className="token-card__value">4px 6px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Body Gap</div>
              <div className="token-card__value">6px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Teams Row Gap</div>
              <div className="token-card__value">4px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Logo Size</div>
              <div className="token-card__value">26 x 26px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Animation Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Transition Property</div>
              <div className="token-card__value">background-color</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Duration</div>
              <div className="token-card__value">300ms</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Easing</div>
              <div className="token-card__value">ease-out</div>
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
          <CardEvent
            sport={demoSport}
            title={SAMPLE_DATA[demoSport].title}
            homeLogo={SAMPLE_DATA[demoSport].home}
            awayLogo={SAMPLE_DATA[demoSport].away}
          />
        </div>
        <div className="demo-controls">
          <label>
            sport:
            <select
              value={demoSport}
              onChange={(e) => setDemoSport(e.target.value as CardEventSport)}
            >
              {SPORTS.map((s) => (
                <option key={s} value={s}>{s}</option>
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
              <td><code>sport</code></td>
              <td><code>CardEventSport</code></td>
              <td>—</td>
              <td>Sport type — determines colors (required)</td>
            </tr>
            <tr>
              <td><code>title</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Match title, e.g. "Team A X Team B" (required)</td>
            </tr>
            <tr>
              <td><code>homeLogo</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Home team logo URL (required)</td>
            </tr>
            <tr>
              <td><code>awayLogo</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Away team logo URL (required)</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Click handler</td>
            </tr>
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
        <table className="props-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>.cardEvent</code></td>
              <td>Outer button container with hover background change</td>
            </tr>
            <tr>
              <td><code>.cardEvent__bar</code></td>
              <td>Colored 3px left bar</td>
            </tr>
            <tr>
              <td><code>.cardEvent__body</code></td>
              <td>Flex column content area with padding</td>
            </tr>
            <tr>
              <td><code>.cardEvent__title</code></td>
              <td>Bold heading with ellipsis overflow</td>
            </tr>
            <tr>
              <td><code>.cardEvent__teams</code></td>
              <td>Flex row for team logos and separator</td>
            </tr>
            <tr>
              <td><code>.cardEvent__logo</code></td>
              <td>Circular team logo (26px)</td>
            </tr>
            <tr>
              <td><code>.cardEvent__separator</code></td>
              <td>"X" separator between team logos</td>
            </tr>
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
