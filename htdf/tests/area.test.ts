import { square } from '../area'

test("Test for doubles's values", () => {
    expect(square(2)).toBe(4);
    expect(square(5.0)).toBe(25);
    expect(square(5.5)).toBe(30.25);
});