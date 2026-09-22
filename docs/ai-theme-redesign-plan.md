# mehulai.com — "Neural Horizon" AI Theme Redesign Plan

**Constraint: ZERO content changes.** Every word, project, link, publication,
stat and structure stays exactly as-is. Only styling changes: globals.css
tokens/classes, component classNames, Hero scene artwork, fonts.

---

## 1. Current state (audited)

| Area | Today |
|---|---|
| Stack | Next 16.2.4, Tailwind v4, framer-motion 12, static export → `serve` :3099 → Cloudflare |
| Theming | CSS variables, light + `[data-theme="dark"]`, 467-line globals.css, 42 selectors |
| Current theme | **Forest/mountain nature**: cream base, green accent (#15803D / #22C55E), amber secondary |
| Hero | Hand-built layered SVG mountain scene (5 layers: sky, mountains, mist, sun/stars, trees) |
| Fonts | Fraunces (serif display) + Inter, loaded via CSS `@import` (render-blocking) |
| Components | 10 sections (~1,550 lines), shared classes: `.card`, `.pill`, `.section-label`, `.card-hover`, `.card-elevated`, `.pill-live` |

## 2. Design direction — "Neural Horizon"

Transform the nature theme into an **AI/tech identity** while keeping the
site's architecture (including the layered Hero scene concept — re-skinned,
not rebuilt).

### Palette (re-tokened, both modes)

| Token | Dark (primary "AI mode") | Light ("Lab mode") |
|---|---|---|
| bg-base | `#050810` deep space | `#F8FAFC` lab white |
| bg-card | `#0C1220` glass navy | `#FFFFFF` |
| accent | electric cyan `#22D3EE` | indigo `#4F46E5` |
| accent-2 | violet `#8B5CF6` | cyan `#0891B2` |
| gradient | cyan→violet (`linear 120°`) | indigo→cyan |
| glow | `rgba(34,211,238,.18)` | `rgba(79,70,229,.12)` |
| borders | white 8% + accent 20% on hover | black 6% |

### Typography (decision needed)
- Display: **Space Grotesk** (technical, geometric — the AI-native look)
- Body: **Inter** (unchanged)
- Labels/numbers/tech chips: **JetBrains Mono** (code vibe for stats, dates, tags)
- Switch fonts from CSS `@import` → **next/font** (self-hosted, kills render-blocking fetch)
- *Alternative: keep Fraunces serif for contrast ("humanist × machine" story) — your call*

## 3. The CSS feature set (the "detailed CSS" ask)

**Depth & realism**
1. **Glassmorphism** cards: `backdrop-filter: blur(16px) saturate(1.4)`, 1px gradient border (white→transparent), inner top highlight
2. **Layered shadows** tuned per elevation + soft ambient occlusion under cards
3. **Noise/grain overlay** (inline SVG `feTurbulence` at 3% opacity) — kills the "flat AI gradient" look, adds realism
4. **3D tilt on hover** for project cards (`transform: perspective(800px) rotateX/Y` by pointer, CSS-only via `:has()`/custom props fallback to static)

**AI motifs**
5. **Neural network background** in Hero: pure-CSS/SVG nodes + connecting lines with slow drift + occasional pulse traveling along an edge (respecting reduced-motion)
6. **Circuit ridges**: the mountain SVG layers re-drawn as circuit-board traces with pads and 45° bends — same 5-layer parallax structure
7. **Data mist**: mist layer becomes horizontal scan-lines / matrix rain shimmer (subtle, 5% opacity)
8. **Constellation stars**: star layer becomes nodes that twinkle and occasionally link (SVG `stroke-dashoffset` animation)
9. **Blueprint grid** background pattern (8% visible) on section backgrounds — CSS gradients, no images

**Motion & light**
10. **Animated gradient borders** on featured cards (conic-gradient rotation via `@property --angle`)
11. **Shine sweep** across cards on hover (translucent diagonal, 600ms)
12. **Gradient text** for section headers + hero name (cyan→violet, `background-clip: text`)
13. **Glowing timeline** for Experience: gradient line with pulse traveling node-to-node
14. **Stat count-up glow**: numbers in JetBrains Mono with soft accent `text-shadow`
15. **Scroll progress**: gradient + glow bar (exists — rethemed)
16. **Micro-details**: custom scrollbar, accent `::selection`, visible focus rings, `prefers-reduced-motion` honored globally (already in FileButler pattern)

## 4. Component-by-component

| Component | Changes (visual only) |
|---|---|
| Hero | Scene layers re-skinned (circuit ridges, node stars, data mist, glow sun); gradient name text; mono subtitle labels; CTA button = animated gradient pill |
| Navbar | Glass blur bar (becomes solid on scroll — exists), gradient underline active state, tiny pulsing node as logo dot |
| Stats | Glass cards, mono numbers + glow, animated top border on the "featured" stat |
| Projects | Glass cards + 3D tilt + shine sweep; status pills re-colored (live = pulsing green dot); tech chips in mono; per-project accent color kept (FileButler gold, AgentDeal violet…) |
| Project detail pages | Match: gradient header band in project color, glass sections, mono metadata |
| Experience | Glowing gradient timeline, node markers, glass role cards |
| Research | Glass paper cards, hover lift, citation count in mono chip |
| About / Contact | Glass panels; contact links as glass chips with icon glow on hover |
| Footer | Blueprint-grid background, gradient top hairline |
| ScrollProgress | Gradient cyan→violet + glow |

## 5. What does NOT change
- All text content, data (`src/lib/data.ts` untouched except nothing), links, sections, order
- Component logic, routes, static export, Cloudflare setup, deploy flow (build → out/ served live)

## 6. Phases (each = 1 commit, live immediately after build)

| Phase | Work | Est. |
|---|---|---|
| 1 | Tokens + fonts (next/font) + base surfaces + noise + scrollbar/selection | 1-1.5h |
| 2 | Hero "Neural Horizon" scene re-skin (all 5 SVG layers + animations) | 2h |
| 3 | Glass card system + pills + gradient text + project grid (cards, tilt, shine) | 1.5h |
| 4 | Timeline, stats, research, contact, footer, navbar, detail pages | 1.5h |
| 5 | Motion polish pass (keyframes, reduced-motion audit, both themes side-by-side, Lighthouse) | 1h |

## 7. Decisions needed from Mehul
1. **Fonts:** Space Grotesk + JetBrains Mono (recommended) — or keep Fraunces serif + add only mono?
2. **Hero concept:** circuit-board mountains (recommended, keeps your signature layered scene) — or replace with abstract neural mesh entirely?
3. **Default mode:** dark-first (recommended for AI theme) with light toggle — or keep current default?
