// Importing DetachedWindowAPI causes a bunch of tsc error in happy-dom during build
// not sure why but just copying the one method we use for now
interface HappyDOM {
  /**
   * Sets the viewport.
   *
   * @param viewport Viewport.
   */
  setViewport(viewport: IOptionalBrowserPageViewport): void;
}

interface Window {
  happyDOM: HappyDOM;
}
