import { useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import searchBarSetRef from "../../assets/reference/search-bar-set.png";
import type { ShowcaseProps } from "./types";

export function SearchBarShowcase({ subTab }: ShowcaseProps) {
  const [demoValue, setDemoValue] = useState("");
  const [previewValue, setPreviewValue] = useState("");
  const [previewPlaceholder, setPreviewPlaceholder] = useState("Buscar times, jogos...");

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Variants</h2>

          <h3>Default</h3>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Icon and placeholder in #A4A4A4</p>
          <div className="demo-area">
            <SearchBar />
          </div>

          <h3 style={{ marginTop: 24 }}>Hover</h3>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Hover to see icon &amp; placeholder turn white</p>
          <div className="demo-area">
            <SearchBar />
          </div>

          <h3 style={{ marginTop: 24 }}>Typing (Focused)</h3>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>Click to focus — icon stays white, user text is white</p>
          <div className="demo-area">
            <SearchBar value={demoValue} onChange={setDemoValue} placeholder="Buscar times, jogos..." />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Interactive Demo</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Type in the search bar to see the focused state with custom placeholder.
          </p>
          <div className="demo-area" style={{ gap: 16 }}>
            <SearchBar placeholder="Pesquisar..." />
            <SearchBar placeholder="Buscar canal" />
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={searchBarSetRef}
            alt="Search Bar – Figma reference"
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
              <div className="token-card__preview" style={{ backgroundColor: "#2E3034" }} />
              <div className="token-card__label">Background</div>
              <div className="token-card__value">#2E3034</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#A4A4A4" }} />
              <div className="token-card__label">Icon / Placeholder (default)</div>
              <div className="token-card__value">#A4A4A4</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#FFFFFF" }} />
              <div className="token-card__label">Icon / Placeholder (hover/focus)</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#FFFFFF" }} />
              <div className="token-card__label">Input Text</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Font Family</div>
              <div className="token-card__value">Segoe UI, sans-serif</div>
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
              <div className="token-card__value">21px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Layout Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Display</div>
              <div className="token-card__value">inline-flex</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Width</div>
              <div className="token-card__value">190px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Height</div>
              <div className="token-card__value">40px (content-driven)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Padding</div>
              <div className="token-card__value">10px 8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Gap</div>
              <div className="token-card__value">8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">6px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Icon Size</div>
              <div className="token-card__value">16 x 16px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Animation Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Transition Property</div>
              <div className="token-card__value">color</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Duration</div>
              <div className="token-card__value">300ms</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Easing</div>
              <div className="token-card__value">ease-out</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Trigger</div>
              <div className="token-card__value">:hover, :focus-within</div>
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
          <SearchBar
            value={previewValue}
            onChange={setPreviewValue}
            placeholder={previewPlaceholder}
          />
        </div>
        <div className="demo-controls">
          <label>
            placeholder:
            <input
              type="text"
              value={previewPlaceholder}
              onChange={(e) => setPreviewPlaceholder(e.target.value)}
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
              <td><code>placeholder</code></td>
              <td><code>string</code></td>
              <td><code>"Buscar times, jogos..."</code></td>
              <td>Placeholder text when input is empty</td>
            </tr>
            <tr>
              <td><code>value</code></td>
              <td><code>string</code></td>
              <td><code>undefined</code></td>
              <td>Controlled input value</td>
            </tr>
            <tr>
              <td><code>onChange</code></td>
              <td><code>(value: string) =&gt; void</code></td>
              <td>—</td>
              <td>Callback when input value changes</td>
            </tr>
            <tr>
              <td><code>onFocus</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Callback when input gains focus</td>
            </tr>
            <tr>
              <td><code>onBlur</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Callback when input loses focus</td>
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
              <td><code>.searchBar</code></td>
              <td>Container — flex layout with dark background</td>
            </tr>
            <tr>
              <td><code>.searchBar__icon</code></td>
              <td>SVG magnifying glass icon (gray, white on hover/focus)</td>
            </tr>
            <tr>
              <td><code>.searchBar__input</code></td>
              <td>Text input element with transparent background</td>
            </tr>
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
