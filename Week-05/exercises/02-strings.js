console.log('--EXERCISE 2: STRINGS');
//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('-Exercise 2.a');

var word1Exercise2 = "Hola Buen dia"

console.log(word1Exercise2.toUpperCase());
//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.b');

var word2Exercise2 = "Hola Buen dia"

var resultWord2Excercise2 = word2Exercise2.substring(0,5);

console.log(resultWord2Excercise2);


//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.c');

var word3Exercise2 = "Hola Buen dia"

console.log(word3Exercise2.length);

var resultWord3Excercise2 = word3Exercise2.substring(9)

console.log(resultWord3Excercise2);
