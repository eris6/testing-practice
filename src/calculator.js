const calculator = {

    validateNumbers(a, b){
        if (typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('Must be a number!')
        }
    },

    add(a, b){
        this.validateNumbers(a, b);
        return a + b;
    },

    subtract(a, b){
        this.validateNumbers(a, b);
        return a - b;
    },

    multiply(a, b){
        this.validateNumbers(a, b);
        return a * b;
    },

    divide(a, b){
        this.validateNumbers(a, b);
        return a / b;
    }


}

module.exports = calculator;