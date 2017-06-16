"use strict";

const power = function (base, exponent) {
  let result = 1;
  for(let i=0; i<exponent; i++){
    result = result * base;
  }
  return result;
}

// console.log(power(2,3));
// console.log(power(3,2));
// console.log(power(5,5));
// console.log(power(3,4));
// console.log(power(10,3));

const powerR = function(base, exponent){
  if (exponent == 1)
    return base;
  else
    return base * powerR(base, exponent -1);
}

// console.log(powerR(2,3));
// console.log(powerR(3,2));
// console.log(powerR(5,5));
// console.log(powerR(3,4));
// console.log(powerR(10,3));

console.log(power(2,3) == powerR(2,3));

const isEven = function(n){
  if (n < 0) n = n*-1;

  if (n == 0){
    return true;
  } else if (n == 1){
    return false;
  } else {
    return isEven(n -2);
  }
}

console.log(isEven(1224));
console.log(isEven(-33));

const countChars = function(s, charToCount, count){
  if (count == undefined) count = 0;
  if (s == "") return count;
  let arr = s.split("");
  let char = arr.shift();
  if (char==charToCount) count = count + 1;
  return countChars(arr.join(""), charToCount, count);
}

const countBs = function (s) {
  return countChars(s,"B",0);
}

console.log(countBs("BBC"));
console.log(countChars("BBC","B", 0));
