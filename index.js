// A DOUA TEMA IN JAVA SCRIPT

// Tipăriți toate numerele pare de la 0 la 10
// Exemplu 1:
function numerePare(range) {
  let count = 0;
  while (range > 0) {
    if (range % 2 === 0) {
      count++;
      console.log(range);
    }
    range--;
  }
  return count;
}
console.log(numerePare(10));

// 2. Calculați suma numerelor dintr-un șir de numere

function sumaNumerelor(num) {
  let index = 0;
  let sum = 0;
  while (index < num.length) {
    sum = sum + num[index];
    index++;
  }
  return "sum =" + sum;
}
num1 = [1, 3, -50, 100, -20, 20];
num2 = [3, 4, 3, -20, -13, 59, 12];
console.log(sumaNumerelor(num1));
console.log(sumaNumerelor(num2));

// 3. Creați o funcție care inversează un șir de numere
range = [1, 5, -23, 5, -15, 28, 5];
function inversare(array2) {
  let newRange = [];
  let index = 0;
  let newIndex = array2.length - 1;
  while (index < array2.length) {
    newRange[index] = array2[newIndex];
    index++;
    newIndex--;
  }
  return "numar inversat este " + newRange;
}
console.log(inversare(range));
// 4. Returnează numărul de vocale dintr-un șir de caractere (string)

// Exemplul 1:
function doarVocale(string) {
  let count = 0;
  const vocale = [`a`, `e`, `i`, `o`, `u`];
  for (let num of string) {
    if (vocale.includes(num)) {
      count++;
    }
  }
  return count;
}
console.log(doarVocale(`eu mananc doar orez`));

// Exemplul 2:
function numaratoareVocale(sir) {
  let count = 0;
  const vocale = "aeiou";
  for (let i = 0; i < sir.length; i++) {
    if (vocale.indexOf(sir[i]) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(numaratoareVocale("Cate vocale sunt in acest exemplu"));
