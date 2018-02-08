"user strict";

let user = {};
user.name = "john";
console.log(user.name);

user.surname = "pavarde";
user.name = "pete";
console.log(user.name);

delete user.name;
console.log(user.name);

// ---------------------------------------//

// 2 uzduotis
console.log('-------------');
let schedule = {};
schedule.name = "hello";

// function isEmpty(obj) {
//    for (let x in obj) { return console.log(false); }
//    return console.log(true);
// }

let isEmpty = (obj) => {
  for(let x in obj) { return console.log(false) }
  return console.log(true);
};

// let isEmpty = (obj) => for(let key in object) { console.log(false);
//
// }


// let isEmpty = (obj) => console.log(obj.hasOwnProperty());
isEmpty(schedule);


//------------------------------------//

//3 uzduotys

let salaries = {
  john: 100,
  ann: 160,
  pete: 130
};




let salary = 0;

for(let key in salaries) {
  salary += salaries[key];
}
console.log(salary);



//----------------------------------------//

//4 uzduotis: skaicius turi padauginti is 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


let multiplyNumeric = (menu) => {
  for(let x in menu) {
    (!(isNaN(menu[x]))) ? menu[x] *= 2 : '';
  };
};

multiplyNumeric(menu);
console.log(menu);
