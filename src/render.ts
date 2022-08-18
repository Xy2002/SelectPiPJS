import { vNode } from "./type";


export default function render(root: HTMLElement, obj: vNode) {
    const el = document.createElement(obj.tagName);
    for (const key in obj.style) {
        el.style[key] = obj.style[key];
    }
    if (typeof obj.children === 'string') {
        const text = document.createTextNode(obj.children);
        el.appendChild(text)
    } else if (obj.children) {
        obj.children.forEach(child => {
            render(el, child);
        })
    }
    root.appendChild(el);
    return el
}
