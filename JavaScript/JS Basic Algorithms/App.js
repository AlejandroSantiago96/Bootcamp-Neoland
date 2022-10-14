/*------------------------------------------------**Iteración #1: Variables**------------------------------------*/
//1.1
let myFavoriteHero = "Hulk";
console.log(myFavoriteHero);

//1.2
let x = "50";
console.log(x);

//1.3
let h = "5";
let y = "10";
console.log[("h", "y")];

//1.4
let z = [h + y];
console.log(z);

/*--------------------------------------------Iteración #2: Variables avanzadas--------------------------------------*/
//1.1
const character = { name: "Jack Sparrow", age: 25 };
console.log(character);
//1.2
let firstName = "Jon";
let lastName = "Snow";
let age = "24";
console.log(
  "Soy ",
  firstName,
  lastName,
  ", tengo",
  age,
  "años y me gustan los lobos."
);
//1.3
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };
console.log(toy1.price + toy2.price);
//1.4
let globalBasePrice = 25000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };
console.log(globalBasePrice + car1.finalPrice + car2.finalPrice);

/*-----------------------------------------------Iteración #3: Operadores------------------------------------------*/
//1.1
console.log(10 * 5);
//1.2
console.log(10 / 2);
//1.3
console.log(15 / 9);
//1.4
let p = 10;
let j = 5;
let o = p + j;
console.log(o);
//1.5
let c = 10;
let m = 5;
let i = c * m;
console.log(i);

/*----------------------------------------------**Iteración #4: Arrays**----------------------------------------------*/
//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
//1.2
avengers.splice(0, 1, "IRONMAN");
console.log(avengers);
//1.3
console.log(avengers.length);
//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters.length);
rickAndMortyCharacters.splice(0, 4);
console.log(rickAndMortyCharacters);

/*---------------------------------------------------**Iteración #5: Condicionales**----------------------------*/
const number1 = 10;
const number2 = 20;
const number3 = 2;
//1.1
console.log(number1 === 10);
//1.2
console.log(number2 / number1 == 2);
//1.3
console.log(number1 !== number2);
//1.4
console.log(number3 != number1);
//1.5
console.log(number3 * 5 == number1);
//1.6
console.log(number3 * 5 == number1, number1 * 2 == number2);
//1.7
console.log(number2 / 2 == number1, number1 / 5 == number3);

/*----------------------------------------------------------------**Iteración #6: Bucles**---------------------------*/
//1.1
for (let numberlist = 0; numberlist < 10; numberlist++) {
  console.log(numberlist);
}
//1.2

//1.3
for (let i = 0; i <= 9; i++) {
  if (i <= 8) {
    console.log("Intentando dormir 🐑");
  } else {
    console.log("Dormido!");
  }
}

console.log(concatena);
