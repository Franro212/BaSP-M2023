console.log('--EXERCISE 5: FOR');
console.log('--Exercise 5.a');
//a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
const arrayWord = ["javascript","node","java","react","vuejs"]
for (let i = 0; i < arrayWord.length; i++) {
    alert(arrayWord[i])
}
console.log('--Exercise 5.b');
// //b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
for (let i = 0; i < arrayWord.length; i++) {
    arrayWord[i] = arrayWord[i][0].toUpperCase() + arrayWord[i].substring(1);
    alert(arrayWord[i])
}
console.log('--Exercise 5.c');
//c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = ""
for (let i = 0; i < arrayWord.length; i++) {
    sentence += arrayWord[i] + " "
    alert(sentence);
}
console.log('--Exercise 5.d');
//d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
const arrayWord2 = [];
for (let i = 0; i < 10; i++) {
    arrayWord2.push(i);
    console.log(arrayWord2); 
}