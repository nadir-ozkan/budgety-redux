"use strict";

const range = function (start, end) {
  let arr = [];
  for(let i = start; i <= end; i++){
    arr.push(i);
  }
  return arr;
}
const sum = function (range) {
  return range.reduce((currentTotal,nextNumber)=>{return currentTotal + nextNumber},0);
}

const reverseArray = function (arr) {
  return arr.reduce((currentArray, nextItem)=>{
    currentArray.unshift(nextItem);
    return currentArray;
  },[]);
}
const reverseArrayInPlace = function (arr) {
  var newArr = arr.slice(0);
  for (let i=0; i<arr.length; i++){
    arr[arr.length-i-1] = newArr[i];
  }
  return arr;
}

// console.log(sum(range(1,1000)));
// console.log(reverseArray([1,2,3,4,5]));
// var arr = ["a","b","c","d"];
// console.log(reverseArrayInPlace(arr));

const node = function(value, rest){
  return {value : value, rest : rest};
}
const emptyNode = function(){
  return node(undefined,null);
}

// creates a list from an array top to bottom
const arrayToList = function(arr){
  var list = emptyNode();
  var temp;

  arr.forEach((item, idx, arr) => {
    let isLastItem = (idx == arr.length - 1);
    if (idx == 0){
      list.value = item;
      list.rest = emptyNode();
      temp = list.rest;
    } else {
      temp.value = item;
      if (!isLastItem){
        temp.rest = emptyNode();
        temp = temp.rest;
      } else {
        temp.rest = null;
      }
    }
  });

  return list;
}

const nth = function (list, n) {

  if (n===0){
    return list.value;
  } else {
    let temp = list;
    for(let i=0; i<n; i++){
      temp = temp.rest;
    }
    return temp.value;
  }

}

const nthRecursive = function (list, n) {
  if (n === 0){
    return list.value
  } else {
    list = list.rest; // geri kalanı listenin kendisi olarak al!
    return nthRecursive(list, n-1)
  }
}

var list = arrayToList([0,1,2,3]);
console.log(JSON.stringify(list));

const prepend = function (value, list) {
  return {value : value, rest : list ? list : null};
}

// creates a list from array bottom to top, this solution is better!
const arrayToListReverseOrder = function (arr) {
  let list = null;
  for(let i=arr.length-1; i>=0; i--){
    list = {value : arr[i], rest : list};
  }
  return list;
}

const arrayToListWithPrepend = function (arr) {
  let list;
  for(let i=arr.length-1; i>=0; i--){
    list = prepend(arr[i], list);
  }
  return list;
}

// gives the nth value of list
const nthFor = function(list, n){
  let i = 0;
  for (var node = list; node; node = node.rest) {
    if (i == n) break;
    i++;
  }
  return node ? node.value : null;
}

const listToArray = function (list) {
  let arr = [];
  for (let node = list; node; node = node.rest){
    arr.push(node.value);
  }
  return arr;
}

const list2 = arrayToListReverseOrder([0,1,2,3]);
console.log(JSON.stringify(list2));
const list3 = arrayToListWithPrepend([0,1,2,3]);
console.log(JSON.stringify(list3));
console.log(listToArray(list2));

console.log(nth(list, 0), nthFor(list, 0), nthRecursive(list,0));
console.log(nth(list, 1), nthFor(list, 1), nthRecursive(list,1));
console.log(nth(list, 2), nthFor(list, 2), nthRecursive(list,2));
console.log(nth(list, 3), nthFor(list, 3), nthRecursive(list,3));


const deepEqual = function (val1, val2) {

  const isObject = function (val) {
    return typeof val == "object" && val != null;
  }

  if (!isObject(val1) && !isObject(val2)) { // her ikisi de primitive değerler
    return val1 === val2;
  } else {
    if (isObject(val1) && isObject(val2)){
      if (Object.keys(val1).length !== Object.keys(val2).length){
        return false;
      } else {

      }
    } else {
      return false;
    }
  }

}
