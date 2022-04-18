console.log ('--EXERCISE 5: FOR');

//a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
//JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log ('-Exercise 5.a')
var nouns = ['love', 'house', 'dog', 'bike', 'book'];
for (var cont = 0 ; cont < 5 ; cont++) {
    alert (nouns [cont])
};

//b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar
//una alerta por cada palabra modificada.
console.log ('-Exercise 5.b');
for (var c = 0 ; c < 5 ; c++) {
    capLet = nouns[c].substring(0,1).toUpperCase();
    newNoun = capLet + nouns[c].substring(1);
    alert (newNoun)
};

//c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del 
//punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable
//sentence. Al final mostrar una única alerta con la cadena completa.
console.log ('-Exercise 5.c');
var sentence = '';
var complete = '';
for (s = 0 ; s <5 ; s++) {
    sentence = nouns[s];
    complete += sentence;
};
alert ('New sentence: ' + complete);

//d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el 
//número de la repetición, es decir que al final de la ejecución del bucle for debería 
//haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por 
//la consola del navegador el array final (utilizar console.log).
console.log ('-Exercise 5.d');
var newArray = [];
for (n = 0 ; n < 10 ; n++) {
    newArray += n;
};
console.log ('New Array: ' + newArray);
