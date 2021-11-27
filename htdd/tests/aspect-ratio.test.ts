import getAspectRatioType, { Rectangle } from "../aspect-ratio";

test('Check rectangle aspect ratio type', () => {
    const rect1 = new Rectangle(20, 20, 'dashed', '#ffffff');
    const rect2 = new Rectangle(10, 20, 'dashed', '#ffffff');
    const rect3 = new Rectangle(20, 10, 'dashed', '#ffffff');

    expect(getAspectRatioType(rect1)).toBe('square')
    expect(getAspectRatioType(rect2)).toBe('tall')
    expect(getAspectRatioType(rect3)).toBe('wide')
})
