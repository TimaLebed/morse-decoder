const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {
    let value = '';
    let result = '';
    let sum = 0;
    let isSpace = false;

    for (let i = 0; i <= str.length; i = i + 2){
        if (sum == 10 ) {
            if (isSpace == false) {
                value += '' + MORSE_TABLE[result];
                result = '';   
            }

            sum = 0;
        }

        if (str[i] == 1) {
            if (str[i + 1] == '1') {
                result += '-';
                isSpace = false
            } else if (str[i + 1] == '0') {
                result += '.';
                isSpace = false
            }
        }

        if (str[i] == '*') {
            if (isSpace == false) {
                value += ' ';
                isSpace = true;
            } 
        }

        sum += 2;
    }

    return value;
}

module.exports = {
    decode
}