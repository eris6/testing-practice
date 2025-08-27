function caesarCipher(str, shift) {

    if (typeof str !== 'string' || !Number.isInteger(shift)) {
        throw new Error('Invalid input!')
    }

    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'a' && char <= 'z') {
            let charCode = char.charCodeAt(0);
            let shiftedCharCode = ((charCode - 'a'.charCodeAt(0) + shift) % 26);
            if (shiftedCharCode < 0) {
                shiftedCharCode += 26;
            }
            result += String.fromCharCode(shiftedCharCode + 'a'.charCodeAt(0));
        }

        else if (char >= 'A' && char <= 'Z') {
            let charCode = char.charCodeAt(0);
            let shiftedCharCode = ((charCode - 'A'.charCodeAt(0) + shift) % 26);
            if (shiftedCharCode < 0) {
                shiftedCharCode += 26;
            }
            result += String.fromCharCode(shiftedCharCode + 'A'.charCodeAt(0));
        }

        else {
            result += char;
        }

    }
    return result;
}

module.exports = caesarCipher;