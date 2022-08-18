export type vNode = {
    tagName: string;
    children: vNode[] | string;
    style?: any;
}


export type LineBorder = 'none' | 'x' | 'y';
export type Direction = 'top' | 'right' | 'bottom' | 'left';
export type PlaceholderType = 'selected' | 'target';