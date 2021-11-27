// run with ts-node

export interface Rectangle {
    width: number;
    height: number;
    borderType: BorderType;
    color: string;
}

export class Rectangle {
    constructor(
        width: number, height: number, borderType: BorderType, color: string
    ) {
        this.width = width;
        this.height = height;
        this.borderType = borderType;
        this.color = color;
    }
}

export type BorderType = 'solid' | 'dashed' | 'dotted';

const rect1 = new Rectangle(20, 20, 'dashed', '#ffffff');
const rect2 = new Rectangle(10, 20, 'dashed', '#ffffff');
const rect3 = new Rectangle(20, 10, 'dashed', '#ffffff');

// * Problem
// Check if a rectangle object is either tall, wide or square.

type AspectRatioType = 'tall' | 'wide' | 'square';
// * Signature
// Rectangle: aspectRatioType

// * Purpose
// Return AspectRatioType to a given rectangle object

// * Stub
/*
export default function getAspectRatioType(rectangle: Rectangle): AspectRatioType {
    return 'tall';
}
*/

// * See Tests

// * Code
export default function getAspectRatioType(rectangle: Rectangle): AspectRatioType {
    const width = rectangle.width;
    const height = rectangle.height;
    if (width > height) {

        return 'wide'
    } else if (width < height) {
        return 'tall'
    }
    return 'square'
}