/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Aqui hice link a mi boton cuando cada vez le des click se cambie la carta
window.onload = function() {
  document.getElementById("generate").addEventListener("click", generateCard);
};
// cree mi funcion que genera mi carta random
function generateCard() {
  let figura = Math.floor(Math.random() * 4); /// Aqui genero u numero random
  let arrFiguras = ["♦", "♥", "♠", "♣"];
  let color = figura < 2 ? "red" : "black"; /// para cambiar de color use mi posicion en mi arrFiguras
  figura = arrFiguras[figura];
  let valor = Math.floor(Math.random() * 13) + 1; /// Generador random de los valores del centro de la carta
  switch (
    valor /// hice un switch para cambiar los valores
  ) {
    case 1:
      valor = "A";
      break;
    case 11:
      valor = "J";
      break;
    case 12:
      valor = "Q";
      break;
    case 13:
      valor = "K";
      break;
  }
  document.getElementById("valor").innerText = valor; /// aqui llame al valor dentro del html
  document.getElementById("valor").style.color = color; /// aqui le puse un color random al valor
  let figuras = document.querySelectorAll(".figura");
  for (let i = 0; i < figuras.length; i++) {
    figuras[i].innerText = figura;
    figuras[i].style.color = color;
  }
}
