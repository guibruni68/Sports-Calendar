import { useState } from "react";
import { CardEvent } from "../../components/CardEvent";
import type { CardEventSport } from "../../components/CardEvent";
import corinthiansLogo from "../../assets/corinthians-logo.png";
import pontePretaLogo from "../../assets/ponte-preta-logo.png";
import type { ShowcaseProps } from "./types";

const VERSUS_SPORTS: CardEventSport[] = ["Futebol", "Basquete", "Hóquei"];

const SAMPLE_DATA: Record<CardEventSport, { title: string; home: string; away?: string }> = {
  Futebol:       { title: "Corinthians X Ponte Preta", home: corinthiansLogo, away: pontePretaLogo },
  Basquete:      { title: "Houston Rockets X Denver Nuggets", home: corinthiansLogo, away: pontePretaLogo },
  Hóquei:        { title: "Seattle Kraken X Buffalo Sabres", home: corinthiansLogo, away: pontePretaLogo },
  Automobilismo: { title: "ONE Friday Fights", home: corinthiansLogo },
};

const SPORT_COLORS: Record<CardEventSport, { bar: string; defaultBg: string; hoverBg: string }> = {
  Futebol:       { bar: "#40BD01", defaultBg: "#243223", hoverBg: "#306F13" },
  Basquete:      { bar: "#00A05B", defaultBg: "#17302A", hoverBg: "#0D5E3E" },
  Hóquei:        { bar: "#0077FF", defaultBg: "#1E2B3C", hoverBg: "#104C93" },
  Automobilismo: { bar: "#9B18BC", defaultBg: "#351B40", hoverBg: "#5A1A6E" },
};

export function CardEventShowcase({ subTab }: ShowcaseProps) {
  const [demoSport, setDemoSport] = useState<CardEventSport>("Futebol");
  const [demoTipo, setDemoTipo] = useState<"versus" | "event">("versus");

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Variants — Tipo=Versus</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Each sport has a unique color bar and background. Title wraps to 2 lines max.</p>
          <div className="demo-area" style={{ gap: 16 }}>
            {VERSUS_SPORTS.map((sport) => (
              <CardEvent
                key={sport}
                sport={sport}
                tipo="versus"
                title={SAMPLE_DATA[sport].title}
                homeLogo={SAMPLE_DATA[sport].home}
                awayLogo={SAMPLE_DATA[sport].away}
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Variants — Tipo=Event</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>For single-entity sports (F1, MMA, etc.) — title at top, event logo at bottom-right.</p>
          <div className="demo-area" style={{ gap: 16 }}>
            <CardEvent
              sport="Automobilismo"
              tipo="event"
              title="ONE Friday Fights"
              homeLogo={corinthiansLogo}
            />
          </div>
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Color Tokens (por esporte)</h2>
          <div className="token-grid">
            {(Object.keys(SPORT_COLORS) as CardEventSport[]).map((sport) => (
              <div key={`${sport}-bar`} className="token-card">
                <div className="token-card__preview" style={{ backgroundColor: SPORT_COLORS[sport].bar }} />
                <div className="token-card__label">{sport} — Bar</div>
                <div className="token-card__value">{SPORT_COLORS[sport].bar}</div>
              </div>
            ))}
            {(Object.keys(SPORT_COLORS) as CardEventSport[]).map((sport) => (
              <div key={`${sport}-bg`} className="token-card">
                <div className="token-card__preview" style={{ backgroundColor: SPORT_COLORS[sport].defaultBg }} />
                <div className="token-card__label">{sport} — Default BG</div>
                <div className="token-card__value">{SPORT_COLORS[sport].defaultBg}</div>
              </div>
            ))}
            {(Object.keys(SPORT_COLORS) as CardEventSport[]).map((sport) => (
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
              <div className="token-card__value">Segoe UI 600 · 12px / 13px · 2-line clamp</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Separator ("X") Font</div>
              <div className="token-card__value">Inter 500 · 12px / 16px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Layout Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Card Size</div>
              <div className="token-card__value">145 × 73px</div>
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
              <div className="token-card__label">Body Padding (versus)</div>
              <div className="token-card__value">4px 6px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Body Padding (event)</div>
              <div className="token-card__value">0 6px 8px</div>
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
              <div className="token-card__value">26 × 26px · border-radius 50%</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Event Logo Max Size</div>
              <div className="token-card__value">58 × 14px · object-fit contain</div>
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
            tipo={demoTipo}
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
              onChange={(e) => {
                const s = e.target.value as CardEventSport;
                setDemoSport(s);
                setDemoTipo(s === "Automobilismo" ? "event" : "versus");
              }}
            >
              {(["Futebol", "Basquete", "Hóquei", "Automobilismo"] as CardEventSport[]).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label>
            tipo:
            <select value={demoTipo} onChange={(e) => setDemoTipo(e.target.value as "versus" | "event")}>
              <option value="versus">versus</option>
              <option value="event">event</option>
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
              <td>Sport type — determines bar and background colors (required)</td>
            </tr>
            <tr>
              <td><code>title</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Match title ("Team A X Team B") or event name ("ONE Friday Fights") (required)</td>
            </tr>
            <tr>
              <td><code>tipo</code></td>
              <td><code>"versus" | "event"</code></td>
              <td><code>"versus"</code></td>
              <td>"versus" shows two teams with logos; "event" shows title + single event logo</td>
            </tr>
            <tr>
              <td><code>homeLogo</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Home team logo; in tipo="event", used as the event logo</td>
            </tr>
            <tr>
              <td><code>awayLogo</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Away team logo (unused in tipo="event")</td>
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
          {`type CardEventSport = "Futebol" | "Basquete" | "Hóquei" | "Automobilismo";
type CardEventTipo = "versus" | "event";`}
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
              <td>Outer button — 145×73px, border-radius 4px, sport BG via CSS var</td>
            </tr>
            <tr>
              <td><code>.cardEvent__bar</code></td>
              <td>Colored 3px left bar using sport bar color</td>
            </tr>
            <tr>
              <td><code>.cardEvent__body</code></td>
              <td>Flex column content area (versus)</td>
            </tr>
            <tr>
              <td><code>.cardEvent__body--event</code></td>
              <td>Event layout modifier — column with space-between, title top / logo bottom-right</td>
            </tr>
            <tr>
              <td><code>.cardEvent__title</code></td>
              <td>Title text — 2-line clamp, Segoe UI 600 12px/13px</td>
            </tr>
            <tr>
              <td><code>.cardEvent__teams</code></td>
              <td>Flex row: gameTime + home logo + X + away logo</td>
            </tr>
            <tr>
              <td><code>.cardEvent__logo</code></td>
              <td>Circular team logo — 26×26px, border-radius 50%</td>
            </tr>
            <tr>
              <td><code>.cardEvent__separator</code></td>
              <td>"X" separator between logos</td>
            </tr>
            <tr>
              <td><code>.cardEvent__eventLogo</code></td>
              <td>Event logo — max 58×14px, bottom-right aligned</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Versus</h3>
        <div className="code-block">
          {`<CardEvent
  sport="Futebol"
  tipo="versus"
  title="Corinthians X Ponte Preta"
  homeLogo="/logos/corinthians.png"
  awayLogo="/logos/ponte-preta.png"
  onClick={() => openModal(event)}
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>Event (Automobilismo)</h3>
        <div className="code-block">
          {`<CardEvent
  sport="Automobilismo"
  tipo="event"
  title="ONE Friday Fights"
  homeLogo="/logos/f1.svg"
  onClick={() => openModal(event)}
/>`}
        </div>
      </div>
    </>
  );
}
