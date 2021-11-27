import checkLessThanFive from '../less_than_five'

test("Test if the string are less than five", () => {

    const word_list = [
        {
            word: 'more than five with space',
            expected: false
        },
        {
            word: 'moreThanFiveWithoutSpace',
            expected: false
        },
        {
            word: '',
            expected: true
        },
        {
            word: 'four',
            expected: true
        },
    ]
    word_list.map(word => {
        expect(checkLessThanFive(word.word)).toBe(word.expected);
    })
});