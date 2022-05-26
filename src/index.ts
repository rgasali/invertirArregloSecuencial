let arreglo1: number[] = new Array(1, 2, 3, 4, 5, 6);
let arregloInvertido: number[] = new Array();
let auxiliar: number;

function invertirArregloSecuencial(
  arreglo: Array<number>,
  arregloInvertido: Array<number>
) {
  for (let i = arreglo.length; i > 0; i--) {
    arregloInvertido.push(i);
  }
}

invertirArregloSecuencial(arreglo1, arregloInvertido);
console.log(arregloInvertido);
