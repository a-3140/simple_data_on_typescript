
import pluralize from '../pluralize'

test("Test for pluralized words", () => {
    expect(pluralize('word')).toBe('words')
    expect(pluralize('new')).toBe('news')
    expect(pluralize('sand')).toBe('sands')
    expect(pluralize('Title')).toBe('Titles')
    expect(pluralize('fish')).toBe('fishs')
});