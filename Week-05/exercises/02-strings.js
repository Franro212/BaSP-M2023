console.log('--EXERCISE 2: STRINGS');
console.log('-Exercise 2.a');
//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var word1Exercise2 = "hello good morning";
console.log(word1Exercise2.toUpperCase());
console.log('-Exercise 2.b');
//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var word2Exercise2 = "hello good morning";
var resultWord2Exercise2 = word2Exercise2.substring(0,5);
console.log(resultWord2Exercise2);
console.log('-Exercise 2.c');
//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var word3Exercise2 = "hello good morning";
console.log(word3Exercise2.length);
var resultWord3Exercise2 = word3Exercise2.substring(9);
console.log(resultWord3Exercise2);
console.log('-Exercise 2.d');
//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var word4Exercise2 = "hello good morning";
var resultWord4Exercise2 = word4Exercise2.substring(0,1).toUpperCase() + word4Exercise2.substring(1);
console.log(resultWord4Exercise2);
console.log('-Exercise 2.e');
//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var word5Exercise2 = "hello good morning";
var resultWord5Exercise2 = word5Exercise2.indexOf(" ");
console.log(resultWord5Exercise2);
console.log('-Exercise 2.f');
//f.Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var word6Exercise2 = "javascript programming";
console.log(word6Exercise2.indexOf(" "));
var resultWord6Exercise2 = word6Exercise2.substring(0,1).toUpperCase() + word6Exercise2.substring(1,11) + word6Exercise2.substring(11,12).toUpperCase() + word6Exercise2.substring(12);
console.log(resultWord6Exercise2);

