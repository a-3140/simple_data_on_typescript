/*
    * Problem: Design a function that pluralizes a given word.
    * (Pluralize means to convert the word to its plural form.)
    * For simplicity you may assume that just adding s is enough to pluralize a word.
*/

// Signature
// * String: String

// Purpose
// * Returns the given string with an added 's' at the end.

// Stub
// export default function pluralize(word: string): string { return 'words' }

// Tests -> see pluralize.test.ts

// Template
/*
* export default function pluralize(word: string): string {
*   return 'words' * Do something
* }
*/

export default function pluralize(word: string): string {
    // * + is faster instead of concat
    return word + 's';
}