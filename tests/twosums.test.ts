import twoSums from '../twosum'

test("Test for twosum's values", () => {
    console.log('final value', twoSums([1, 2, 3], 5));
    expect(twoSums([1, 2, 3], 5)).toEqual([1, 2]);
    expect(twoSums([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSums([3, 3], 6)).toEqual([0, 1]);
});