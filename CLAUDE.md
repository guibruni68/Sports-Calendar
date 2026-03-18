# Sports Calendar — Project Rules for Claude

## Stack

- React 19 + TypeScript (strict mode)
- Vite 7 (dev server proxies `/api/events`, `/api/banners`, `/api/teams` to Airtable)
- React Router DOM v7
- Plain CSS (no Tailwind, no CSS-in-JS)
- ESM modules

## Component Organization

- UI components live in `src/components/<ComponentName>/` with three files:
  - `ComponentName.tsx` — implementation
  - `ComponentName.css` — scoped styles
  - `index.ts` — barrel export
- Pages live in `src/pages/`
- Assets live in `src/assets/`

## Naming Conventions

- Components: PascalCase (`CardJogo`, `PopUpCard`, `CTAButton`)
- CSS classes: camelCase BEM — `componentName__element--modifier`
  - Example: `.cardJogo__championship`, `.tagJogo--classico`
- TypeScript interfaces: PascalCase with `Props` suffix (`CardJogoProps`)
- Type exports: descriptive names (`TagJogoName`, `ChannelName`)

## Styling Rules

- IMPORTANT: All colors must use CSS custom properties from `src/styles/tokens.css`
- NEVER hardcode hex colors, font sizes, or spacing values
- Token categories:
  - Brand: `--color-primary` (`#ED590D`)
  - Backgrounds: `--color-bg-surface-1` through `--color-bg-surface-6`
  - Text: `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`, `--color-text-muted`
  - Borders: `--color-border-default`, `--color-border-subtle`, `--color-border-muted`, `--color-border-strong`
  - Sport colors: `--color-sport-futebol`, `--color-sport-basquete`, etc.
  - Channel colors: `--color-channel-gettv`, `--color-channel-sportv`, etc.
  - Status: `--color-live` (`#C5023C`), `--color-tag-final` (`#8400DB`)
- No path aliases — use relative imports (e.g. `../TagJogo`, `../../assets/default-club-logo.svg`)

## Component Patterns

- All components accept an optional `onClick?: () => void` prop when they are interactive
- Use `role="button"` and `tabIndex={0}` when a non-button element has an `onClick`
- Prefer `<button type="button">` for interactive elements
- Error-handle logo images with `onError={(e) => { e.currentTarget.src = defaultClubLogo; }}`
- Export types alongside components from `index.ts`

## Figma MCP Integration Rules

These rules define how to translate Figma inputs into code for this project.

### Required Flow (do not skip)

1. Run `get_design_context` first to fetch the structured representation of the node(s)
2. If the response is too large, run `get_metadata` first, then re-fetch only required nodes
3. Run `get_screenshot` for visual reference
4. Download any required assets, then start implementation
5. Translate Figma output into this project's conventions (plain CSS, design tokens, no Tailwind)
6. Validate against Figma for 1:1 visual parity before marking complete

### Implementation Rules

- Replace any Tailwind utility classes from MCP output with plain CSS using design tokens
- Reuse existing components from `src/components/` instead of creating duplicates
- Use the project's CSS token system, never hardcode values
- Follow BEM naming for new CSS classes
- Place new component files in `src/components/<ComponentName>/` following the three-file pattern
- IMPORTANT: If Figma MCP returns a localhost source for an image/SVG, use it directly
- IMPORTANT: DO NOT import new icon packages — use assets from the Figma payload or existing `src/assets/`
- Strive for 1:1 visual parity with the Figma screenshot

## SearchBar Specs

- Size: `190×40px`, `border-radius: 6px`
- Background: `--color-bg-surface-5`
- Border: `1px solid var(--color-border-input)` (`#D9D9D9`)
- Layout: `display: inline-flex`, `align-items: center`, `gap: 8px`, `padding: 10px 8px`
- Icon: `16×16px`, color `--color-text-muted-2` → `--color-text-primary` on hover/focus
- Input font: `Segoe UI 400 16px / 21px`, placeholder color `--color-text-muted-2`
- Placeholder: "Buscar times, jogos..."

## CTAButton Specs

- Size: `height: 40px`, `padding: 0 16px`, `border-radius: 6px`
- Background: `--color-primary`
- Font: `Segoe UI 600 16px`, color `--color-text-primary`
- Hover: `filter: brightness(1.1)`, `transform: scale(1.02)`
- Active: `transform: scale(0.98)`

## Header Element Order

In all page headers, the standard order is **CTA button first (left), Search Bar second (right)**:
```tsx
<CTAButton label="Quero ser Watch" />
<div className="page__headerSearch">
  <SearchBar onFocus={...} />
</div>
```

## PopUpCard Specs

### Shared (both variants)
- Card background: `--color-bg-surface-3`, `border-radius: 24px`
- Championship title: `font-size: 32px`, `line-height: 39px`, color `--color-primary`, font `Montserrat Alternates 700`
- AO VIVO badge: `font-size: 18px`, `line-height: 24px`, `border-radius: 6px`, `padding: 4.5px 12px`, background `--color-live`, font **`Segoe UI 700`**
- Score pill: `display: inline-flex`, `padding: 10px 20px`, `border-radius: 62px`, `background: --color-bg-surface-3` (mesmo fundo do card — mascara o looper BG decorativo atrás do texto), font `Inter 600 22px / 27px`
- Channels row: `gap: 8px`, `padding: 13px 0`

### Versus variant (`tipo="versus"`, default) — 600×441px
- Teams row: `align-items: flex-start`, `margin-top: 18px`, `padding: 0 26px`
- Team logos: `164px × 164px`, **no border-radius** (natural crest shape), white background, `object-fit: contain`
- Team column width: `164px`, `gap: 15px`
- Team name: `font-size: 24px`, `line-height: 29px`, font `Montserrat Alternates 700`
- Center column: `flex: 1`, `align-self: center`, `gap: 8px`

### Event variant (`tipo="event"`) — 600×250px
- Used for single-entity sports (F1, Tennis, etc.) — no away team
- Layout: horizontal row — event logo/image on LEFT, championship + date/live on RIGHT
- `homeLogo` is used as the event image (max 200×100px, `object-fit: contain`)
- Looper BG is mirrored to the right side (`right: -87px`)
- Championship `text-align: left`, `margin-top: 0` (overridden inside eventInfo)
- `awayLogo`, `awayName`, and `tagJogo` props are ignored in this variant

## CardDestaque Specs

Card de resultado de busca / destaque. Dois tamanhos conforme o `tipo`.

- Card: `258px` wide, `border: 2px solid transparent`, hover → `border-color: --color-primary`
- `padding: 0 4px`, `gap: 8px`, `flex-direction: column`, `align-items: center`, `justify-content: center`
- **Não alterar `border-radius`** — mantido via definição do projeto

### Variantes de tipo:

| Tipo | Altura | Estrutura |
|---|---|---|
| `Jogo` | 116px | logo home + score/live + logo away → channels row |
| `Evento` | 116px | event logo (80×20) + score/live → channels row |
| `Time` | 70px | logo 56×56 + nome (Lexend) |
| `Competição` | 70px | logo 56×56 + nome (Lexend) |

### Club row gaps:
- Jogo, ao vivo=False: `gap: 8px`
- Jogo, ao vivo=True: `gap: 18px`
- Evento: `gap: 60px`
- Time / Competição: `gap: 6px`

### Score pill (`aoVivo=false`):
- `background: color-mix(in srgb, --color-primary 10%, transparent)` (10% opacity laranja)
- `padding: 3px 8px`, `border-radius: 50px`
- Font: `Segoe UI 700 12px / 16px`, `color: --color-primary`

### AO VIVO badge (`aoVivo=true`):
- `background: --color-live`, `padding: 3px 8px`, `border-radius: 4px`
- Font: `Segoe UI 700 12px / 16px`, `color: --color-text-primary`

### Logos:
- `56×56px`, **sem background** (transparente sobre o dark card), `object-fit: contain`
- Event logo (Evento): `max-width: 80px; max-height: 20px`, sem background

### Nome (Time / Competição):
- `Lexend 600 16px / 20px`, `color: --color-text-primary`, `text-align: left`, `width: 150px`

### Channels row:
- **Apenas `border-top: 1px solid --color-border-subtle`** (divisória) — sem caixa/borda em volta
- `display: flex`, `flex-wrap: wrap`, `gap: 6px`, `justify-content: center`, `padding: 6px 0`
- Tags usam `Montserrat 12px w=400`, `padding: 4px 8px`, `border-radius: 4px`

## CardEvent Specs

Small event card used in the Calendar grid. Two variants via `tipo` prop.

- Card: `145×73px`, `border-radius: 4px`
- Left bar: `3px` wide, sport-specific color
- Background and bar colors are applied via CSS custom props (`--card-bg`, `--card-bg-hover`, `--card-bar`) set through inline `style` from the `SPORT_COLORS` map

### Versus variant (`tipo="versus"`, default)
- Body: `flex-direction: column`, `padding: 4px 6px`, `gap: 6px`
- Title: `Segoe UI 600`, `12px / 13px`, 2-line clamp (`-webkit-line-clamp: 2`)
- Teams row: `gap: 4px`, contains `gameTime` (optional) + home logo + "X" + away logo
- `gameTime`: Inter 500, 12px/16px — e.g. `"19:00"`
- Team logos: `26×26px`, `border-radius: 50%`

### Event variant (`tipo="event"`)
- Body: `flex-direction: column`, `justify-content: space-between`, `padding: 0 6px 8px`
- Title at top-left, event logo (`homeLogo`) at bottom-right (`align-self: flex-end`)
- Event logo: max `58×14px`, `object-fit: contain`
- `awayLogo` and `gameTime` are unused

### Sport colors (tokens):
| Sport | Bar token | Bg token | Hover bg token |
|---|---|---|---|
| Futebol | `--color-sport-futebol` (#40BD01) | `--color-sport-futebol-bg` (#243223) | `--color-sport-futebol-bg-hover` (#306F13) |
| Basquete | `--color-sport-basquete` (#00A05B) | `--color-sport-basquete-bg` (#17302A) | `--color-sport-basquete-bg-hover` (#0D5E3E) |
| Hóquei | `--color-sport-hockey` (#0077FF) | `--color-sport-hockey-bg` (#1E2B3C) | `--color-sport-hockey-bg-hover` (#104C93) |
| Automobilismo | `--color-sport-automobilismo` (#9B18BC) | `--color-sport-automobilismo-bg` (#351B40) | `--color-sport-automobilismo-bg-hover` (#5A1A6E) |

## FilterCalendar Specs

Sport filter button. States are driven by `active` prop + CSS `:hover`. Background color when active is set via inline `style` using the `ACTIVE_COLORS` map in the TSX.

- Button: `height: 28px`, `border-radius: 8px`, `padding: 4px 16px`
- Font: `Inter 500`, `14px / 20px`
- **Default**: bg `--color-bg-surface-6` (`#303030`), text `--color-text-muted-3` (`#B9B9B9`)
- **Hover**: bg `--color-bg-surface-hover` (`#4F4E4E`), text `--color-text-primary` (white)
- **Active**: bg = sport-specific color (see tokens below), text `--color-text-primary` (white)
- **Active hover**: `filter: brightness(1.1)`

Active color map (token → hex):
- `Todos` → `--color-primary` (`#ED590D`)
- `Futebol` → `--color-sport-futebol` (`#40BD01`)
- `Basquete` → `--color-sport-basquete` (`#00A05B`)
- `Futebol Americano` → `--color-sport-futebol-americano` (`#E11577`)
- `Automobilismo` → `--color-sport-automobilismo` (`#9B18BC`)
- `Beisebol` → `--color-sport-beisebol` (`#2822DA`)
- `Hóquei` → `--color-sport-hockey` (`#0077FF`)

## Asset Handling

- Default club logo fallback: `src/assets/default-club-logo.svg`
- Logo: `src/assets/logo-watch.svg`
- Looper background: `src/assets/looper-bg.png`
- Store new assets in `src/assets/`

## Modal Pattern

When a page needs a detail modal (e.g. PopUpCard):
1. Add `useState<SelectedData | null>(null)` for the selected item
2. Add `useEffect` to close on Escape key
3. Render overlay: `<div className="page__modalOverlay" onClick={() => setSelected(null)}>`
4. Render content: `<div className="page__modalContent" onClick={(e) => e.stopPropagation()}>`
5. Add CSS in the page's CSS file:
```css
.page__modalOverlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.page__modalContent {
  position: relative;
}
```

## Data Fetching

- API calls go through `src/services/eventsService.ts`
- Use `AbortController` for cleanup in `useEffect`
- Static placeholder data lives directly in page files as `const ARRAY_NAME = [...]`
- API data replaces static data when available: `const items = apiData.length > 0 ? apiData.map(...) : STATIC_DATA`
