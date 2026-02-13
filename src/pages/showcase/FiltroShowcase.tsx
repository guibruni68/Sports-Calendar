import { useState } from "react";
import { FiltroCampeonatos } from "../../components/FiltroCampeonatos";
import filtroDefaultRef from "../../assets/reference/filtro-default.png";
import filtroHoverRef from "../../assets/reference/filtro-hover.png";
import type { ShowcaseProps } from "./types";

const CHAMPIONSHIPS = [
  "Todos",
  "Champions League",
  "Paulistão",
  "Premier League",
  "La Liga",
  "Brasileirão",
];

export function FiltroShowcase({ subTab }: ShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [demoActive, setDemoActive] = useState(false);
  const [demoSize, setDemoSize] = useState<"sm" | "md" | "lg">("md");
  const [demoLabel, setDemoLabel] = useState("Brasileirão");

  if (subTab === "styles")
    return (
      <>
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
              <td><code>.filtroCampeonatos</code></td>
              <td>Inline button with dark background and orange hover/active</td>
            </tr>
            <tr>
              <td><code>.filtroCampeonatos.active</code></td>
              <td>Orange background for active state</td>
            </tr>
            <tr>
              <td><code>.filtroCampeonatos--sm</code></td>
              <td>Small variant with reduced padding and font size</td>
            </tr>
            <tr>
              <td><code>.filtroCampeonatos--lg</code></td>
              <td>Large variant with increased padding and font size</td>
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
