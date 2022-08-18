import showNotify from "./notify";
import { clearBox, createBox } from "./box";

let active: boolean = false;
let hoveringElement: HTMLElement | null = null;
let selectedElement: HTMLElement | null;
let boxElement: HTMLElement | null = null;



const select = {
    start() {
        if (!document.body) {
            showNotify('Unable to initialise, document.body does not exist.', 'danger');
            return;
        }
        showNotify('extension start', 'success');
        window.addEventListener('keydown', keyDownHandler);
        window.addEventListener('keyup', keyUpHandler);
        window.addEventListener('mousemove', cursorMovedHandler);
    }
}

function keyDownHandler(e: KeyboardEvent) {
    if (e.key === 'Alt' && !active) {
        e.preventDefault();
        active = true;
        setSelectedElement();
    }

    if (e.code === 'KeyP' && e.altKey && active) {
        e.preventDefault();
        if (boxElement) {
            clearBox(boxElement);
        }
        if (selectedElement?.tagName === 'VIDEO') {
            let video = selectedElement as HTMLVideoElement;
            video.requestPictureInPicture();
            selectedElement = null;
            active = false;
            showNotify('Video is in Picture-in-Picture mode', 'success');
        } else {
            showNotify('Only video can be in Picture-in-Picture mode', 'danger');
        }
    }
}

function keyUpHandler(e: KeyboardEvent) {
    if (e.key === 'Alt' && active) {
        active = false;
        setTimeout(() => {
            if (boxElement) {
                clearBox(boxElement);
            }
        })
        selectedElement = null;
    }
}



function cursorMovedHandler(e: MouseEvent) {
    if (e.composedPath) {
        // Use composedPath to detect the hovering element for supporting shadow DOM
        hoveringElement = e.composedPath()[0] as HTMLElement;
    } else {
        // Fallback if not support composedPath
        hoveringElement = e.target as HTMLElement;
    }
    if (!active) return;
    setSelectedElement()
}

function setSelectedElement(): void {
    if (hoveringElement && hoveringElement !== selectedElement) {
        selectedElement = hoveringElement;
        if (boxElement) {
            clearBox(boxElement);
        }

        let rect = selectedElement.getBoundingClientRect();
        boxElement = createBox(rect.width, rect.height, rect.top, rect.left, selectedElement.tagName);
    }
}


export default select