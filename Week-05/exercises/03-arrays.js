console.log('--EXERCISE 3: ARRAYS');
//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
const arrayMonths1 =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log('-Exercise 3.a');
console.log(arrayMonths1[4],arrayMonths1[10]);
//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-Exercise 3.b');
console.log(arrayMonths1.sort());
//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-Exercise 3.c');
arrayMonths1.unshift("Start of year")
arrayMonths1.push("End of year")
console.log(arrayMonths1);
//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d');
arrayMonths1.shift()
arrayMonths1.pop()
console.log(arrayMonths1);
//e. Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e');
console.log(arrayMonths1.reverse());
//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('-Exercise 3.f');
const arrayMonths2 = arrayMonths1.join("-")
console.log(arrayMonths2);
//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
const arrayMonths3 =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(arrayMonths3.slice(4,11));
