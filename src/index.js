module.exports = function toReadable (num) {
    let res = hundreds = tens = units = '';

    const numToWord = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    if(num == '') return 'zero';


    if(num >= 100) {
        hundreds = numToWord[Math.floor(num / 100)] + ' hundred';
        num = num % 100;
    }

    if(numToWord[num]) {
        res = (hundreds + ' ' + numToWord[num]).trim();
    } else {
        if(num == 0) {
            return hundreds;
        } else {
            tens = numToWord[Math.floor(num / 10) * 10];
            units = numToWord[num % 10];
            res = hundreds + ' ' + tens + ' ' + units;
        }
    }
    return res.trim();
}
