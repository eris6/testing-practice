const capitalize = require('./capitalize');

test('Lower-case string', () => {
    expect(capitalize('hello world')).toMatch(/Hello world/);
})


test('Upper-case string', () => {
    expect(capitalize('Hello world')).toMatch(/Hello world/);
})


test('Integer', () => {
    expect(capitalize(123456789)).toBe(123456789);
})

test('Integer string', () => {
    expect(capitalize('123456789')).toMatch('123456789');
})


test('Empty string', () => {
    expect(capitalize('')).toMatch('');
})