console.log ('--EXERCISE 2: STRINGS');

//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
//en mayúscula (utilizar toUpperCase).
console.log ('-Exercise 2.a:');
var text = 'equilibrado';
console.log ('Mayúscula: ' + text.toUpperCase());

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log ('-Exercise 2.b:');
var cadena = 'portafolios';
cadNueva = cadena.substring(0,5);
console.log ('Nueva cadena: ' + cadNueva);


//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log ('-Exercise 2.c:');
var pal = 'bienvenida';
palNueva = pal.substring(7);
console.log ('Nueva palabra: ' + palNueva);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una 
//nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log ('-Exercise 2.d:');
var palabra = 'helicóptero';
primeraMay = palabra.substring(0,1).toUpperCase();
min = palabra.substring(1).toLowerCase();
nuevaPalabra = primeraMay + min;
console.log ('Primera mayúscula: ' + nuevaPalabra);


//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log ('-Exercise 2.e:');
var cad = 'Proyecto semanal';
espacioBlanco = cad.indexOf(' ');
console.log ('Posición del primer espacio en blanco: ' + espacioBlanco);


//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
//espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo 
//string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
//(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log ('-Exercise 2.f:');
var cade = 'solicitaremos información';
primerMay = cade.charAt(0).toUpperCase();
segMay = cade.substring(cade.indexOf(' ') + 1, cade.indexOf(' ') + 2).toUpperCase();
primerMin = cade.substring(1,13).toLowerCase();
segMin = cade.substring(15).toLowerCase(); 
cadeFinal = primerMay + primerMin + ' ' + segMay + segMin;
console.log (cadeFinal);
