const unitaries = {
    0: "",
    1: I,
    2: II,
    3: III,
    4: IV,
    5: V,
    6: VI,
    7: VII,
    8: VIII,
    9: IX,
    
    
};
const elevenToNineteen = {
    0: "",
    11: XI,
    12: XII,
    13: XIII,
    14: XIV,
    15: XV,
    16: XVI,
    17: XVII,
    18: XVIII,
    19: XIX,
};
const dozens = {
    0: "",
    1: X,
    2: XX,
    3: XXX,
    4: XL,
    5: L,
    6: LX,
    7: LXX,
    8: LXXX,
    9: XC,
};
const hundreds = {
    0: "",
    1: C,
    2: CC,
    3: CCC,
    4: CD,
    5: D,
    6: DC,
    7: DCC,
    8: DCC,
    9: CM,
}
const milions = {
    1: M,
    2: MM,
    3: MMM,
}

function intToRoman(num){
  if (num === 0){
    return "zero";
  }
  return  returnsFullHundred(num);
}

function returnsFullHundred(num){
  return returnsHundreds(num) + returnsDozens(num);
}

function returnsHundreds(num){
  let hundred = parseInt(num % 1000 / 100);
  let dozen = num % 100;

  
  
  if ((num % 100) === 0 && hundred === 1){
    return  hundreds;
  }
  
  if ((dozen === 0) || (num < 100)){
    return dozens;
  }
  return  hundreds[hundred];
}





function returnsDozens(num){
  let number = num % 100;
  let unitary = number % 10;
  let dozen = parseInt(number % 100 / 10);

  if (number >= 1 && number <= 9){
    return unitaries[number];
  }

  if (number >= 11 && number <= 19){
    return elevenToNineteen[number];
  } 
  
  return dozens[dozen]  + unitaries[unitary];  
}