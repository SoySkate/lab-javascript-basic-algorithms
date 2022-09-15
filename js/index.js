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
console.log(
  "-------------OTRAFORMA DE HACERLO CON OTRO METODO-------------------"
);

console.log(hacker1.toUpperCase().split("").join(" "));

console.log("----------------------------------------------------");
//Second ex:
let nombreBien = "";
for (let i = 0; i < hacker1.length; i++) {
  nombreBien += hacker1[i];
}
console.log(nombreBien);

//Reversed
console.log("--------------------------------");
let segundoNombreBien = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  segundoNombreBien += hacker2[i];
}
console.log(segundoNombreBien);
// console.log(
//   "-------------OTRAFORMA DE HACERLO CON OTRO METODO-------------------"
// );//  CON EL METODO REVERSE

// PORQUE ME DICE QUE SI HACKER1 POSICION[0] ES MAS PEQUEÑO QUE HACKER2 POSICION [0] ME SALE ESTO CUANDO EN REALIDAD HACKER1 DEBERÍA IR ANTES QUE HACKER2 POR QUE LA LETTRA A VA ANTES QUE LA LETTRA M NO? ENTONCES SI QUE ME SALE EL EJERCICIO PERO NO ENTIENDO BIEN PORQUE COGE LO CONTRARIO, QUIZÁS PORQUE LA PARTE DE LEER SI LA POSICION ES MAS GRANDE O MAS PEQUEÑA VA AL REVES DEL ALFABETO? WTF HAAHAH

if (hacker1[0] < hacker2[0]) {
  console.log("Drivers name go first");
} else if (hacker1[0] > hacker2[0]) {
  console.log("yoyoyoyoyo, maps names go first");
} else if ((hacker1[0] = hacker2[0])) {
  console.log("they got same name bro");
}

// COMO LO HA HAECHO DIEGO(EJEMPLO):

// function ordenLexicoGrafico(string1, string2) {
//   // body de la funcion
//   if (string1<string2) {
//     console.log(`The drivers names go first`);
//   } else if (string1 > string2) {
//     console.log(`YOO navigator go first definitely`);
//   } else {
//     console.log(`Yoo, both have the same name?`);
//   }
// } ç
// // llamada de la funcion
// ordenLexicoGrafico(hacker1, hacker2);

// LITERAL ES MAS FACIL CON EL METODO ScreenOrientation() O EL METODO LOCALCOMPARE()
// ejemplo de judit:
// const hackersNames = [hacker1, hacker2].sort();
// console.log(hackersNames);
// if (hackersNames[0] === hacker1) {
//   console.log("The driver's name goes first.");
// } else if (hackersNames[0] === hacker2) {
//   console.log("Yo, the navigator goes first definitely.");
// } else if (hackersNames[0] === hackersNames[1]) {
//   console.log("What?! You both have the same name?");
// }

// PREGUNTA AL PROFE
let pregunta =
  "PORQUE ME DICE QUE SI HACKER1 POSICION[0] ES MAS PEQUEÑO QUE HACKER2 POSICION [0] ME SALE ESTO CUANDO EN REALIDAD HACKER1 DEBERÍA IR ANTES QUE HACKER2 POR QUE LA LETTRA A VA ANTES QUE LA LETTRA M NO? ENTONCES SI QUE ME SALE EL EJERCICIO PERO NO ENTIENDO BIEN PORQUE COGE LO CONTRARIO, QUIZÁS PORQUE LA PARTE DE LEER SI LA POSICION ES MAS GRANDE O MAS PEQUEÑA VA AL REVES DEL ALFABETO? WTF HAAHAH";

console.log(pregunta.toLocaleLowerCase());

// BONUS1
const lorem =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet corrupti sapiente quas similique vitae esse, sint ullam modi quasi sit, omnis praesentium repellendus incidunt voluptatem numquam nisi in reiciendis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad facilis deleniti asperiores maiores pariatur provident ut modi distinctio laboriosam quod quasi qui, cum aspernatur rerum adipisci esse, a id eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Nulla, ipsum! Quaerat fugit sequi et enim dolorum aliquid necessitatibus fuga distinctio harum doloremque, provident ducimus.Quia tempore blanditiis nisi eos est.";
// _____________________________________________________________________
// diegos examples of lab
function amounthOfWords(andreu) {
  return andreu.split("").filter((word) => word !== "").length;
}
console.log(amounthOfWords(lorem));
// SEGUNDA PARTE
function amounthOfEt(juan) {
  return juan.split(" ").filter((word) => word !== "et").length;
}
// _____________________________________________________________________
// funcion de mariano xdd esta good
function marianoFunction(string) {
  return `${(string.match(/et/g) || []).length}`;
}
console.log(`Mariano function ${marianoFunction(lorem)}`);
// MI FORMA RARA DE HACERLO
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

// BONUS1
// diegos respuesta
function palindromeCheck(wordToCheck) {
  let length = wordToCheck.length - 1;
  let index = 0;

  while (index < length) {
    if (wordToCheck[index] === " ") {
      index++;
    } else if (wordToCheck[length] === " ") {
      length--;
    } else if (wordToCheck[index] === wordToCheck[length]) {
      index++;
      length--;
    } else return false;
  }
  return true;
}
console.log(palindromeCheck(phraseToCheck));

// FUMADA MEVA XD NO SE SI IBA POR BUEN CAMINO
// for (let i = 0; i < phraseToCheck.length -1; i++) {
//   switch (phraseToCheck) {
//     case (phraseToCheck[0] === phraseToCheck.lenght - 1):
//       break;

//   }

// if (phraseToCheck[0] === phraseToCheck[8]) {
//   if (phraseToCheck[1] === phraseToCheck[7]) {
//     if (phraseToCheck[2] === phraseToCheck[6]) {
//       if (phraseToCheck[3] === phraseToCheck[5]) {
//         if (phraseToCheck[4] === phraseToCheck[4]) {
//           console.log(phraseToCheck, "es palindrome xd");
//         }
//       }
//     }
//   }
// }
// }
// AQUEST ULTIM ES POT FER AMB EL SWITCH UNA MICA MES FCIL XD
// bueno aquest no jaajaja but
