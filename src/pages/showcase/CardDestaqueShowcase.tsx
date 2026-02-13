import { useState } from "react";
import { CardDestaque } from "../../components/CardDestaque";
import type { CardDestaqueTipo } from "../../components/CardDestaque";
import { TagCanal } from "../../components/TagCanal";
import corinthiansLogo from "../../assets/corinthians-logo.png";
import pontePretaLogo from "../../assets/ponte-preta-logo.png";
import cardDestaqueSetRef from "../../assets/reference/calendar-date-set.png";
import type { ShowcaseProps } from "./types";

export function CardDestaqueShowcase({ subTab }: ShowcaseProps) {
  const [demoTipo, setDemoTipo] = useState<CardDestaqueTipo>("Jogo");
  const [demoAoVivo, setDemoAoVivo] = useState(false);

  const sampleChannels = (
    <>
      <TagCanal channel="SporTV" canal="1" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.7 }}>
        <path d="M11.3332 1.3335L7.99984 4.66683L4.6665 1.3335" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3335 4.6665H2.66683C1.93045 4.6665 1.3335 5.26346 1.3335 5.99984V13.3332C1.3335 14.0696 1.93045 14.6665 2.66683 14.6665H13.3335C14.0699 14.6665 14.6668 14.0696 14.6668 13.3332V5.99984C14.6668 5.26346 14.0699 4.6665 13.3335 4.6665Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <TagCanal channel="GE TV" canal="1" />
    </>
  );

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Tipo: Jogo — Ao Vivo</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Live match with "AO VIVO" badge. Hover adds orange border + rounded corners.</p>
          <div className="demo-area">
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
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Upcoming match with date/time pill. Hover adds orange border + rounded corners.</p>
          <div className="demo-area">
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
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Team card with logo and name. Always rounded, hover adds border.</p>
          <div className="demo-area" style={{ gap: 16 }}>
            <CardDestaque tipo="Time" logo={corinthiansLogo} name="Corinthians" />
            <CardDestaque tipo="Time" logo={pontePretaLogo} name="Ponte Preta" />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Tipo: Competição</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Competition card with logo and name. Same layout as Time.</p>
          <div className="demo-area" style={{ gap: 16 }}>
            <CardDestaque tipo="Competição" logo={corinthiansLogo} name="Copa do Brasil" />
            <CardDestaque tipo="Competição" logo={pontePretaLogo} name="Campeonato Paulista" />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={cardDestaqueSetRef}
            alt="Card Destaque – Figma reference"
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
              <div className="token-card__preview" style={{ backgroundColor: "#1B1C21" }} />
              <div className="token-card__label">Card Background</div>
              <div className="token-card__value">#1B1C21</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#EA580C" }} />
              <div className="token-card__label">Hover Border</div>
              <div className="token-card__value">#EA580C</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "rgba(234, 88, 12, 0.1)" }} />
              <div className="token-card__label">Score Pill BG</div>
              <div className="token-card__value">rgba(234, 88, 12, 0.1)</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#C5023C" }} />
              <div className="token-card__label">AO VIVO Badge BG</div>
              <div className="token-card__value">#C5023C</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#FFFFFF" }} />
              <div className="token-card__label">Name Text</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "rgba(255,255,255, 0.1)" }} />
              <div className="token-card__label">Channels Border Top</div>
              <div className="token-card__value">rgba(255,255,255, 0.1)</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Game Date Font</div>
              <div className="token-card__value">Inter 600 18px / 22px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">AO VIVO Font</div>
              <div className="token-card__value">Roboto 700 12px / 16px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Name Font</div>
              <div className="token-card__value">Lexend 600 16px / 20px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Layout Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Jogo Size</div>
              <div className="token-card__value">272 x 116px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Time / Competição Size</div>
              <div className="token-card__value">250 x 70px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Jogo Padding</div>
              <div className="token-card__value">0 4px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Gap</div>
              <div className="token-card__value">8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Logo Size</div>
              <div className="token-card__value">56 x 56px (circle)</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Border Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Jogo Default Radius</div>
              <div className="token-card__value">0</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Jogo Hover Radius</div>
              <div className="token-card__value">24px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Time / Competição Radius</div>
              <div className="token-card__value">24px (always)</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Animation Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Transition Properties</div>
              <div className="token-card__value">border-color, border-radius</div>
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
          {demoTipo === "Jogo" ? (
            <CardDestaque
              tipo="Jogo"
              aoVivo={demoAoVivo}
              gameDate={demoAoVivo ? undefined : "27/01 19:00"}
              homeLogo={corinthiansLogo}
              awayLogo={pontePretaLogo}
              channels={sampleChannels}
            />
          ) : (
            <CardDestaque
              tipo={demoTipo}
              logo={corinthiansLogo}
              name={demoTipo === "Time" ? "Corinthians" : "Copa do Brasil"}
            />
          )}
        </div>
        <div className="demo-controls">
          <label>
            tipo:
            <select
              value={demoTipo}
              onChange={(e) => setDemoTipo(e.target.value as CardDestaqueTipo)}
            >
              <option value="Jogo">Jogo</option>
              <option value="Time">Time</option>
              <option value="Competição">Competição</option>
            </select>
          </label>
          {demoTipo === "Jogo" && (
            <label>
              <input
                type="checkbox"
                checked={demoAoVivo}
                onChange={(e) => setDemoAoVivo(e.target.checked)}
              />
              aoVivo
            </label>
          )}
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
              <td><code>tipo</code></td>
              <td><code>CardDestaqueTipo</code></td>
              <td>—</td>
              <td>Card type: "Jogo", "Time", or "Competição" (required)</td>
            </tr>
            <tr>
              <td><code>aoVivo</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Show "AO VIVO" badge (Jogo only)</td>
            </tr>
            <tr>
              <td><code>gameDate</code></td>
              <td><code>string</code></td>
              <td><code>"27/01 19:00"</code></td>
              <td>Date/time string (Jogo, when not live)</td>
            </tr>
            <tr>
              <td><code>homeLogo</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Home team logo URL (Jogo)</td>
            </tr>
            <tr>
              <td><code>awayLogo</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Away team logo URL (Jogo)</td>
            </tr>
            <tr>
              <td><code>channels</code></td>
              <td><code>ReactNode</code></td>
              <td>—</td>
              <td>Channel tags for bottom row (Jogo)</td>
            </tr>
            <tr>
              <td><code>logo</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Logo URL (Time/Competição)</td>
            </tr>
            <tr>
              <td><code>name</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Name text (Time/Competição)</td>
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
          {`type CardDestaqueTipo = "Jogo" | "Time" | "Competição";`}
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
              <td><code>.cardDestaque</code></td>
              <td>Outer button container with border transitions</td>
            </tr>
            <tr>
              <td><code>.cardDestaque--jogo</code></td>
              <td>Match variant (272x116px, no default radius)</td>
            </tr>
            <tr>
              <td><code>.cardDestaque--time</code></td>
              <td>Team variant (250x70px, always rounded)</td>
            </tr>
            <tr>
              <td><code>.cardDestaque--competicao</code></td>
              <td>Competition variant (same as Time)</td>
            </tr>
            <tr>
              <td><code>.cardDestaque__club</code></td>
              <td>Horizontal logos + center element row</td>
            </tr>
            <tr>
              <td><code>.cardDestaque__logo</code></td>
              <td>Team/competition logo (56px circle)</td>
            </tr>
            <tr>
              <td><code>.cardDestaque__score</code></td>
              <td>Date/time pill container</td>
            </tr>
            <tr>
              <td><code>.cardDestaque__live</code></td>
              <td>AO VIVO badge</td>
            </tr>
            <tr>
              <td><code>.cardDestaque__name</code></td>
              <td>Team/competition name text</td>
            </tr>
            <tr>
              <td><code>.cardDestaque__channels</code></td>
              <td>Bottom channel row with top border</td>
            </tr>
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
      <TagCanal channel="SporTV" canal="1" />
      <TagCanal channel="GE TV" canal="1" />
    </>
  }
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
