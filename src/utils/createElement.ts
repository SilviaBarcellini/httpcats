export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props: Partial<HTMLElementTagNameMap[K]> & {
    children?: HTMLElement[];
  }
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  const { children, ...other } = props;
  Object.assign(element, other);
  if (children) {
    element.append(...children);
  }

  return element;
}
