import { vNode } from './type';
import render from './render';

export function createBox(w: number, h: number, top: number, left: number, tagName: string) {
    let color = tagName.toLocaleUpperCase() === 'VIDEO' ? 'green' : 'red';
    let box: vNode = {
        tagName: 'div',
        style: {
            border: `2px solid ${color}`,
            position: 'fixed',
            background: 'none',
            borderRadius: '2px',
            padding: '0',
            margin: '0',
            width: `${w - 2}px`,
            height: `${h - 2}px`,
            top: `${top - 1}px`,
            left: `${left - 1}px`,
            pointerEvents: 'none',
            zIndex: '9999',
            boxSizing: 'content-box'
        },
        children: [
            {
                tagName: 'span',
                style: {
                    background: color,
                    position: 'fixed',
                    display: 'inline-block',
                    color: '#fff',
                    padding: '2px 4px',
                    fontSize: '10px',
                    transform: top < 20 ? '' : 'translateY(calc(-100% + 2px))',
                    top: `${top < 0 ? -1 : top - 1}px`,
                    left: `${left - 1}px`
                },
                children: tagName
            }
        ]
    }
    return render(document.body, box);
}

export function clearBox(box: HTMLElement) {
    box.remove();
}