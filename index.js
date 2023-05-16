// 1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

function makeObject(titlu, portie, ingrediente) {
  let myObject = {};

  myObject.titlu = titlu;
  myObject.portie = portie;
  myObject.ingrediente = ingrediente;
  return myObject;
}

const rezultat = makeObject("burger", 4, ["carne", "chedar", "salata"]);
console.log(rezultat);
// 2. Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

// Exemplu 1;
const user = {
  obiect1: "Burger",
  obiect2: ["carne", "chifla", "salata", "sos"],
};
delete user.obiect1;
console.log(user);

// Exemplu 2:
const user1 = {
  proprietatea1: "Burger",
  proprietatea2: ["carne", "chifla", "salata", "sos"],
};
const keys = Object.keys(user1);
for (let i = 0; i < keys.length; i++) {
  console.log(user1[keys[1]]);
}

//Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți,precum titlu,autor si este citita.
const carti = [
  { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true },
  { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: false },
];

for (let i = 0; i < carti.length; i++) {
  if (carti[i].esteCitita === true) {
    console.log(`Ai citit deja ${carti[i].titlu}de ${carti[i].autor}`);
  } else if (carti[i].esteCitita === false) {
    console.log(`Trebuie sa citesti ${carti[i].titlu}de ${carti[i].autor}`);
  }
}
