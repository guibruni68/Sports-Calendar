import { useState } from "react";
import { PopUpCard } from "../../components/PopUpCard";
import { TagJogo } from "../../components/TagJogo";
import { TagCanal } from "../../components/TagCanal";
import corinthiansLogo from "../../assets/corinthians-logo.png";
import pontePretaLogo from "../../assets/ponte-preta-logo.png";
import popUpCardSetRef from "../../assets/reference/popup-card-set.png";
import type { ShowcaseProps } from "./types";

export function PopUpCardShowcase({ subTab }: ShowcaseProps) {
  const [demoAoVivo, setDemoAoVivo] = useState(false);
  const [demoChampionship, setDemoChampionship] = useState("Paulistão");

  const sampleChannels = (
    <>
      <TagCanal channel="GE TV" canal="1" />
      <TagCanal channel="SporTV" canal="1" />
      <TagCanal channel="Premiere" canal="1" />
      <TagCanal channel="Premiere" canal="2" />
      <TagCanal channel="Premiere" canal="3" />
    </>
  );

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Variants</h2>

          <h3>Ao Vivo = False (With Date)</h3>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Default state showing game date/time in center</p>
          <div className="demo-area" style={{ justifyContent: "center" }}>
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

          <h3 style={{ marginTop: 32 }}>Ao Vivo = True</h3>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Live match with "AO VIVO" badge replacing the date</p>
          <div className="demo-area" style={{ justifyContent: "center" }}>
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

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={popUpCardSetRef}
            alt="PopUp Card – Figma reference"
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
              <div className="token-card__label">Championship Text</div>
              <div className="token-card__value">#EA580C</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#FFFFFF" }} />
              <div className="token-card__label">Team Name / Score</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#C5023C" }} />
              <div className="token-card__label">AO VIVO Badge BG</div>
              <div className="token-card__value">#C5023C</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#FAFAFA" }} />
              <div className="token-card__label">AO VIVO Badge Text</div>
              <div className="token-card__value">#FAFAFA</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Championship Font</div>
              <div className="token-card__value">Montserrat Alternates 700 36px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Team Name Font</div>
              <div className="token-card__value">Montserrat Alternates 700 24px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Game Date Font</div>
              <div className="token-card__value">Inter 600 22px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">AO VIVO Font</div>
              <div className="token-card__value">Roboto 700 22px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Layout Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Card Size</div>
              <div className="token-card__value">600 x 441px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">24px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Team Logo Size</div>
              <div className="token-card__value">164 x 164px (circle)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">AO VIVO Padding</div>
              <div className="token-card__value">5px 15px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">AO VIVO Radius</div>
              <div className="token-card__value">7px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Channels Row Gap</div>
              <div className="token-card__value">12px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Channels Row Padding</div>
              <div className="token-card__value">13px 0</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Decorative Mesh (Looper BG)</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Position</div>
              <div className="token-card__value">absolute, left: -87px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Size</div>
              <div className="token-card__value">662 x 441px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Opacity</div>
              <div className="token-card__value">0.45</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Stroke Gradient</div>
              <div className="token-card__value">#6B0CAE → #EA580C</div>
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
        <div className="demo-area" style={{ justifyContent: "center" }}>
          <PopUpCard
            championship={demoChampionship}
            homeLogo={corinthiansLogo}
            homeName="Corinthians"
            awayLogo={pontePretaLogo}
            awayName="Ponte Preta"
            aoVivo={demoAoVivo}
            gameDate={demoAoVivo ? undefined : "27/01 19:00"}
            tagJogo={<TagJogo name="Clássico" text="⚔️ Clássico!" />}
            channels={sampleChannels}
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
            <input
              type="checkbox"
              checked={demoAoVivo}
              onChange={(e) => setDemoAoVivo(e.target.checked)}
            />
            aoVivo
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
              <td>Championship name (e.g. "Paulistão") (required)</td>
            </tr>
            <tr>
              <td><code>homeLogo</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Home team logo URL (required)</td>
            </tr>
            <tr>
              <td><code>homeName</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Home team name (required)</td>
            </tr>
            <tr>
              <td><code>awayLogo</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Away team logo URL (required)</td>
            </tr>
            <tr>
              <td><code>awayName</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Away team name (required)</td>
            </tr>
            <tr>
              <td><code>aoVivo</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Show AO VIVO badge instead of date</td>
            </tr>
            <tr>
              <td><code>gameDate</code></td>
              <td><code>string</code></td>
              <td><code>"27/01 19:00"</code></td>
              <td>Date/time string</td>
            </tr>
            <tr>
              <td><code>tagJogo</code></td>
              <td><code>ReactNode</code></td>
              <td>—</td>
              <td>Tag Jogo element (e.g. Clássico)</td>
            </tr>
            <tr>
              <td><code>channels</code></td>
              <td><code>ReactNode</code></td>
              <td>—</td>
              <td>Channel tags for broadcast row</td>
            </tr>
          </tbody>
        </table>
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
              <td><code>.popUpCard</code></td>
              <td>Outer container (600 x 441)</td>
            </tr>
            <tr>
              <td><code>.popUpCard__looper</code></td>
              <td>Decorative mesh background</td>
            </tr>
            <tr>
              <td><code>.popUpCard__championship</code></td>
              <td>Championship title text</td>
            </tr>
            <tr>
              <td><code>.popUpCard__teams</code></td>
              <td>Row with both teams + center</td>
            </tr>
            <tr>
              <td><code>.popUpCard__team</code></td>
              <td>Individual team column</td>
            </tr>
            <tr>
              <td><code>.popUpCard__logo</code></td>
              <td>Team logo (164px circle)</td>
            </tr>
            <tr>
              <td><code>.popUpCard__teamName</code></td>
              <td>Team name text</td>
            </tr>
            <tr>
              <td><code>.popUpCard__center</code></td>
              <td>Center column (score/live/tag)</td>
            </tr>
            <tr>
              <td><code>.popUpCard__score</code></td>
              <td>Date/time text</td>
            </tr>
            <tr>
              <td><code>.popUpCard__live</code></td>
              <td>AO VIVO badge</td>
            </tr>
            <tr>
              <td><code>.popUpCard__channels</code></td>
              <td>Bottom broadcast row</td>
            </tr>
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
