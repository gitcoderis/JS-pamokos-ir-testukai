"user strict";


// 1 uzduotis ----------------------------------

let skaiciuokle = {
  read() {
    this.sk1 = parseInt(prompt("Sk1"));
    this.sk2 = parseInt(prompt("Sk2"));
   },
   sum() {
     // this.read();
     return parseInt(this.sk1) + parseInt(this.sk2);
   },
   mul() {
     // this.read();
     return this.sk1 * this.sk2;
    }
};

skaiciuokle.read();
// console.log(skaiciuokle.read().skaiciuokle.mul());
console.log("sum: " + skaiciuokle.sum());
console.log("mult: " + skaiciuokle.mul());


// 2 uzduotis ----------------------------------

let countZings = {
  steps: 0,
  up() { this.steps++ },
  down() { this.steps-- },
};

console.log(countZings.steps);

countZings.up();
console.log(countZings.steps);
countZings.down();
countZings.down();
console.log(countZings.steps);
