// Iteration 1: Names and Input

console.log("I'm ready!");
const hacker1 = "Andrew";
const hacker2 = "Maps";

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    hacker1,
    " has the longest name, it has",
    hacker1.length,
    "characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has",
    hacker2.length,
    "characters."
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    "Wow, you both have equally long names, ",
    hacker1.length,
    "characters!"
  );
}
console.log("--------------------------------");

// Iteration 3: Loops
//"Aprvecho una forma de hacerlo con unos metodos que es más sencillo però la segunda parte la hacemos con un for loop para practicar"
const splittedHacker1 = hacker1.split("");
// Then we can split it as a separated Array like this:
const spacedName = splittedHacker1.join(" ");
const upperCaseSpacedName = spacedName.toUpperCase();
console.log(upperCaseSpacedName);

console.log("--------------------------------");
//Second ex:
for (let i = 0; i < hacker2.length; i++) {
  console.log(hacker2[i]);
}
//Reversed
console.log("--------------------------------");
for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

// PORQUE ME DICE QUE SI HACKER1 POSICION[0] ES MAS PEQUEÑO QUE HACKER2 POSICION [0] ME SALE ESTO CUANDO EN REALIDAD HACKER1 DEBERÍA IR ANTES QUE HACKER2 POR QUE LA LETTRA A VA ANTES QUE LA LETTRA M NO? ENTONCES SI QUE ME SALE EL EJERCICIO PERO NO ENTIENDO BIEN PORQUE COGE LO CONTRARIO, QUIZÁS PORQUE LA PARTE DE LEER SI LA POSICION ES MAS GRANDE O MAS PEQUEÑA VA AL REVES DEL ALFABETO? WTF HAAHAH

if (hacker1[0] < hacker2[0]) {
  console.log("Drivers name go first");
} else if (hacker1[0] > hacker2[0]) {
  console.log("yoyoyoyoyo, maps names go first");
} else if ((hacker1[0] = hacker2[0])) {
  console.log("they got same name bro");
}

// PREGUNTA AL PROFE
let pregunta =
  "PORQUE ME DICE QUE SI HACKER1 POSICION[0] ES MAS PEQUEÑO QUE HACKER2 POSICION [0] ME SALE ESTO CUANDO EN REALIDAD HACKER1 DEBERÍA IR ANTES QUE HACKER2 POR QUE LA LETTRA A VA ANTES QUE LA LETTRA M NO? ENTONCES SI QUE ME SALE EL EJERCICIO PERO NO ENTIENDO BIEN PORQUE COGE LO CONTRARIO, QUIZÁS PORQUE LA PARTE DE LEER SI LA POSICION ES MAS GRANDE O MAS PEQUEÑA VA AL REVES DEL ALFABETO? WTF HAAHAH";

console.log(pregunta.toLocaleLowerCase());

// BONUS1

const lorem =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet corrupti sapiente quas similique vitae esse, sint ullam modi quasi sit, omnis praesentium repellendus incidunt voluptatem numquam nisi in reiciendis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad facilis deleniti asperiores maiores pariatur provident ut modi distinctio laboriosam quod quasi qui, cum aspernatur rerum adipisci esse, a id eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Nulla, ipsum! Quaerat fugit sequi et enim dolorum aliquid necessitatibus fuga distinctio harum doloremque, provident ducimus.Quia tempore blanditiis nisi eos est.";

let countSpaces = " ";
let numberOfLatinWord = " ";

console.log(lorem.length);
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    countSpaces++;
  } else if (lorem[i] === "e" && lorem[i + 1] === "t") {
    numberOfLatinWord++;
  }
  // for (let x = i; x < i; x++) {
  //   if (lorem[x] === "et") {
  //     numberOfLatinWord++;
  //   }
  // }
}
console.log("Total number of word in the string: ", lorem.length - countSpaces);
console.log("Number of Latin 'et' word:", numberOfLatinWord);

const phraseToCheck = "luz azul";
console.log("la frase tiene:", phraseToCheck.length, "caracteres");

// for (let i = 0; i < phraseToCheck.length; i++) {
//   switch (phraseToCheck) {
//     case(phraseToCheck[0] === phraseToCheck[8])
//   }

// if (phraseToCheck[0] === phraseToCheck[8]) {
//   if (phraseToCheck[1] === phraseToCheck[7]) {
//     if (phraseToCheck[2] === phraseToCheck[6]) {
//       if (phraseToCheck[3] === phraseToCheck[5]) {
//         if (phraseToCheck[4] === phraseToCheck[4]) {
//           console.log(phraseToCheck, "es palindrome");
//         }
//       }
//     }
//   }
// }
// }
// AQUEST ULTIM ES POT FER AMB EL SWITCH UNA MICA MES FCIL XD
