/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

// Signature
// Array, number: Array

// Purpose
// Returns an array of length 2. These numbers are indices of the initial array which when values are added is equal to the target

// Stub: Dummy function with correct parameter type and produces dummy result with the correct type
// export default function twoSums(num_list: number[], target: number): number[] { return [0, 1] };

// See test case

// Template: outline of the function
/*
export default function twoSums(num_list: number[], target: number): number[] {
    ...number, // do something
    ...target // do something
    check all array combinations and return their indices if their value is equal to target
};
*/
function mapIndexToElement(a: number[]) {
    return a.map((element, index) => [index, element]);
}


export default function twoSums(numArray: number[], target: number): number[] {
    for (const [index, value] of mapIndexToElement(numArray)) {
        const nextArray = numArray.slice(index + 1);
        for (const [nextIdx, nextVal] of mapIndexToElement(nextArray)) {
            if ((value + nextVal) === target) {
                return [index, nextIdx + index + 1]
            }
        }
    }
    return [0, 1]
};