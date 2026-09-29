Place experience-gallery images or videos here.

Then open src/data/experience.js and set a gallery item's `src`, for example:

src: `${import.meta.env.BASE_URL}assets/experience/test-rig.jpg`

Optionally add caption: 'A short description' to show text when the media is hovered.

For a video, add type: 'video' alongside its source:

{ type: 'video', src: `${import.meta.env.BASE_URL}assets/experience/test-run.mp4` }
