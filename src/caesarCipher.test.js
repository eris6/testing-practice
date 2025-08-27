const caesarCipher = require('./caesarCipher');

test('Not a string', () => {
    expect(() => caesarCipher(42, 3)).toThrow(Error);
})

test('Not a shift', () => {
    expect(() => caesarCipher('xyz', 3.5)).toThrow(Error);
})

test('Basic string', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('Negative string', () => {
    expect(caesarCipher('xyz', -3)).toBe('uvw');
})

test('Case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('Puncatuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})