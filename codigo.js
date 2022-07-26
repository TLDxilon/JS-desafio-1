let numero = parseInt(prompt("Sorteo!! Ingresar un número del 1 al 10"));
if(numero=="9"){
    alert("Enhorabuena! Has acertado!");
}else{
    while(numero != 9){
      alert("Lo siento, no has acertado");
      numero = parseInt(prompt("Sorteo!! Ingresar un número del 1 al 10."));
    }  
    alert("Enhorabuena! Has acertado!");
}
