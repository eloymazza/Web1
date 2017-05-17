
/* Ejercicio1 
alert("hola");
*/

/* Ejercicio2 
function saludar(){
alert("hola");
}
*/

/* Ejercicio3  
function check(){
    var inputs = document.getElementsByTagName("input");
    var x = inputs[0].value;
    var y = inputs[1].value;

    /*if(x >= 0 && y < 0 || x < 0 && y >= 0){
        alert("se cumple");
    }
    */
    /*
    if( x >= 0 || y >= 0){
        alert("se cumple");
    }
   
}
*/

/* Ejercicio 4  
function insertar() {
var numeros = [];
for (var index = 1; index < 101; index++) {
    numeros[index] = index;
}
document.getElementsByTagName("body")[0].innerHTML = numeros;
}
*/ 

/* Ejercicio 5 
???????????????
*/

/* Ejercicio 6 

var rand = function() {
   return Math.floor(Math.random()*255);
};

function crearDiv() {
    
   var newDiv = document.createElement("div");
   newDiv.style.width = "100px";
   newDiv.style.height = "100px";
   newDiv.style.backgroundColor = "rgb(" + rand() + "," + rand() + "," + rand() + ")";
   newDiv.style.display = "inline-block";
   console.log(newDiv.style.backgroundColor);

   document.getElementsByTagName("body")[0].appendChild(newDiv);
   
*/

/* Ejercicio 6 */

function validar() {

    var inputs = document.getElementsByTagName("input");

    if(checkNombreApellido(inputs[0].value) && checkNombreApellido(inputs[1].value) && 
    checkEMail(inputs[2].value) && checkComent()){
        alert("Todo en orden");
    }
    alert("Vuelve a intentarlo");
}

function checkNombreApellido(string) {
    
    var length = string.length;
    if( string !== null && (length > 2 && length < 21)){
        return true;
    }
    alert("Error de validacion: Tanto el nombre como el apellido deben estar completos y tener entre 3 y 20 caracteres.");
    return false;
}

function checkEMail(email){

    var primeraDivision = email.split("@");
    if(primeraDivision.length != 2){
        alert("Error de validacion: El email ingresado no contiene @");
        return false;
    }
    
}

function esNumero(charCode) {
    return charCode > 47 && charCode < 58;
}
function esLetra(charCode) {
    return charCode > 96 && charCode < 123;
}