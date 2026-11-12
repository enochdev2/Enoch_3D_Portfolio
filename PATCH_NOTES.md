# Enoch Toon Studio logo patch

## What changed
- `src/components/layout/Logo.tsx`: Replaced the old text-only ENOCH logo with the existing Enoch Toon image and a matching ENOCH TOON / 3D STUDIO wordmark. The logo is visible in the navbar on desktop and mobile, links to the homepage, and includes a keyboard-visible focus style.
- `src/main.tsx`: Updates the browser favicon to the same Enoch Toon image when the app loads, replacing the default Vite icon if present.

## Required existing asset (already in your uploaded project)
`src/assets/hero/Enoch Toon.jpg`

This patch reuses the existing asset; it does not alter or duplicate your artwork.

## Apply on Mac
From the portfolio project root:

    unzip -o ~/Downloads/enoch-toon-branding-patch.zip -d .
    git diff --check
    npm run lint
    npx tsc --noEmit
    npm run build
    npm run dev

## Scope and verification
Only the two named source files are replaced. Project cards, the separate walk-cycle project, embeds, and gallery data remain unchanged.
ZIP integrity and source/asset references were checked. A full Vite build was not run because the uploaded ZIP does not include `index.html`, `tsconfig.json`, or the Vite configuration.
