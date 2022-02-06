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
    let a = expr
    console.log(a)
    let b = ''
    let arrBool = []
    let arrMors = []
    let resLet = ''
    let resStr =''
    // разделяем строку на элементы из 10символов
    for(let i = 0; i < a.length; i++){
            b += a[i]
        if (b.length == 10){
            arrBool.push(b)
            b = ''
        }                    
        
    }
    console.log(arrBool)
    // переводим 0 и 1 в азбуку морзе  
    for(let i = 0; i < arrBool.length; i++) {
        if(arrBool[i] == '**********'){
            arrMors.push(' ')
        }
        for(let j = 0; j < 10; j++){
                b += arrBool[i][j]
            if(b.length == 2 && b == 10) {
                resLet += '.'
                b = ''
            }  
            if(b.length == 2 && b == 11){
                resLet += '-'
                b = ''
            }
            if (b.length == 2 && b !==10 && b !== 11){
                b =''
            }
        }
            
        arrMors.push(resLet)
        resLet =''
    } 
    console.log(arrMors)
    // азбуку Морзе переводим в буквы
    for(let i = 0; i < arrMors.length; i++){
        if (arrMors[i] == ' '){
            resStr += ' '
        }
        for ( key in MORSE_TABLE) {
            if (arrMors[i] == [key]) {
                resStr += MORSE_TABLE[key]                
            }
        }
    }
    console.log(resStr)
    return resStr
    // write your solution here
}

module.exports = {
    decode
}