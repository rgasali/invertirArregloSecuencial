let arreglo1: number[] = new Array(1, 3, 9, 4, 5, 8);
let arregloInvertido: number[] = new Array();
let auxiliar: number;

function invertirArregloSecuencial(
  arreglo: Array<number>,
  arregloInvertido: Array<number>
) {
  for (let i = arreglo.length; i > 0; i--) {
    arregloInvertido.push(arreglo[i - 1]);
  }
}

invertirArregloSecuencial(arreglo1, arregloInvertido);
console.log(arregloInvertido);
