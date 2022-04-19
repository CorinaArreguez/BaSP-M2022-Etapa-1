console.log ('--EXERCISE 6: FUNCTIONS');

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
//Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
//variable en la consola del navegador.
console.log ('-Exercise 6.a');
function sumaNum (numUno, numDos) {
    return numUno + numDos;
};
var rta = sumaNum (9,5);
console.log ('The result is: ' + rta);

//b. A la función suma anterior, agregarle una validación para controlar si alguno de los 
//parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene 
//error y retornar el valor NaN como resultado.
console.log ('-Exercise 6.b');
function validateSumaNum (numUno, numDos) {
    if (typeof numUno != 'number' || typeof numDos != 'number') {
        alert ('One of the parameter is wrong');
        return ('NaN');
    } else {
        return numUno + numDos;
    };
};
console.log (validateSumaNum('3a', 6));

//c. Crear una función validate integer que reciba un número como parámetro y devuelva 
//verdadero si es un número entero.
console.log ('-Exercise 6.c');
function validateInteger (numeroUno) {
    if (typeof numeroUno == 'integer') {
        return true;
    } else {
        return false;
    };
};
console.log ('Is it integer?: ' + validateInteger(6.9));

//d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números 
//sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el 
//número convertido a entero (redondeado).
console.log ('-Exercise 6.d');
function valSumaNumInt (numUno, numDos) {
    if (Number.isInteger(numUno) && Number.isInteger(numDos)) {
        return numUno + numDos;
    } else {
        alert ('One of the numbers is decimal');
        return Math.round(numUno+numDos);
    }
};
console.log ('Result rounded: ' + valSumaNumInt(4.3, 3));

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro 
//de la función suma probando que todo siga funcionando igual.
console.log ('-Exercise 6.e');
console.log(suma(1,2.5));
function suma (numUno,numDos) {
    if (Number.isInteger(numUno) && Number.isInteger(numDos)) {
        return numUno + numDos;
    }
    else { 
        return integer(numUno, numDos);
    };
};
function integer (numUno, numDos) {
    alert('One of the numbers is decimal');
    return Math.round(numUno+numDos);
};

