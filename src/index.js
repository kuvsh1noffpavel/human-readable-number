module.exports = function toReadable (number) {
  let answers = {
    0 : 'zero',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety',
    100 : 'one hundred',
    200 : 'two hundred',
    300 : 'three hundred',
    400 : 'four hundred',
    500 : 'five hundred',
    600 : 'six hundred',
    700 : 'seven hundred',
    800 : 'eight hundred',
    900 : 'nine hundred',
  }

  let memoryNumber = number;
  let result = '';

  if (memoryNumber in answers){

    result = answers[memoryNumber];
    return result;

  } else {

    let memoryNum = +(String(memoryNumber).slice(0,1)) * +(String(10**(String(memoryNumber).length-1)));
    result = answers[memoryNum];
    memoryNumber = +(String(memoryNumber).substr(1));
      
    if (memoryNumber in answers) {

      result = result + ' ' + answers[memoryNumber];
      return result;
          
    } else {

      memoryNum = +(String(memoryNumber).slice(0,1)) * +(String(10**(String(memoryNumber).length-1)));
      result = result + ' ' + answers[memoryNum];
      memoryNumber = +(String(memoryNumber).substr(1));
          
    } 
      
  result = result + ' ' + answers[memoryNumber];
  return result;

  }

}
