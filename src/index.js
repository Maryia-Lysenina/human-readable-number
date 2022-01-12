let objectNumber = {
    0: 'zero',
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
    90: 'ninety',
    100: 'hundred',
  }
module.exports = function toReadable (number) {
    if (number <= 20){
        return objectNumber[number];
      }
      if (number > 20 && number < 100 && String(number)[1] != 0 && String(number)[2] != 0) {
        number = number.toString();
        let result = objectNumber[number[0] * 10] + ' ' + objectNumber[number[1]];
        return result;
      }
      if (String(number)[1] == 0 && number <100){
        return objectNumber[number];
      }
      if (number > 100 && String(number)[1] != 0 && String(number)[2] != 0) {
        if (Object.keys(objectNumber).includes(String(number).slice(1))){
          number = number.toString();
          return objectNumber[number[0]] + ' ' + 'hundred' + ' ' + objectNumber[String(number).slice(1)]
        };
        number = number.toString();
        let result = objectNumber[number[0]] + ' ' + 'hundred' + ' ' + objectNumber[number[1] * 10] + ' ' + objectNumber[number[2]];
        return result;
      }
      if (number > 100 && String(number)[2] == 0 && String(number)[1] != 0 ){
        number = number.toString();
        let result = objectNumber[number[0]] + ' ' + 'hundred' + ' ' + objectNumber[number[1] * 10] 
        return result;
      }
      if (number > 100 && String(number)[1] == 0 && String(number)[2] != 0){
        number = number.toString();
        let result = objectNumber[number[0]] + ' ' + 'hundred' + ' ' + objectNumber[number[2]];
        return result;
      }
      if (number > 100 && String(number)[1] == 0 && String(number)[2] == 0 ){
        number = number.toString();
        let result = objectNumber[number[0]] + ' ' + 'hundred';
        return result;
      }
      if (number == 100 ) {
        return ('one' +' ' + objectNumber['100']);
      }
}
