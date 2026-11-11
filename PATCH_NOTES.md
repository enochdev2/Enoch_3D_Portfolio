# Walk Cycle Animation – Separate Project Fix

## Root cause
The preceding patch renamed `low-poly-human` to "Character Rigging & Walk Cycle" and attached the video to that existing project. The dedicated walk-cycle image in `src/assets/hero/walk cycle image.png` was not imported into the project catalogue, so a separate card did not exist.

## Fix
- Restore the existing `low-poly-human` project as **Human Modeling**, keeping its original `Human.png` cover and image-only gallery.
- Add a **new** `walk-cycle-animation` project (ID 11), visible in **My Work** and the **Character** filter, with the cover image `src/assets/hero/walk cycle image.png`.
- Make the walk-cycle YouTube link `https://youtu.be/YQpVutKlswo` the first media item in the new project's gallery; the correct still image is shown as the second media item.
- Export `walkCycleImage` from `src/assets/hero/index.ts`. The patch includes the existing image asset so it also works if the image is absent from your local checkout.
- No changes to other project entries, layout, components, filters, or animation effects.

## Apply on macOS
From the repository root:

```sh
unzip -o ~/Downloads/enoch-portfolio-walk-cycle-separate-project-fix.zip -d .
git diff --check
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

The video is rendered by the project's existing `ProjectGallery` YouTube URL handler, which already handles `youtu.be` links.

## Verification and limits
Archive integrity, source transformations, project record uniqueness, asset presence, and link handling have been checked against the supplied ZIP. This source archive does not include all Vite/TypeScript configuration files, so a complete build cannot be verified from it alone.
