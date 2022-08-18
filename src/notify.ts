import render from './render'
import { vNode } from './type'
type notifyType = 'success' | 'danger';

function showNotify(message: string, type: notifyType, duration: number = 3000): void {
    const notifyNode: vNode = {
        tagName: 'div',
        children: [
            {
                tagName: 'p',
                children: message,
                style: {
                    margin: '10px',
                }
            }
        ],
        style: {
            position: 'fixed',
            top: '10vh',
            left: '50vw',
            textAlign: 'center',
            transform: 'translateX(-50%)',
            zIndex: '9999',
        }
    }
    switch (type) {
        case 'danger':
            notifyNode.style!.background = 'red';
            notifyNode.style!.color = 'white';
            break;
        case 'success':
            notifyNode.style!.background = 'green';
            notifyNode.style!.color = 'white';
            break;
    };
    let node = render(document.body, notifyNode);

    setTimeout(() => {
        node.remove();
    }, duration)

}

export default showNotify