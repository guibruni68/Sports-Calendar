import { useState } from "react";
import { MenuButton } from "../../components/MenuButton";
import type { MenuButtonName } from "../../components/MenuButton";
import menuButtonSetRef from "../../assets/reference/node-6073-set.png";
import type { ShowcaseProps } from "./types";

const ALL_MENU_NAMES: MenuButtonName[] = [
  "Futebol", "Basquete", "Hóquei", "Futebol Americano",
  "Automobilismo", "Beisebol", "Home", "Onde Assistir",
  "Calendário", "Sidebar",
];

const SPORT_MENU_NAMES: MenuButtonName[] = [
  "Futebol", "Basquete", "Hóquei", "Futebol Americano",
  "Automobilismo", "Beisebol",
];

const NAV_MENU_NAMES: MenuButtonName[] = [
  "Home", "Onde Assistir", "Calendário",
];

export function MenuButtonShowcase({ subTab }: ShowcaseProps) {
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
          <div className="demo-area" style={{ flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
            {SPORT_MENU_NAMES.map((name) => (
              <MenuButton
                key={name}
                name={name}
                active={activeName === name}
                onClick={() => setActiveName(activeName === name ? null : name)}
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Navigation Variants</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Mixed-case labels, Inter 400-500 16px. Home uses medium weight (500).
          </p>
          <div className="demo-area" style={{ flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
            {NAV_MENU_NAMES.map((name) => (
              <MenuButton
                key={name}
                name={name}
                active={activeName === name}
                onClick={() => setActiveName(activeName === name ? null : name)}
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
              onClick={() => setActiveName(activeName === "Sidebar" ? null : "Sidebar")}
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
              <div className="token-card__preview" style={{ backgroundColor: "#A4A4A4" }} />
              <div className="token-card__label">Default Color</div>
              <div className="token-card__value">#A4A4A4</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#EA580C" }} />
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
          <h2>Spacing & Layout Tokens</h2>
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
                <option key={n} value={n}>{n}</option>
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
        <h2>Types</h2>
        <div className="code-block">
          {`type MenuButtonName =
  | "Futebol" | "Basquete" | "Hóquei"
  | "Futebol Americano" | "Automobilismo" | "Beisebol"
  | "Home" | "Onde Assistir" | "Calendário" | "Sidebar";`}
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
              <td><code>.menuButton</code></td>
              <td>Inline button with icon and label, gray text with orange hover</td>
            </tr>
            <tr>
              <td><code>.menuButton--active</code></td>
              <td>Orange text color for active state</td>
            </tr>
            <tr>
              <td><code>.menuButton__icon</code></td>
              <td>Icon image (24px, Sidebar: 20px)</td>
            </tr>
            <tr>
              <td><code>.menuButton__label</code></td>
              <td>Text label with Inter font</td>
            </tr>
            <tr>
              <td><code>.menuButton--sport</code></td>
              <td>Sport variant with small uppercase text</td>
            </tr>
            <tr>
              <td><code>.menuButton--nav</code></td>
              <td>Navigation variant with standard text</td>
            </tr>
            <tr>
              <td><code>.menuButton--sidebar</code></td>
              <td>Icon-only sidebar variant (20px)</td>
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
