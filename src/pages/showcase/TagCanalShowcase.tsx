import { useState } from "react";
import { TagCanal } from "../../components/TagCanal";
import type { ChannelName, CanalNumber } from "../../components/TagCanal";
import tagGetvRef from "../../assets/reference/tag-getv.png";
import tagEspnRef from "../../assets/reference/tag-espn.png";
import tagPremiereRef from "../../assets/reference/tag-premiere.png";
import tagSportvRef from "../../assets/reference/tag-sportv.png";
import tagHbomaxRef from "../../assets/reference/tag-hbomax.png";
import tagRecordRef from "../../assets/reference/tag-record.png";
import type { ShowcaseProps } from "./types";

const ALL_CHANNELS: ChannelName[] = [
  "GE TV",
  "SporTV",
  "ESPN",
  "HBO Max",
  "SBT",
  "Premiere",
  "Band",
  "Record",
  "RedeTV",
];

const BRAND_COLORS: Record<string, string> = {
  "GE TV": "#6B0CAE",
  SporTV: "#2B762B",
  ESPN: "#C70000",
  "HBO Max": "#060516",
  SBT: "#0A0663",
  Premiere: "#007700",
  Band: "#73766E",
  Record: "#0910E3",
  RedeTV: "#097E79",
};

const CANAL_OPTIONS: Record<string, CanalNumber[]> = {
  "GE TV": ["1", "2"],
  SporTV: ["1", "2", "3", "4", "5", "4k"],
  ESPN: ["1", "2", "3", "4", "5", "6"],
  "HBO Max": ["1"],
  SBT: ["1"],
  Premiere: ["1", "2", "3", "4", "5"],
  Band: ["1"],
  Record: ["1"],
  RedeTV: ["1"],
};

const TAG_REFS = [
  { src: tagGetvRef, label: "GE TV" },
  { src: tagEspnRef, label: "ESPN" },
  { src: tagPremiereRef, label: "Premiere" },
  { src: tagSportvRef, label: "SporTV" },
  { src: tagHbomaxRef, label: "HBO Max" },
  { src: tagRecordRef, label: "Record" },
];

export function TagCanalShowcase({ subTab }: ShowcaseProps) {
  const [demoChannel, setDemoChannel] = useState<ChannelName>("ESPN");
  const [demoCanal, setDemoCanal] = useState<CanalNumber>("1");

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>All Channel Brands</h2>
          <div className="styles-row" style={{ gap: 8, flexWrap: "wrap" }}>
            {ALL_CHANNELS.map((ch) => (
              <TagCanal key={ch} channel={ch} canal="1" />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Multi-Canal Channels</h2>

          <h3>ESPN (Canals 1–6)</h3>
          <div className="styles-row" style={{ gap: 8, marginBottom: 24 }}>
            {(["1", "2", "3", "4", "5", "6"] as CanalNumber[]).map((c) => (
              <TagCanal key={c} channel="ESPN" canal={c} />
            ))}
          </div>

          <h3>SporTV (Canals 1–5, 4K)</h3>
          <div className="styles-row" style={{ gap: 8, marginBottom: 24 }}>
            {(["1", "2", "3", "4", "5", "4k"] as CanalNumber[]).map((c) => (
              <TagCanal key={c} channel="SporTV" canal={c} />
            ))}
          </div>

          <h3>Premiere (Canals 1–5)</h3>
          <div className="styles-row" style={{ gap: 8 }}>
            {(["1", "2", "3", "4", "5"] as CanalNumber[]).map((c) => (
              <TagCanal key={c} channel="Premiere" canal={c} />
            ))}
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <div className="styles-row" style={{ gap: 12, flexWrap: "wrap" }}>
            {TAG_REFS.map((ref) => (
              <div key={ref.label} className="styles-item">
                <img
                  src={ref.src}
                  alt={`Figma ${ref.label}`}
                  style={{ height: 24, borderRadius: 4 }}
                />
                <span className="styles-item__label">Figma: {ref.label}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Brand Color Tokens</h2>
          <div className="token-grid">
            {Object.entries(BRAND_COLORS).map(([name, color]) => (
              <div key={name} className="token-card">
                <div
                  className="token-card__preview"
                  style={{ backgroundColor: color }}
                />
                <div className="token-card__label">{name}</div>
                <div className="token-card__value">{color}</div>
              </div>
            ))}
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
              <div className="token-card__value">12px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Line Height</div>
              <div className="token-card__value">16px (133%)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Text Color</div>
              <div className="token-card__value">#FFFFFF</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Spacing & Border Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Height</div>
              <div className="token-card__value">24px (fixed)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Padding</div>
              <div className="token-card__value">4px 8px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Width</div>
              <div className="token-card__value">fit-content (HUG)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">4px</div>
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
          <TagCanal channel={demoChannel} canal={demoCanal} />
        </div>
        <div className="demo-controls">
          <label>
            channel:
            <select
              value={demoChannel}
              onChange={(e) => {
                const ch = e.target.value as ChannelName;
                setDemoChannel(ch);
                setDemoCanal("1");
              }}
            >
              {ALL_CHANNELS.map((ch) => (
                <option key={ch} value={ch}>
                  {ch}
                </option>
              ))}
            </select>
          </label>
          <label>
            canal:
            <select
              value={demoCanal}
              onChange={(e) => setDemoCanal(e.target.value as CanalNumber)}
            >
              {(CANAL_OPTIONS[demoChannel] || ["1"]).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
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
              <td><code>channel</code></td>
              <td><code>ChannelName</code></td>
              <td>—</td>
              <td>The TV channel brand (required). One of: GE TV, SporTV, ESPN, HBO Max, SBT, Premiere, Band, Record, RedeTV, None</td>
            </tr>
            <tr>
              <td><code>canal</code></td>
              <td><code>CanalNumber</code></td>
              <td><code>"1"</code></td>
              <td>The canal number. One of: "0", "1", "2", "3", "4", "5", "6", "4k"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Types</h2>
        <div className="code-block">
          {`type ChannelName =
  | "GE TV" | "SporTV" | "ESPN" | "HBO Max"
  | "SBT" | "Premiere" | "Band" | "Record"
  | "RedeTV" | "None";

type CanalNumber = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "4k";`}
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
              <td><code>.tagCanal</code></td>
              <td>Inline tag container with flexible width and white text</td>
            </tr>
            <tr>
              <td><code>.tagCanal--getv</code></td>
              <td>Purple background for GE TV channel</td>
            </tr>
            <tr>
              <td><code>.tagCanal--sportv</code></td>
              <td>Green background for SporTV channel</td>
            </tr>
            <tr>
              <td><code>.tagCanal--espn</code></td>
              <td>Red background for ESPN channel</td>
            </tr>
            <tr>
              <td><code>.tagCanal--hbomax</code></td>
              <td>Dark background for HBO Max channel</td>
            </tr>
            <tr>
              <td><code>.tagCanal--premiere</code></td>
              <td>Green background for Premiere channel</td>
            </tr>
            <tr>
              <td><code>.tagCanal--none</code></td>
              <td>Hidden state with zero width</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Basic usage</h3>
        <div className="code-block">
          {`import { TagCanal } from "./components/TagCanal";

<TagCanal channel="ESPN" canal="1" />
<TagCanal channel="SporTV" canal="4k" />
<TagCanal channel="HBO Max" />`}
        </div>
        <h3 style={{ marginTop: 24 }}>Displaying multiple tags for a match</h3>
        <div className="code-block">
          {`const channels = [
  { channel: "ESPN", canal: "1" },
  { channel: "Premiere", canal: "3" },
];

<div style={{ display: "flex", gap: 4 }}>
  {channels.map((ch) => (
    <TagCanal
      key={\`\${ch.channel}-\${ch.canal}\`}
      channel={ch.channel}
      canal={ch.canal}
    />
  ))}
</div>`}
        </div>
      </div>
    </>
  );
}
