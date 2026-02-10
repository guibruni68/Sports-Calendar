import { useState } from "react";
import { FilterCalendar } from "../../components/FilterCalendar";
import type { FilterCalendarName } from "../../components/FilterCalendar";
import filterCalendarSetRef from "../../assets/reference/filter-calendar-set.png";
import type { ShowcaseProps } from "./types";

const ALL_FILTER_NAMES: FilterCalendarName[] = [
  "Todos", "Futebol", "Basquete", "Futebol Americano",
  "Automobilismo", "Beisebol", "Hóquei",
];

const FILTER_ACTIVE_COLORS: Record<FilterCalendarName, string> = {
  Todos: "#EA580C",
  Futebol: "#40BD01",
  Basquete: "#FF0800",
  "Futebol Americano": "#E11577",
  Automobilismo: "#9B18BC",
  Beisebol: "#2822DA",
  Hóquei: "#0077FF",
};

export function FilterCalendarShowcase({ subTab }: ShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCalendarName>("Todos");
  const [demoName, setDemoName] = useState<FilterCalendarName>("Futebol");
  const [demoActive, setDemoActive] = useState(false);

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Active States — Each Sport Color</h2>
          <div className="styles-row" style={{ gap: 8, flexWrap: "wrap" }}>
            {ALL_FILTER_NAMES.map((name) => (
              <FilterCalendar key={name} name={name} active />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Default State</h2>
          <div className="styles-row" style={{ gap: 8, flexWrap: "wrap" }}>
            {ALL_FILTER_NAMES.map((name) => (
              <FilterCalendar key={name} name={name} />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Interactive Demo</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Click a filter to select it. Hover to see the intermediate state.
          </p>
          <div className="demo-area" style={{ gap: 8, flexWrap: "wrap" }}>
            {ALL_FILTER_NAMES.map((name) => (
              <FilterCalendar
                key={name}
                name={name}
                active={activeFilter === name}
                onClick={() => setActiveFilter(name)}
              />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <img
            src={filterCalendarSetRef}
            alt="Figma Filter Calendar component set"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Active Color Tokens (per sport)</h2>
          <div className="token-grid">
            {ALL_FILTER_NAMES.map((name) => (
              <div key={name} className="token-card">
                <div
                  className="token-card__preview"
                  style={{ backgroundColor: FILTER_ACTIVE_COLORS[name] }}
                />
                <div className="token-card__label">{name}</div>
                <div className="token-card__value">
                  {FILTER_ACTIVE_COLORS[name]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>State Color Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#303030" }} />
              <div className="token-card__label">Default Background</div>
              <div className="token-card__value">#303030</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#4F4E4E" }} />
              <div className="token-card__label">Hover Background</div>
              <div className="token-card__value">#4F4E4E</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#B9B9B9" }} />
              <div className="token-card__label">Default Text</div>
              <div className="token-card__value">#B9B9B9</div>
            </div>
            <div className="token-card">
              <div className="token-card__preview" style={{ backgroundColor: "#FFFFFF" }} />
              <div className="token-card__label">Hover / Active Text</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Typography Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Font Family</div>
              <div className="token-card__value">Inter</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Weight</div>
              <div className="token-card__value">500 (Medium)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Font Size</div>
              <div className="token-card__value">14px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Line Height</div>
              <div className="token-card__value">20px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Border Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Padding</div>
              <div className="token-card__value">4px 16px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Height</div>
              <div className="token-card__value">28px (HUG)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Gap (inner)</div>
              <div className="token-card__value">8px</div>
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
              <div className="token-card__value">Dissolve</div>
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
          <FilterCalendar
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
                setDemoName(e.target.value as FilterCalendarName);
                setDemoActive(false);
              }}
            >
              {ALL_FILTER_NAMES.map((n) => (
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
              <td><code>FilterCalendarName</code></td>
              <td>—</td>
              <td>Sport filter name (required). One of: Todos, Futebol, Basquete, Futebol Americano, Automobilismo, Beisebol, Hóquei</td>
            </tr>
            <tr>
              <td><code>active</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Whether the filter is in the active/clicked state (sport-colored background)</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Callback fired when the filter is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Types</h2>
        <div className="code-block">
          {`type FilterCalendarName =
  | "Todos" | "Futebol" | "Basquete"
  | "Futebol Americano" | "Automobilismo"
  | "Beisebol" | "Hóquei";`}
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
              <td><code>.filterCalendar</code></td>
              <td>Inline button with dark gray background and subtle text</td>
            </tr>
            <tr>
              <td><code>.filterCalendar--active</code></td>
              <td>Sport-colored background for active state</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { FilterCalendar } from "./components/FilterCalendar";

<FilterCalendar name="Futebol" />`}
        </div>
        <h3 style={{ marginTop: 24 }}>Filter group with single selection</h3>
        <div className="code-block">
          {`const [active, setActive] = useState<FilterCalendarName>("Todos");

const sports: FilterCalendarName[] = [
  "Todos", "Futebol", "Basquete",
  "Futebol Americano", "Automobilismo",
  "Beisebol", "Hóquei"
];

{sports.map((name) => (
  <FilterCalendar
    key={name}
    name={name}
    active={active === name}
    onClick={() => setActive(name)}
  />
))}`}
        </div>
      </div>
    </>
  );
}
