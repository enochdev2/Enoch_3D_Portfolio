# Enoch 3D Portfolio — New Render Assets, Material Studies & Vercel Analytics

## Changes applied

- `src/data/projects.ts`
  - Preserves the existing Hammer project (`/projects/hammer`) and replaces its old cover/gallery image with two new uploaded renders.
  - Preserves the existing Cloth Simulation project (`/projects/cloth-simulation`), replacing its old cover/gallery image and embedding the supplied video: https://youtube.com/shorts/IDNIdUD7pz0
  - Adds two independent projects under the already-existing "Material & Lighting" category:
    - Watermelon Material Study (`/projects/watermelon-material-study`)
    - Wood Texture Material Study (`/projects/wood-texture-material-study`)
  - Preserves the other existing projects and YouTube links.
- `src/assets/hero/index.ts` — exports the five new image assets.
- `src/assets/hero/` — adds five optimized WebP files generated from the five supplied PNGs. The originals remain untouched; existing portfolio image files are not deleted.
- `src/App.tsx` — mounts the Vercel Web Analytics component once at the application root.

## Important: install analytics dependency

This source ZIP did not contain a usable installed `node_modules` or Vite/TypeScript configuration, and the execution environment could not reach npm. To avoid inventing package-lock integrity hashes or shipping a lockfile that breaks `npm ci`, the source-level analytics integration is included in this patch, while installing the package is a required one-time step after extraction:

```bash
npm install @vercel/analytics@2.0.1
```

This command updates both `package.json` and `package-lock.json` correctly in your local project.

**Why `@vercel/analytics/react`?** This is a Vite + React project. The `@vercel/analytics/next` import is for Next.js, not generic React.

Also enable **Web Analytics** in the Vercel project's Dashboard > Analytics, then deploy the updated site. The package does not ordinarily collect analytics in local development. Web Analytics reports traffic/page views; it is not a replacement for application logs, tracing, or all Vercel Observability features.

## Apply

From the existing portfolio project root:

```bash
unzip -o ~/Downloads/enoch-portfolio-render-materials-analytics-patch.zip -d .
npm install @vercel/analytics@2.0.1
git diff --check
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

## Verification status

- Patch ZIP and new image files validated.
- TypeScript/TSX syntax parsed; static project IDs/slugs/categories and local image import paths checked.
- Full build, lint, Web Analytics collection, and embedded YouTube playback **not** verified in this environment because the provided ZIP omitted the project configuration files and dependencies could not be downloaded.
