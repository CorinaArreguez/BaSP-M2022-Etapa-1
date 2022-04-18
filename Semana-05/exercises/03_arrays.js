console.log ('--EXERCISE 3: ARRAYS');

//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
//"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 
//5 y 11 (utilizar console.log).
console.log ('-Exercise 2.a');
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log ('Mes 5: ' + meses[5] + ' / ' + 'Mes 11: ' + meses[11]);

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log ('-Exercise 2.b');
ordenAlf = meses.sort();
console.log (ordenAlf);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log ('-Exercise 2.c');
meses.unshift('Hola');
meses.push('Adiós');
console.log (meses);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log ('-Exercise 2.d');
meses.shift();
meses.pop();
console.log(meses);

//e. Invertir el orden del array (utilizar reverse).
console.log ('-Exercise 2.e');
invertir = meses.reverse();
console.log (invertir);

//f. Unir todos los elementos del array en un único string donde cada mes este separado
//por un guión - (utilizar join).
console.log ('-Exercise 2.f');
console.log (meses.join('-'));

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar 
//slice).
console.log ('-Exercise 2.g');
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
mesesCopia = meses.slice(4,10);
console.log (mesesCopia);