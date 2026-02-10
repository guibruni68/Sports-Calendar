import { useState } from "react";
import { BannerHero } from "../../components/BannerHero";
import type { BannerHeroSize } from "../../components/BannerHero";
import bannerHeroBg from "../../assets/banner-hero-bg.png";
import bannerHeroDefaultRef from "../../assets/reference/banner-hero-default.png";
import bannerHeroMiniRef from "../../assets/reference/banner-hero-mini.png";
import bannerHeroSetRef from "../../assets/reference/banner-hero-set.png";
import type { ShowcaseProps } from "./types";

export function BannerHeroShowcase({ subTab }: ShowcaseProps) {
  const [demoSize, setDemoSize] = useState<BannerHeroSize>("Default");

  if (subTab === "styles")
    return (
      <>
        <div className="showcase__section">
          <h2>Variants</h2>
          <div className="styles-row" style={{ gap: 24, alignItems: "flex-start" }}>
            <div className="styles-item">
              <BannerHero
                imageSrc={bannerHeroBg}
                alt="Brasileirão Premiere"
                size="Default"
                onClick={() => alert("Banner Default clicked")}
              />
              <span className="styles-item__label">Default (728 x 356)</span>
            </div>
            <div className="styles-item">
              <BannerHero
                imageSrc={bannerHeroBg}
                alt="Brasileirão Premiere"
                size="Mini"
                onClick={() => alert("Banner Mini clicked")}
              />
              <span className="styles-item__label">Mini (620 x 350)</span>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Interactive Demo</h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 16 }}>
            Hover to see the scale + shadow transition. Click to trigger the action.
          </p>
          <div className="demo-area" style={{ justifyContent: "center" }}>
            <BannerHero
              imageSrc={bannerHeroBg}
              alt="Brasileirão Premiere"
              size={demoSize}
              onClick={() => alert(`Banner ${demoSize} clicked`)}
            />
          </div>
          <div className="demo-controls">
            <label>
              size:
              <select
                value={demoSize}
                onChange={(e) => setDemoSize(e.target.value as BannerHeroSize)}
              >
                <option value="Default">Default (728x356)</option>
                <option value="Mini">Mini (620x350)</option>
              </select>
            </label>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Figma Reference</h2>
          <div className="styles-row" style={{ gap: 24 }}>
            <div className="styles-item">
              <img
                src={bannerHeroDefaultRef}
                alt="Figma Banner Hero Default"
                style={{ width: 492, borderRadius: 16 }}
              />
              <span className="styles-item__label">Figma: Default</span>
            </div>
            <div className="styles-item">
              <img
                src={bannerHeroMiniRef}
                alt="Figma Banner Hero Mini"
                style={{ width: 420, borderRadius: 16 }}
              />
              <span className="styles-item__label">Figma: Mini</span>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <img
              src={bannerHeroSetRef}
              alt="Banner Hero full component set from Figma"
              style={{ width: 500, borderRadius: 10 }}
            />
          </div>
        </div>
      </>
    );

  if (subTab === "tokens")
    return (
      <>
        <div className="showcase__section">
          <h2>Spacing & Layout Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Default Width</div>
              <div className="token-card__value">728px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Default Height</div>
              <div className="token-card__value">356px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Mini Width</div>
              <div className="token-card__value">620px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Mini Height</div>
              <div className="token-card__value">350px</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Border Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Border Radius</div>
              <div className="token-card__value">16px</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Overflow</div>
              <div className="token-card__value">hidden (clipsContent)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Object Fit</div>
              <div className="token-card__value">cover (Figma: FILL)</div>
            </div>
          </div>
        </div>

        <div className="showcase__section">
          <h2>Animation Tokens</h2>
          <div className="token-grid">
            <div className="token-card">
              <div className="token-card__label">Hover Transform</div>
              <div className="token-card__value">scale(1.01)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Hover Box Shadow</div>
              <div className="token-card__value">0 8px 24px rgba(0,0,0,0.4)</div>
            </div>
            <div className="token-card">
              <div className="token-card__label">Transition</div>
              <div className="token-card__value">300ms ease-out</div>
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
          <BannerHero
            imageSrc={bannerHeroBg}
            alt="Brasileirão Premiere"
            size={demoSize}
            onClick={() => alert(`Banner ${demoSize} clicked`)}
          />
        </div>
        <div className="demo-controls">
          <label>
            size:
            <select
              value={demoSize}
              onChange={(e) => setDemoSize(e.target.value as BannerHeroSize)}
            >
              <option value="Default">Default (728x356)</option>
              <option value="Mini">Mini (620x350)</option>
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
              <td><code>imageSrc</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Banner image source URL (required)</td>
            </tr>
            <tr>
              <td><code>alt</code></td>
              <td><code>string</code></td>
              <td><code>"Banner"</code></td>
              <td>Alt text for the image</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>"Default" | "Mini"</code></td>
              <td><code>"Default"</code></td>
              <td>Size variant</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
              <td>Click handler (renders as button when set)</td>
            </tr>
            <tr>
              <td><code>href</code></td>
              <td><code>string</code></td>
              <td>—</td>
              <td>Link URL (renders as anchor when set)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Types</h2>
        <div className="code-block">
          {`type BannerHeroSize = "Default" | "Mini";`}
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
              <td><code>.bannerHero</code></td>
              <td>Container with smooth hover scale and shadow transition</td>
            </tr>
            <tr>
              <td><code>.bannerHero--mini</code></td>
              <td>Mini variant (620x350px)</td>
            </tr>
            <tr>
              <td><code>.bannerHero__image</code></td>
              <td>Full-width/height image with object-fit cover</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="showcase__section">
        <h2>Usage Examples</h2>
        <h3>Default size with click handler</h3>
        <div className="code-block">
          {`<BannerHero
  imageSrc="/banners/brasileirao.png"
  alt="Brasileirão Premiere"
  onClick={() => navigate("/brasileirao")}
/>`}
        </div>
        <h3 style={{ marginTop: 24 }}>Mini size with link</h3>
        <div className="code-block">
          {`<BannerHero
  imageSrc="/banners/brasileirao.png"
  alt="Brasileirão Premiere"
  size="Mini"
  href="https://ge.globo.com/brasileirao"
/>`}
        </div>
      </div>
    </>
  );
}
