
function intToRoman(num) {
  let numRoman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

  let result = "";

  for (var i in numRoman) {
    while (num >= numRoman[i]) {
      result += i;
      num -= numRoman[i];
    }
  }
  return result;

}

function romanToInt(str) {
  if (typeof str !== "string") {
    return false;
  }
  let result = 0;


  let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  str = str.toUpperCase();
  for (let i = 0; i <= arabic.length; i++) {
    while (str.indexOf(roman[i]) === 0) {

      result += arabic[i];

      str = str.replace(roman[i], "");

    }
  }
  return result;
}

module.exports = { intToRoman, romanToInt };

