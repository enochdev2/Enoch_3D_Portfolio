# Character Rigging & Walk Cycle — targeted patch

## Changes
- Updates the existing `Low-Poly Human` project rather than duplicating the character image or introducing another project card.
- Renames the display title to `Character Rigging & Walk Cycle`.
- Reuses the existing `Human.png` T-pose image for both the project cover and image gallery.
- Includes the supplied walk-cycle YouTube video (`https://youtu.be/YQpVutKlswo`) beside the character image in the project gallery.
- Updates the project description, overview and tags to describe the modeling/animation work.
- Preserves the project `id` (1), slug (`low-poly-human`) and Character category, so existing links and filters continue to work.

## Apply on macOS
From the root of your current portfolio project:

```bash
unzip -o ~/Downloads/enoch-portfolio-walk-cycle-patch.zip -d .
```

Then run:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Open the **Character Rigging & Walk Cycle** project in your portfolio to see the T-pose image and embedded video. The original video URL uses `youtu.be`; the existing gallery code supports this format and converts it to a YouTube privacy-enhanced embed.

## Verification
- Targeted source replacement: verified exactly once.
- Existing `Human.png` asset reference: verified in the uploaded ZIP.
- Existing `youtu.be` URL support: verified in the uploaded source.
- Other four existing YouTube video IDs: retained.
- ZIP integrity and TypeScript syntax: checked.
- Full project build and browser playback: **not verified** because the uploaded archive does not contain the complete Vite/TypeScript config and runtime environment.

Note: The still image is an existing character asset from this ZIP; correspondence to the model featured in the YouTube video could not be independently verified.
