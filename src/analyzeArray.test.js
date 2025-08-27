const analyzeArray = require('./analyzeArray');

test('Example array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
})
})

test('Not all numbers', () => {
    expect(() => analyzeArray([1,8,'a',4,2,6])).toThrow(Error)
})

test('Single array', () => {
    expect(analyzeArray([0])).toEqual({
   average: 0,
   min: 0,
   max: 0,
   length: 1
})
})