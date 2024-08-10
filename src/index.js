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
  let letter;
  let morseLetter;
  let symbol;
  let morseSymbol;
  let result = "";

  //разбиваем строку на части по 10 символов
  for (let i = 0; i < expr.length; i+=10) {
    let decade = expr.slice(i, i + 10);
    
    //меняем звёздочки на пробел
    if (decade === "**********") {
      letter = " ";
    } else {
      morseLetter = "";

      //строки с десятью символами делим на строки по два символа
      for (let j = 0; j < expr.length; j+=2) {
        symbol = decade.slice(j, j + 2);
        
        //преобразовываем 11 в тире
        morseSymbol = "";
        if (symbol === "11") {
          morseSymbol = "-";
        }

        //преобразовываем 10 в точку
        if (symbol === "10") {
          morseSymbol = ".";
        }

        //получаем из точек и тире букву в азбуке Морзе
        morseLetter = morseLetter + morseSymbol;
      }

      //преобразуем в латинские буквы
      for (let key in MORSE_TABLE) {
        if (key === morseLetter) {
          letter = MORSE_TABLE[key];
        }
      }
    }

    //собираем строку из латинских букв
    result = result + letter;
  }
  
  return result;
}

module.exports = {
    decode
}