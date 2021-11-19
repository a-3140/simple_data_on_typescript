import yell from "../yell";

test('Check expects for yell function', () => {
    expect(yell('word')).toEqual('word!')
    expect(yell('test')).toEqual('test!')
    expect(yell('with_punctuation?')).toEqual('with_punctuation?!')
    expect(yell('with space ')).toEqual('with space !')
})
