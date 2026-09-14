export interface RectBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface RectCache {
  /** Latest cached bounding box of the observed element. */
  readonly current: RectBox;
  /** Stop observing and release listeners. */
  destroy: () => void;
}

const EMPTY_BOX: RectBox = { left: 0, top: 0, width: 0, height: 0 };

export function createRectCache(element: Element): RectCache {
  let box: RectBox = EMPTY_BOX;

  function measure() {
    const rect = element.getBoundingClientRect();
    box = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
  }

  measure();

  const resizeObserver = new ResizeObserver(measure);
  resizeObserver.observe(element);

  window.addEventListener("scroll", measure, { passive: true, capture: true });
  window.addEventListener("resize", measure, { passive: true });

  return {
    get current() {
      return box;
    },
    destroy() {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", measure, { capture: true });
      window.removeEventListener("resize", measure);
    },
  };
}
