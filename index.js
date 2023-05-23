// // 1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

// function makeObject(titlu, portie, ingrediente) {
//   let myObject = {};

//   myObject.titlu = titlu;
//   myObject.portie = portie;
//   myObject.ingrediente = ingrediente;
//   return myObject;
// }

// const rezultat = makeObject("burger", 4, ["carne", "chedar", "salata"]);
// console.log(rezultat);
// // 2. Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

// // Exemplu 1;
// const user = {
//   obiect1: "Burger",
//   obiect2: ["carne", "chifla", "salata", "sos"],
// };
// delete user.obiect1;
// console.log(user);

// // Exemplu 2:
// const user1 = {
//   proprietatea1: "Burger",
//   proprietatea2: ["carne", "chifla", "salata", "sos"],
// };
// const keys = Object.keys(user1);
// for (let i = 0; i < keys.length; i++) {
//   console.log(user1[keys[1]]);
// }

// //Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți,precum titlu,autor si este citita.
// const carti = [
//   { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true },
//   { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: false },
// ];

// for (let i = 0; i < carti.length; i++) {
//   if (carti[i].esteCitita === true) {
//     console.log(`Ai citit deja ${carti[i].titlu}de ${carti[i].autor}`);
//   } else if (carti[i].esteCitita === false) {
//     console.log(`Trebuie sa citesti ${carti[i].titlu}de ${carti[i].autor}`);
//   }
// }

// Tema-Functii

//Scrieți o funcție care returnează pătratul unui număr

// Exemplul 1
const myNum = (num) => num ** 2;
console.log(myNum(5));

// Exemplul 2
let num = 6;
let squareNum = num * num;

console.log(squareNum);

// Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă

// Exemplul 1
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandom(3, 5));

// Exemplul 2
function myRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(myRandomNum(2, 12));

// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

// Exemplul 1
function countString(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count += 1;
    }
  }
  return count;
}
const string = prompt("Enter a string: ");
const letterToCheck = prompt("Enter a letter to check: ");
const result = countString(string, letterToCheck);
console.log(result);

// Exemplul 2 folosind REDUCE

// const sir = [{ input: "Imi place programarea", litera: "a" }];
// const sirReduce = sir.reduce((acc, item) => {
//   return [...acc, item.litera + "a"];
// }, []);
// console.log(sirReduce);

// Scrieți o funcție pentru a adăuga numere nelimitate

// Exemplul 1-Folosind SPREAD
function spread(a, b, c) {
  return a + b + c;
}
let numbers = [1, 5, 2];
console.log(spread(...numbers));

// Exemplul 2-Folosind REST
function rest(...theNumbers) {
  let total = 0;
  for (let all of theNumbers) {
    total += all;
  }
  return total;
}
console.log(rest(5, 8, 4));
