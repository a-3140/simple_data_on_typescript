import double from '../double'

test("Test for doubles's values", () => {
    expect(double(2)).toBe(4);
    expect(double(4.5)).toBe(9);
});