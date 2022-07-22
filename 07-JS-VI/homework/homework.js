// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var cadena ="";
    for(i=1; i<nombre.length; i++)
    {
        cadena = cadena + nombre[i];
    }

  separarM = nombre[0].toUpperCase();

  return separarM + cadena;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
      cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

    cb(10, 80);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
   a = numeros.reduce( function(acumulador,elemento) { return acumulador + elemento;}, 0);
   cb(a);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
    array.forEach(function(elemento,indice){
      return cb(elemento);
    });

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevo_array = new Array(array.length);
     array.map(function(elemento,indice){
      nuevo_array[indice] = cb(elemento);
     })

      return nuevo_array;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  cont=0;
    var otro_array = new Array();
    array.map(function(elemento, indice) {
        if(elemento[0] =="a"){
          otro_array[cont] = elemento;
          cont++;
        }
    })
return otro_array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
