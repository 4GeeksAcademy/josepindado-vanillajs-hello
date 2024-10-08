import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//--BOTON NUEVA CARTA--
window.onload = function() {
  document.getElementById("nuevaCarta").addEventListener("click", nuevaCarta);
};

function nuevaCarta() {
  let figura = Math.floor(Math.random() * 4);
  let arrFiguras = ["♦", "♥", "♠", "♣"];
  let color = figura < 2 ? "red" : "black";
  figura = arrFiguras[figura];
  let valor = Math.floor(Math.random() * 13) + 1;
  switch (valor) {
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

  document.getElementById("valor").innerText = valor;
  document.getElementById("valor").style.color = color;

  let figuras = document.querySelectorAll(".figura");
  for (let i = 0; i < figuras.length; i++) {
    figuras[i].innerText = figura;
    figuras[i].style.color = color;
  }
}

const alto = document.getElementById("alto");
const ancho = document.getElementById("ancho");
const card = document.getElementById("card");

function nuevoTamaño() {
  let x = alto.value ? `${alto.value}px` : "";
  card.style.height = x;
  let y = ancho.value ? `${ancho.value}px` : "";
  card.style.width = y;
}
alto.addEventListener("input", nuevoTamaño);
ancho.addEventListener("input", nuevoTamaño);
