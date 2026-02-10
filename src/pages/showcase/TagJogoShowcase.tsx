import { useState } from "react";
import { TagJogo } from "../../components/TagJogo";
import type { TagJogoName } from "../../components/TagJogo";
import tagJogoClassicoRef from "../../assets/reference/tagjogo-classico.png";
import tagJogoFinalRef from "../../assets/reference/tagjogo-final.png";
import type { ShowcaseProps } from "./types";

export function TagJogoShowcase({ subTab }: ShowcaseProps) {
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
        <h2>Types</h2>
        <div className="code-block">
          {`type TagJogoName = "Clássico" | "Final" | "None";`}
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
              <td><code>.tagJogo</code></td>
              <td>Inline pill tag with rounded shape and bold white text</td>
            </tr>
            <tr>
              <td><code>.tagJogo--classico</code></td>
              <td>Orange background for classic/derby matches</td>
            </tr>
            <tr>
              <td><code>.tagJogo--final</code></td>
              <td>Purple background for final matches</td>
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
