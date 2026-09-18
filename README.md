# Practo metabolic health microsite (V2)

Static build of the V2 Figma design. Every word comes from
`Practo_Lilly_Microsite_Script_Final 1.docx` and lives in `lib/content.ts`.

Every section is pixel-matched against the Figma frame
**"V2 UPDATED · new script content · Desktop 1440"** (node `2242:20`) in file
`AehPygU0Ms7pcLCQPfEZEk`. Each component carries the node id it was built from
in a `data-node-id` attribute and a header comment listing the measurements
taken off that node.

## Run

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # static export to ./out

`next.config.mjs` sets `output: 'export'`, so `out/` is plain HTML, CSS, JS and
images. No Node process is needed in production.

## Deploy to the Hostinger KVM 4 box

    rsync -av --delete out/ user@server:/var/www/metabolic-health/

nginx server block:

    server {
      listen 443 ssl http2;
      server_name metabolic-health-awareness.practo.com;

      root /var/www/metabolic-health;
      index index.html;

      location /_next/static/ { expires 1y; add_header Cache-Control "public, immutable"; }
      location /images/       { expires 30d; add_header Cache-Control "public"; }
      location / { try_files $uri $uri/ $uri.html /index.html; }
    }

`trailingSlash: true` is on, so `/` resolves to `index.html` cleanly.

## Structure

    lib/content.ts        every string, verbatim, plus the 15 references
    app/globals.css       three-layer tokens: primitives, semantic, component
    tailwind.config.ts    Tailwind reads semantic tokens only, never a raw hex
    components/           one file per Figma section node
    assets-src/           raw client images, NOT shipped
    public/images/        generated WebP, 1.2 MB total

Dark sections work by wrapping in `.on-dark`, which re-points the semantic
tokens. No component takes a colour prop.

The page frame is 1440 wide with 56px gutters, matching Figma. Every section
centres its content in `max-w-[1440px]`, so on wider screens the design sits
centred rather than stretching.

## Figma fidelity

Measured section heights at a 1440 viewport against the Figma nodes:

| Section | Node | Figma | Build |
|---|---|---|---|
| Nav | `2242:21` | 94 | 94 |
| 01 Health starts with you | `2242:40` | 872 | 872 |
| 01 Band · Five measures | `2242:95` | 236 | 235 |
| 02–03 Your health dynamics | `2242:171` | 1969 | 1968 |
| 04 Health in balance | `2242:617` | 1180 | 1178 |
| 05 Every number tells a story | `2242:415` | 818 | 818 |
| 05A Waist panel | `2242:205` | 1309 | 1309 |
| 06 Understand the symptoms | `2242:120` | 2295 | 2293 |
| 08 Speaking to a doctor | `2242:562` | 1148 | 1146 |
| 09 Learn your next steps | `2242:646` | 945 | 944 |
| Footer | `2242:683` | 903 | 894 |

Two sections are deliberately shorter than their frame because the frame draws
every state at once while the design note on it specifies interactive
behaviour:

- **01A Explainer** (`2244:29`) — the frame stacks all four panels. The note on
  it reads "Inside are four tabs, with [Previous] and [Next] to move between
  them", so the build shows one panel at a time and is collapsed by default.
- **07 Check what matters** (`2242:462`) — the frame lays out all eight
  questions. The note reads "show one question at a time with a progress bar",
  so the build does exactly that.

### Assets

The Figma asset CDN is not reachable from this environment, so images and
vectors were taken out of the file directly:

- The Practo logo was exported with `node.exportAsync()` and reassembled from
  checksummed base64 chunks. It lives at `public/images/brand/practo-logo.webp`.
- Every vector (the pencil in the waist panel, the bullet dots, the check icon)
  was exported as `SVG_STRING` and inlined verbatim in the component that uses
  it. None of them is hand-drawn.

## Regenerating images

Raw files stay in `assets-src/`. After adding or replacing one:

    python3 assets-src/optimise.py

This resizes and writes WebP into `public/images/`. The raw 132 MB never ships.

## Interactive pieces

- **Understand your metabolism** — collapsed by default, opens from *Know More*
  or any link to `#understand`. Four tabs, arrow-key navigable.
- **Journey pills in the nav** — the bar is sticky and the pills track the
  section in view. At rest they render exactly as in `2242:21`.
- **How waist circumference is measured** — rendered open, because the Figma
  frame draws it open and carries no toggle control anywhere in the design.
- **Check what matters** — eight questions, one at a time. All state is React
  state in `AssessmentTool.tsx`. Nothing is written to storage, nothing is sent,
  no analytics call. The summary is derived at render time from the answers.
- **Interstitial** — a real modal on Screen 9, one variant per button, closes on
  Escape, on backdrop click and on *Stay on this page*, and returns focus to the
  button that opened it.

## Responsive

Checked at 390, 768 and 1440. No horizontal overflow at any of them. The
desktop-only compositions degrade explicitly rather than by accident:

- the staggered quote wall drops its indents and fixed rule widths below `lg`
  (`.quote-row` / `.quote-rule` in `globals.css`);
- the hero reading chips move to just past the scan line below `lg`
  (`.hero-chip`);
- the navel marker label moves to the left edge of the photo (`.marker-label`);
- the journey pills are hidden below `lg`, where the sections are reached by
  scrolling rather than by jumping.

## Known deviations from the Figma frame

- `signs/waist-increase.webp` uses the client's own waist photo rather than the
  glass-of-water image the Figma frame still carries under "Increasing waist
  circumference", which did not match the point being made. Approved earlier.
- A few strings in the Figma frame are not in the client script: the waist
  panel's "Optional panel…" card, its "A simple rule of thumb" card and the
  Screen 9 pull quote. They are in `lib/content.ts`, each marked with the node
  it was transcribed from.
- The nav is sticky. The Figma frame draws it as the first band of a static
  page, but the journey pills only work as a progress indicator if the bar
  stays visible.
