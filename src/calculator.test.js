const calculator = require('./calculator')

test('Add numbers', () => {
    expect(calculator.add(2.5,3)).toBe(5.5);
})

test('Add strings', () => {
    expect(() => calculator.add('2', '3')).toThrow(Error);
})

test('Subtract numbers', () => {
    expect(calculator.subtract(1,100)).toBe(-99)
})

test('Substract strings', () => {
    expect(() => calculator.subtract('2', '3')).toThrow(Error);
})

test('Multiply numbers', () => {
    expect(calculator.multiply(-140, 30)).toBe(-4200)
})

test('Multiply strings', () => {
    expect(() => calculator.multiply('-2', '3')).toThrow(Error);
})

test('Divide numbers', () => {
    expect(calculator.divide(-3, 2)).toBe(-1.5)
})

test('Divide strings', () => {
    expect(() => calculator.divide('-2', '3')).toThrow(Error);
})