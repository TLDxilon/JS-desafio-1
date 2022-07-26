//Algoritmo para hacer la lista de la compra


// let producto = prompt("Ingresa un producto para la lista de la compra (ESC para salir)");
// let listaCompra = "";

// while (producto != "ESC") {
//     listaCompra = listaCompra + producto + "\n";
//     producto = prompt("Ingresa un producto para la lista de la compra");

// }
// console.log("Lista de la compra: \n" + listaCompra);


let numeroPremiado = parseInt(prompt("Sorteo!! Ingresar un número del 1 al 10"));

switch(numeroPremiado){
  case 1:
  case 2:  
  case 3:  
  case 4:  
  case 5:  
  case 6:
  case 7:
  case 8:
  case 10:
    alert("Lo siento, no has acertado!!");
    break;
  case 9:
    alert("PREMIO! Has acertado");
    break;
  default:
    alert("Lo siento, este número está fuera del rango");
    break;
}
