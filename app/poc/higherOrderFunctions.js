function one() {

}

function two() {
  console.log(this);
  console.log("Args : ", arguments, this.age);
}

two("Nadir","İstanbul");
two.apply(undefined, ["Olcay","Birmingham"]);

two.apply({age : 35}, ["Nazan","Ankara"]);

two.apply({age : 46}, ["Atilla", "Girona"]);
