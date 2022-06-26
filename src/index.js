module.exports = function toReadable (number) {
    const numberOnesArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numberTensArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    const numberString = number.toString();
    let result = '';

    if (number === 0) {
        result = `${'zero'}`
    } else if (number < 20) {
        result = `${result }${numberOnesArray[number]}`;
    } else if (20 <= number && number < 100) {
        result = `${result}${numberTensArray[numberString[0]]} ${numberOnesArray[numberString.at([-1])]}`;
    } else if (100 <= number && number <1000) {
        if (numberString.at([-2]) < 1) {
            result = `${result}${numberOnesArray[numberString[0]]} ${hundred} ${numberOnesArray[numberString.slice(-1)]}`;
        } else if (numberString.at([-2]) < 2) {
            result = `${result}${numberOnesArray[numberString[0]]} ${hundred} ${numberOnesArray[numberString.slice(1)]}`;
        } else {
            result = `${result}${numberOnesArray[numberString[0]]} ${hundred} ${numberTensArray[numberString.at([-2])]} ${numberOnesArray[numberString.at([-1])]}`;
        }
    }
    
    return result.trim();

    // I know it's so so...

    /*
    if (number < 20) {
        result.push(numberOnesArray[number]);
    } else if (20 <= number && number < 100) {
        result.push(numberTensArray[numberString[0]], numberOnesArray[numberString[1]]);
    } else if (100 <= number && number <1000) {
        result.push(numberOnesArray[numberString[0]], hundred, numberTensArray[numberString[1]], numberOnesArray[numberString[2]])
    }

    for (let i = 0; i < numberString.length; i++) {
        result.push(numberArray[numberString[i]])
    }
    */
}
