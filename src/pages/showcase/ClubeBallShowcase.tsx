import { useState } from "react";
import { ClubeBall } from "../../components/ClubeBall";
import corinthiansLogo from "../../assets/corinthians-logo.png";
import defaultRef from "../../assets/reference/default-state.png";
import hoverRef from "../../assets/reference/hover-state.png";
import clickedRef from "../../assets/reference/clicked-state.png";
import type { ShowcaseProps } from "./types";

export function ClubeBallShowcase({ subTab }: ShowcaseProps) {
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
              <td><code>.clubeBall</code></td>
              <td>Outer circular container with dark background and border transition</td>
            </tr>
            <tr>
              <td><code>.clubeBall.selected</code></td>
              <td>Orange border for selected state</td>
            </tr>
            <tr>
              <td><code>.clubeBall--sm</code></td>
              <td>Small size variant (80px)</td>
            </tr>
            <tr>
              <td><code>.clubeBall--lg</code></td>
              <td>Large size variant (164px)</td>
            </tr>
            <tr>
              <td><code>.clubeBall__logo</code></td>
              <td>Club logo image with object-fit cover</td>
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
