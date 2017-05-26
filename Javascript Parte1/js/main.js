
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

/* Ejercicio 7 

function validar() {

    var inputs = document.getElementsByTagName("input");
    var textArea = document.getElementById("comentarios");

    if(checkNombreApellido(inputs[0].value) && checkNombreApellido(inputs[1].value) && 
    checkEMail(inputs[2].value) && checkComent(textArea)){
        alert("Todo en orden");
    }
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
    if(!validarNumeroLetra(primeraDivision[0])){
        return false;
    }
    var segundaDivision = primeraDivision[1].split(".com.");
    if(segundaDivision.length != 2){
        alert("Error de validacion: El email ingresado no contiene .com.");
        return false;
    }
    if(!validarNumeroLetra(segundaDivision[0])){
        return false;
    }
    if(!validarLetra(segundaDivision[1])){
        return false;
    }
    return true;
    
}

function validarNumeroLetra(elem) {
    
    l = elem.length;
    
    if(l === 0){
        alert("debes ingresar al menos un caracter");
        return false;
    }

    var currentCharCode = "";
    for(var i = 0; i < l; i++) {
        currentCharCode = elem.charCodeAt(i);
        if(!(esLetra(currentCharCode) || esNumero(currentCharCode))){
            alert("Error de validacion: El email ingresado debe contener solo numeros o letras luego del arroba");
            return false;
        }
    }
    return true;
}

function validarLetra(elem) {
    
    l = elem.length;
    
    if(l === 0){
        alert("debes ingresar al menos un caracter");
        return false;
    }

    var currentCharCode = "";
    for(var i = 0; i < l; i++) {
        currentCharCode = elem.charCodeAt(i);
        if(!(esLetra(currentCharCode))){
            alert("Error de validacion: El email ingresado debe contener solo letras luego del arroba");
            return false;
        }
    }
    return true;
}

function esNumero(charCode) {
    return charCode > 47 && charCode < 58;
}
function esLetra(charCode) {
    return charCode > 96 && charCode < 123;
}

function checkComent(comment) {
    return comment.value !== "";
}
*/

/* Ejercicio 8 */

