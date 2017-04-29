"use strict"
// Valores para validacion y manejo de los indices del array (pos 0 = piedra, 1 = papel, 2 = tijera)
const piedra = 0;
const papel = 1;
const tijera = 2;

// Sirve para indicar que se ingreso un valor invalido.
const invalido = -1; 
// Valores para generar la matriz de gana/pierde de cada elemento. Tambien para saber si el p1 gano o perdió. 
const pierde = -1;
const gana = 1;
const empata = 0;

// Arreglos para guardar los valors de gana/pierde que conformaran la matriz.
// El primer indice es piedra, el segundo pepel, el tercero tijera.
const propPiedra = [empata, pierde, gana];
const propPapel = [gana, empata, pierde];
const propTijera = [pierde, gana, empata];

// Matriz generada a base de los arreglos anteriores.
const matriz = [propPiedra, propPapel, propTijera];

// Valores necesarios para llevar la cuenta de puntuacion, eleccion anterior de la pc y cantidad de partidas jugadas.
let anteriorPc = "";
let numeroPartida = 0;
let puntuacionP1 = 0;
let puntuacionPc = 0;

// Obtengo el cuerpo de la tabla para insetarle elementos luego.
let cuerpoTabla = document.getElementById("cuerpoTabla");

// Estas variables sirven para guardar las elecciones en tipo string de cada jugador.
let elementoP1 = "";
let elementoPc = "";

// Esta variable sirve para indicar si el modo injusto esta activado o no.
let modoPredecible = false;

let contadorP1 = document.getElementById("puntuacionP1");
let contadorPc = document.getElementById("puntuacionPc");
// Setea lo necesario para que la ronda comienze y la rondaW ejecuta la funcion "jugar"
function setearRonda() {

  let miEleccion;
  let entrada =  document.getElementById("seleccion").value;
  elementoP1 = entrada;
  miEleccion = transformarEleccion(entrada);
  document.getElementById("imagenP1").src = "css/images/" + miEleccion + ".png";
  // Si la eleccion no es ni piedra, papel o tijera, envia un alert y cancela la inicializacion de la ronda.
  if(!validarEleccion(miEleccion)){

      alert("Valor invalido, debes elegir entre piedra, papel, o tijera");
      document.getElementById("imagenP1").src = "css/images/error.png";
      return;
   }  
  // La pc elige su elemento.
 let eleccionPc = elegirPc(anteriorPc);
 document.getElementById("imagenPc").src = "css/images/" + eleccionPc + ".png";
 anteriorPc = eleccionPc;
 // Transformo a String la eleccion de la pc
 elementoPc = transformarEnString(eleccionPc);
 document.getElementById("nombreEleccionPc").innerText = elementoPc;
 // Comienza la ronda  
 jugarRonda(miEleccion, eleccionPc);
 numeroPartida++;
}


// Transforma la entrada de String a integer para poder validarla y luego comparar con la matriz de pierde/gana
function transformarEleccion(entrada) {

    entrada = entrada.toLowerCase();
    
    switch (entrada) {
        case "piedra": return piedra; 
        case "papel": return papel;
        case "tijera": return tijera;
        default: return invalido;
    }

}

// Transforma la eleccion de la pc en string para poder mostrarla al cliente
function transformarEnString(eleccion) {
    switch (eleccion) {
        case 0: return "Piedra";
        case 1: return "Papel";
        case 2: return "Tijera";
    }
}

function validarEleccion(eleccion) {
    return eleccion > -1;
}

// Elige pc: Si en la anterior la pc elegio tijera, elige si o si piedra. Sino elige un elemento al azar
function elegirPc(anteriorPc) {
    if(modoPredecible && anteriorPc === tijera){
        return piedra;
    }
    return (Math.floor(Math.random()*3));
}

/* Con la eleccion de ambos jugadores como parametro, se checkea en la matriz quien es el vencedor y se asignan los puntos 
 en consecuencia.
 */
function jugarRonda(eleccionP1, eleccionPc){

    let resultado = matriz[eleccionP1][eleccionPc];
    if(resultado === 1){
        puntuacionP1++;
        contadorP1.innerText = puntuacionP1;
        actualizarTabla("Jugador")
    }
    else if(resultado === -1){
        puntuacionPc++;
        actualizarTabla("Pc");
        contadorPc.innerText = puntuacionPc;
    }
    else{
        actualizarTabla("Empate");
    }
}

// Se actualiza la tabla que registra el numero de partida y el ganador en cada una.
function actualizarTabla(ganador) {

    cuerpoTabla.innerHTML += "<tr>" + 
            "<td>" + numeroPartida + "</td>" +
            "<td>" + elementoP1 + "</td>" +
            "<td>" + elementoPc + "</td>" +
            "<td>" + ganador + "</td>" +
        "</tr>";
}

// Resetea la tabla de partidas
function reset() {
    cuerpoTabla.innerHTML = "";
    numeroPartida = 0;  
    puntuacionP1 = 0;
    puntuacionPc = 0;
    contadorP1.innerText = 0;
    contadorPc.innerText = 0;  
}

// Setea ronda de manera mas rapida solo apretando enter.
window.addEventListener("keydown", seleccionRapida);

function seleccionRapida() {

    if(event.code === "Enter"){
        setearRonda();
    }
}

function cambiarDificultad(checked) {
    modoPredecible = checked;
}
