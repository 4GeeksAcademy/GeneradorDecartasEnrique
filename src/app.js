
const generarNuevaCarta = () => {
  const palos = [
    { simbolo: "♥", clase: "heart" },
    { simbolo: "♦", clase: "diamond" },
    { simbolo: "♠", clase: "spade" },
    { simbolo: "♣", clase: "club" }
  ];
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const paloRandom = palos[Math.floor(Math.random() * palos.length)];
  const valorRandom = valores[Math.floor(Math.random() * valores.length)];

  document.querySelector("#card").className = "card " + paloRandom.clase;
  document.querySelector("#arribasimbolo").innerHTML = paloRandom.simbolo;
  document.querySelector("#valorcentral").innerHTML = valorRandom;
  document.querySelector("#abajosimbolo").innerHTML = paloRandom.simbolo;
};


window.onload = function() {
  generarNuevaCarta(); 

 
  document.querySelector("#btn-nueva-carta").addEventListener("click", generarNuevaCarta);
};