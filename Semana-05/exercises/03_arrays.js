console.log ('--EXERCISE 3: ARRAYS');

//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
//"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 
//5 y 11 (utilizar console.log).
console.log ('-Exercise 3.a');
var meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];
console.log ('Month 5: ' + meses[5] + ' / ' + 'Month 11: ' + meses[11]);

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log ('-Exercise 3.b');
ordenAlf = meses.sort();
console.log (ordenAlf);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log ('-Exercise 3.c');
meses.unshift('Hola');
meses.push('Adiós');
console.log (meses);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log ('-Exercise 3.d');
meses.shift();
meses.pop();
console.log(meses);

//e. Invertir el orden del array (utilizar reverse).
console.log ('-Exercise 3.e');
invertir = meses.reverse();
console.log (invertir);

//f. Unir todos los elementos del array en un único string donde cada mes este separado
//por un guión - (utilizar join).
console.log ('-Exercise 3.f');
console.log (meses.join('-'));

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar 
//slice).
console.log ('-Exercise 3.g');
var meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];
mesesCopia = meses.slice(4,10);
console.log (mesesCopia);