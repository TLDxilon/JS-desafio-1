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
