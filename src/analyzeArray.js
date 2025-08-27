function analyzeArray(arr) {


    arr.forEach((element) => {
        if (typeof element !== 'number') {
            throw new Error('All elements in array must be a number!')
        }
    });

    const length = arr.length;
    const totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = (totalSum / length);
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);

    return {
        average: average,
        min: minVal,
        max: maxVal,
        length: length
    }
}

module.exports = analyzeArray;