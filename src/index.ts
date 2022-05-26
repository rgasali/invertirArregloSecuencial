let arreglo1: number[] = new Array(1, 3, 9, 4, 5, 98);
let arregloInvertidoSec: number[] = new Array();
let arregloInvertidoRec: number[] = new Array();
let index: number = 0;

function invertirArregloSecuencial(
  arreglo: Array<number>,
  arregloInvertido: Array<number>
) {
  for (let i = arreglo.length; i > 0; i--) {
    arregloInvertido.push(arreglo[i - 1]);
  }
}

function invertirArregloRec(arreglo: Array<number>, index: number) {
  if (index === arreglo.length - 1) {
    arregloInvertidoRec.push(arreglo[index]);
  } else {
    invertirArregloRec(arreglo, index + 1);
    arregloInvertidoRec.push(arreglo[index]);
  }
}

invertirArregloSecuencial(arreglo1, arregloInvertidoSec);
invertirArregloRec(arreglo1, index);

console.log(arregloInvertidoSec);
console.log(arregloInvertidoRec);
