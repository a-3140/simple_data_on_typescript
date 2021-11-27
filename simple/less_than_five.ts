// * Problem
// Check the length of a string if it is less than 5.

// * Signature
// String: Boolean

// * Purpose
// Return a boolean value based on the length of a string.

// * Stub
/*
export default function checkLessThanFive(word: string): boolean {
    return true;
}
*/

// * See tests

// * Code
export default function checkLessThanFive(word: string): boolean {
    return word.length < 5;
}