# Interaction & Motion Upgrade

This is a targeted patch for the existing React + TypeScript + Tailwind + Framer Motion portfolio.

## What changes

- Adds a subtle scroll-progress line and an animated back-to-top control.
- Adds scroll-aware active navigation and animated navigation underline.
- Makes the hero artwork respond to pointer movement with perspective, a moving light highlight, orbit detail, and floating information labels.
- Adds a magnetic response to the primary hero CTA.
- Upgrades project cards with pointer-tracked lighting, stronger 3D tilt, hover depth, and a motion badge for projects containing video.
- Animates category-filter selection and project-grid rearrangement.
- Adds reveal and hover motion to project gallery media.
- Improves scroll reveals with a subtle blur-to-sharp transition.
- Respects the user's reduced-motion preference for the main animated interactions.

## Files included

- `src/components/common/ScrollExperience.tsx` (new)
- `src/components/common/Reveal.tsx`
- `src/components/layout/Layout.tsx`
- `src/components/layout/Navbar.tsx`
- `src/sections/hero/HeroContent.tsx`
- `src/sections/hero/HeroImage.tsx`
- `src/sections/projects/ProjectCard.tsx`
- `src/sections/projects/ProjectFilter.tsx`
- `src/sections/projects/ProjectGrid.tsx`
- `src/sections/projects/ProjectGallery.tsx`

## Apply

Extract this ZIP into the root of the existing portfolio project and allow the files under `src/` to be overwritten. The new `ScrollExperience.tsx` file will be added automatically.

## Verification

- TypeScript/TSX syntax transpilation: passed for all 10 included source files.
- Relative import paths: checked against the supplied source archive.
- ZIP integrity: passed.
- Full TypeScript type-check and Vite production build: not run. The supplied source archive did not include `tsconfig.json`, `vite.config.ts`, `index.html`, or installed dependencies, so a full project build could not be verified from that archive.

## Compatibility

No new npm packages are required. The patch uses the project's existing Framer Motion and Lucide dependencies. It does not add WebGL or actual Blender geometry; these are interaction and CSS-perspective improvements. Real-time 3D model rendering can be added as a separate phase using React Three Fiber and `.glb` assets.
