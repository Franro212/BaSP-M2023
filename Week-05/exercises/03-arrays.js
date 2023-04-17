console.log('--EXERCISE 3: ARRAYS');
console.log('-Exercise 3.a');
//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
const arrayMonths1 =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(arrayMonths1[4],arrayMonths1[10]);
console.log('-Exercise 3.b');
//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(arrayMonths1.sort());
console.log('-Exercise 3.c');
//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
arrayMonths1.unshift("Start of year")
arrayMonths1.push("End of year")
console.log(arrayMonths1);
console.log('-Exercise 3.d');
//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
arrayMonths1.shift()
arrayMonths1.pop()
console.log(arrayMonths1);
console.log('-Exercise 3.e');
//e. Invertir el orden del array (utilizar reverse).
arrayMonths1.reverse()
console.log(arrayMonths1);
console.log('-Exercise 3.f');
//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
const arrayMonths3 = arrayMonths1.join("-")
console.log(arrayMonths3);
console.log('-Exercise 3.g');
//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
 const arrayMonths4 = arrayMonths1.slice(4,11);
console.log(arrayMonths4);
