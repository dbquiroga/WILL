/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  //h: 12345  t: false , h: 22322 t: true
  let numString = num.toString();
  let numReverse = numString.split('').reverse().join('');
  if(numString === numReverse){
    return true
  }
  return false
}

numeroSimetrico(4444);

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico