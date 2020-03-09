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

const WHITESPACE_CODE = '**********';

function decode(expr) {
   let wordsCode = expr.split(WHITESPACE_CODE);
   let words = [];

   wordsCode.forEach(element => {        
        let codedWords = element.match(/.{1,10}/g);
        
        codedWords.forEach(codedLetter => {
            let morseRes = ''; 
            let searchLetters = codedLetter.match(/.{1,2}/g);

            searchLetters.forEach(sig => {
               if(sig === '10'){
                   morseRes += '.';
               }
               else if(sig === '11') {
                   morseRes += '-';
               }
            });
            
            let morseLetter = Object.keys(MORSE_TABLE).find(o => o === morseRes);
            let letter = MORSE_TABLE[morseLetter];
            if(letter) words += letter;

        });
        words+=" ";
   });
    
   return words.trim();  

}

module.exports = {
    decode
}