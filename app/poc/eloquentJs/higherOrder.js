"use strict";

console.log("higherOrder.js started!");

const forEach = function(arr, action){
  for(let i = 0; i < arr.length; i++){
    action(arr[i]);
  }
}

const names = ["Ahmet","Mehmet","Süreyya","Ayşe", "Fatma"];
const numbers = [1,2,3,4,5];

// forEach(names, console.log);

let total = 0;
forEach(numbers, function(number){
  total += number;
});

console.log(total);

function greaterThan(n){
  return function (m) {
    return m > n;
  }
}

const greaterThan5 = greaterThan(5);
// console.log(greaterThan5(4));
// console.log(greaterThan5(5));
// console.log(greaterThan5(6));

const greaterThan20 = greaterThan(20);
// console.log(greaterThan20(3));
// console.log(greaterThan20(20));
// console.log(greaterThan20(30));

const unless = function (test, then) { // test false değeri ürettiğinde çalıştır.
  if (!test) then();
}

const oldmadikcaTest = function (deger) {
  console.log("Olmadıkça! => " + deger);
}

const youShouldComeToWork = function () {
  console.log("İşe gelmelisin");
}

unless(true, oldmadikcaTest.bind(null, true));
unless(false, oldmadikcaTest.bind(null, false));

let youAreSick = true;
unless(youAreSick, youShouldComeToWork);

youAreSick = false;
unless(youAreSick, youShouldComeToWork);

var ANCESTRY = [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
];

console.log(ANCESTRY.length);

const filter = function (arr, test) {
  let newArr = [];
  for (let i=0; i<arr.length; i++){
    if ( test(arr[i]) ) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const map = function (arr, transform) {
  let newArr=[];
  for (let i=0; i<arr.length;i++){
    newArr.push(transform(arr[i]));
  }
  return newArr;
}

console.log(filter(ANCESTRY, function (person) {
  return person.born > 1900 && person.born < 1925 ;
}));

console.log(ANCESTRY.filter(function (person) {
  return person.father == "Carel Haverbeke";
}));

console.log(map(ANCESTRY.filter(person => person.died - person.born > 90), person => person.name));
// console.log(ANCESTRY.filter(person => person.died - person.born > 90).map(person => person.name));

console.log([100, 1, 2, 3, 4, 5].reduce ((sum, cur) => sum - cur));
console.log("En erken doğumlu kişi : ", ANCESTRY.reduce( (min, cur)=> cur.born < min.born ? cur : min));

// keyleri isimlerden oluşan bir nesne oluştur.
// console.log(ANCESTRY.reduce(function (cur, person) {
//   cur[person.name] = person;
//   return cur;
// }, {} ));

const yillaraGoreDagilim = ANCESTRY.reduce(function (cur, person) {
  if (cur[person.born]){
    cur[person.born] += 1;
  } else {
    cur[person.born] = 1;
  }
  return cur;
}, {});

console.log(yillaraGoreDagilim);

const cocukSayisiDagilimi = ANCESTRY.reduce(function (cur, person) {
    if (cur[person.father]){
      if (person.sex == "m"){
        if (cur[person.father].male){
          cur[person.father].male += 1;
        } else {
          cur[person.father].male = 1;
        }
      } else {
        if (cur[person.father].female){
          cur[person.father].female += 1;
        } else {
          cur[person.father].female = 1;
        }
      }
    } else {
      cur[person.father] = {};
      if (person.sex == "m"){
          cur[person.father].male = 1;
      } else {
        cur[person.father].female = 1;
      }
    }
    return cur;
}, {});

console.log(cocukSayisiDagilimi);

console.log(ANCESTRY.filter(person => person.father == undefined));

const flattenArrays = function (arr) {
  return arr.reduce(function (newArr, curArr) {
    newArr = newArr.concat(curArr);
    return newArr;
  });
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattenArrays(arrays));

const byName = ANCESTRY.reduce(function (cur, person) {
  cur[person.name] = person;
  return cur;
}, {} );

const ageDifference = function (person) {
  let mother = byName[person.mother];
  if (mother){
    return Math.abs((mother.died - mother.born) - (person.died - person.born));
  } else {
    return 0;
  }

}

console.log(byName);

const ortalamaYasFarki = function () {
  return ANCESTRY.filter(person => person.mother != null && byName[person.mother])
                 .map(function (person) {
                   return ageDifference(person);
                 })
                 .reduce((avg, currDiff, idx, arr)=> {
                   avg = avg + currDiff / arr.length;
                   return avg;
                 })
}

console.log(ortalamaYasFarki());
