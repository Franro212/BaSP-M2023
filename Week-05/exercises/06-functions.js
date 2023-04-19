console.log('--EXERCISE 6: FOR');
//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log('--Exercise 6.a')
function suma (number2, number3) {
    return  number2 + number3
}
var resultSuma = suma(10,10)
console.log(resultSuma); 
// b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log('--Exercise 6.b');
function suma (number2, number3) {
    if (number2>=0 && number3>=0) {
        return number2 + number3; 
    } else {
        alert("only accepts numbers");
        return NaN
    }
}
suma("e",4)
//c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('--Exercise 6.c')
function validateInteger(number) {
    if (number % 1 == 0) {
        return true
    }
}
console.log(validateInteger(2));
//d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).
console.log('--Exercise 6.d')
function sumaValidate (number2, number3) {
    if (number2>=0 && number3>=0) {
       
        if (validateInteger (number2) && validateInteger(number3)) {
            return number2 + number3
        } else {
            alert("only accepts integers")
             suma(number2,number3)
             console.log(Math.round(number2,number3))
        }
    } else {
        alert("only accepts numbers");
        return NaN
    }
}
console.log(sumaValidate( 10,10));
//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.
console.log('--Exercise .e')
function validateFunction(number2,number3) {
     return sumaValidate(number2, number3);
}
console.log(validateFunction(10,"e"));