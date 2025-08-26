const reverseString = require('./reverseString');

test('Reverse string', () => {
    expect(reverseString('abcd123')).toMatch('321dcba');
})

test('Empty string', () => {
    expect(reverseString('')).toMatch('');
})

test('Null', () => {
    expect(reverseString(null)).toBeNull();
})

test('Integer', () => {
    expect(reverseString(12300)).toBe(12300);
})