function reverseString(str) {
    
    if (typeof str !== 'string') {
        return str;
    }

    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed;
}

module.exports = reverseString;