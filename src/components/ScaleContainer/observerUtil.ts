export type ResizeListener = (element: HTMLDivElement) => void;

// vue
const elementListeners = new Map<HTMLDivElement, Set<ResizeListener>>();

const ro = new ResizeObserver((entries, observer) => {
  for (const entry of entries) {
    // 发生尺寸变化的回调,执行observer 函数的第二个参数 callback
    const listeners = elementListeners.get(entry.target as HTMLDivElement);
    if (listeners) {
      listeners.forEach((listener) => listener(entry.target as HTMLDivElement));
    }
  }
});

export function observer(element: HTMLDivElement, callback: ResizeListener) {
  if (!element) {
    return false;
  }
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    ro.observe(element);
  }
  elementListeners.get(element)?.add(callback);
  // 开始监听
}

export function unobserver(
  element: HTMLDivElement | null,
  callback: ResizeListener
) {
  if (!element) {
    return false;
  }
  if (elementListeners.has(element)) {
    elementListeners.get(element)?.delete(callback);
    if (!elementListeners.get(element)?.size) {
      // 组件注销的情况,如果是改变disabled的情况,
      ro.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
