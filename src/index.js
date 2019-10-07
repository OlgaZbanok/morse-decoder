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


function decode(expr) {
    let output='';
    let morseletter='';
    let code = {
        '10':'.',
        '11': '-',
        '00': '',
    };
    let numsymb = expr.match(/.{10}/g); 
    for (let s of numsymb) {
        morseletter='';
        if (s.match(/\*{10}/g)){
            output +=' ';
            continue;
        }
        let codesymb = s.match(/.{2}/g);
        for (let c of codesymb) {
            morseletter += code[c];
        }
            output += MORSE_TABLE[morseletter];
    }
    return output;
}

module.exports = {
    decode
}