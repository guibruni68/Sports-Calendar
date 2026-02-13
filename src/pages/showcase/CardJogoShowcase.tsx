import { useState } from "react";
import { CardJogo } from "../../components/CardJogo";
import type { TagJogoName } from "../../components/TagJogo";
import corinthiansLogo from "../../assets/corinthians-logo.png";
import pontePretaLogo from "../../assets/ponte-preta-logo.png";
import cardJogoDefaultRef from "../../assets/reference/card-jogo-default.png";
import cardJogoHoverRef from "../../assets/reference/card-jogo-hover.png";
import type { ShowcaseProps } from "./types";

export function CardJogoShowcase({ subTab }: ShowcaseProps) {
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
            Hover over the card above to see the orange border.
          </p>
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

        <div className="showcase__section">
          <h2>Figma Reference</h2>
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
              <div className="token-card__preview" style={{ backgroundColor: "#ED590D" }} />
              <div className="token-card__label">Hover Border</div>
              <div className="token-card__value">#ED590D</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#EA580C" }} />
              <div className="token-card__label">Championship Text</div>
              <div className="token-card__value">#EA580C</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#FFFFFF" }} />
              <div className="token-card__label">Team Name</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "rgba(255,255,255,0.7)" }} />
              <div className="token-card__label">Date/Time</div>
              <div className="token-card__value">#FFFFFF 70%</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
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
              onChange={(e) => setDemoTag(e.target.value as TagJogoName)}
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
        <h2>Types</h2>
        <div className="code-block">
          {`interface TeamInfo {
  name: string;
  logoSrc: string;
}

interface Broadcast {
  channel: ChannelName;
  canal?: CanalNumber;
}`}
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
              <td><code>.cardJogo</code></td>
              <td>Main card container with dark background and orange hover border</td>
            </tr>
            <tr>
              <td><code>.cardJogo__container</code></td>
              <td>Flexbox column layout with padding</td>
            </tr>
            <tr>
              <td><code>.cardJogo__header</code></td>
              <td>Space-between layout for championship and tag</td>
            </tr>
            <tr>
              <td><code>.cardJogo__championship</code></td>
              <td>Large orange championship text</td>
            </tr>
            <tr>
              <td><code>.cardJogo__matchup</code></td>
              <td>Flex column for team matchup section</td>
            </tr>
            <tr>
              <td><code>.cardJogo__team</code></td>
              <td>Flex row for individual team display</td>
            </tr>
            <tr>
              <td><code>.cardJogo__teamLogo</code></td>
              <td>Team logo image (40px)</td>
            </tr>
            <tr>
              <td><code>.cardJogo__teamName</code></td>
              <td>White team name text</td>
            </tr>
            <tr>
              <td><code>.cardJogo__dateTime</code></td>
              <td>Semi-transparent date/time text</td>
            </tr>
            <tr>
              <td><code>.cardJogo__broadcasts</code></td>
              <td>Flex row with top border for broadcast channels</td>
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
