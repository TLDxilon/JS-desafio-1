//Algoritmo para hacer la lista de la compra


let producto = prompt("Ingresa un producto para la lista de la compra (ESC para salir)");
let listaCompra = "";

while (producto != "ESC") {
    listaCompra = listaCompra + producto + "\n";
    producto = prompt("Ingresa un producto para la lista de la compra");

}
console.log("Lista de la compra: \n" + listaCompra);

