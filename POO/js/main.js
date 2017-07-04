$("document").ready(function() {

    // Ejercicio 1 y 2

    /* 

    class Humano {

        constructor(nombre, genero, direccion, telefono){
            this.nombre = nombre;
            this.genero = genero;
            this.direccion = direccion;
            this.telefono = telefono;
        }
        saludar(){
            alert(`hola, mi nombre es ${this.nombre}, mi direccion es ${this.direccion}, mi telefono es ${this.telefono}`);
        }
    }

    class Estudiante extends Humano {

        constructor(nombre, genero, direccion, telefono, institucion, anio){
            super(nombre, genero, direccion, telefono);
            this.institucion = institucion;
            this.anio = anio;
            this.listaDeNotas = [];
        }
        agregarNota(nota){
            this.listaDeNotas.push(nota);
        }
        getPromedio(){
            let total = 0;
            for(let nota of this.listaDeNotas){
                total+= nota;
            }
            return total/this.listaDeNotas.length;
        }
        tieneAplazo(){
            for(let nota of this.listaDeNotas){
                if(nota < 7){
                    return true;
                }
            }
            return false;
        }
    }

    class Padre extends Humano{

        constructor(nombre, genero, direccion, telefono){
            super(nombre, genero, direccion, telefono);
            this.hijos = [];
        }
        agragarHijo(hijo){
            this.hijos.push(hijo);
        }
        getHijo(nombre){
            for(let hijo of this.hijos){
                if(hijo.nombre === nombre){
                    return hijo;
                }
            }
        }
        getHijosConAplazos(){
            let hijosConAplazos = [];
            for(let hijo of this.hijos){
                if(hijo.tieneAplazo()){
                     hijosConAplazos.push(hijo.nombre);
                }
            }
            return hijosConAplazos;
        }
    }
    
    // Ejercicio 1 let humano1 = new Humano("Eloy", "Masculino", "Saavedra 750", "1233");
    // humano1.saludar(); 

    // Ejercicio 2

    let pepe = new Estudiante("Pepe", "Masculino", "Ascuenaga 320", "5", "Normal", 1);
    let pablo = new Estudiante("Pablo", "Masculino", "Ascuenaga 320", "6", "Caneva", 2);
    let sara = new Estudiante("Sara", "Femenino", "Ascuenaga 320", "8", "Normal", 4);
    let felipe = new Estudiante("Felipe", "Masculino", "Ascuenaga 320", "9", "Caneva", 7);

    pepe.agregarNota(7);
    pepe.agregarNota(8);
    pepe.agregarNota(5);

    pablo.agregarNota(7);
    pablo.agregarNota(8);
    pablo.agregarNota(9);
    
    sara.agregarNota(7);
    sara.agregarNota(6);
    sara.agregarNota(9);

    felipe.agregarNota(7);
    felipe.agregarNota(8);
    felipe.agregarNota(5);
    
    let marcos = new Padre("Marcos", "Masculino", "Ascuenaga 320", "11");

    marcos.agragarHijo(pepe);
    marcos.agragarHijo(pablo);
    marcos.agragarHijo(sara);
    marcos.agragarHijo(felipe);

    alert(marcos.getHijosConAplazos());

    */

    // Ejercicio 5

    class Mazo{

        constructor(){
            this.cartas = [];
            this.crearCartas();
            this.cantCartas = 48;
        }
        crearCartas(){
            let palos = ["espada", "basto", "oro", "copa"];
            for(let palo of palos){
                for (let valor = 1;  valor < 13; valor++) {
                     this.cartas.push(new Carta(valor, palo));
                }
            }
        }
        quedanCartas(){
            return this.cantCartas > 0;
        }
        mostrarCartas(){
            for(let carta of this.cartas){
                console.log(carta);
            }
        }
        getCarta(){
            this.cantCartas--;
            return this.cartas.pop();
        }
        shuffle() {
            let m = this.cartas.length;

            // While there remain elements to shuffle…
            while (m) {

                // Pick a remaining element…
                let i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                let t = this.cartas[m];
                this.cartas[m] = this.cartas[i];
                this.cartas[i] = t;
            }

            return this.cartas;
            }
    } 

    class Carta{
        
        constructor(valor, palo){
            this.valor = valor;
            this.palo = palo;
        }
        getValor(){
            return this.valor;
        }
        getPalo(){
            return this.palo;
        }
        esUnoDeOro(){
            if(this.valor === 1 && this.palo === "oro"){
                return true;
            }
            return false;
        }
    }

    class Jugador{
        constructor(nombre, marco){
            this.nombre = nombre;
            this.marco = marco;
            this.mano = undefined;
        }
        setMano(mano){
            this.mano = mano;
        }
        sacarCarta(){
            let carta = this.mano.pop();
            if(carta.esUnoDeOro()){
                alert(`Perdio el jugador ${this.nombre}`);
                this.marco.html(`${carta.getValor()} de ${carta.getPalo()}`);
                return true;
            }
            this.marco.html(`${carta.getValor()} de ${carta.getPalo()}`);
            return false;
        }
    }

    class Juego{

        constructor(jugador1, jugador2, mazo){
            this.jugador1 = jugador1;
            this.jugador2 = jugador2;
            this.mazo = mazo;
            this.setJuego();
        }
        setJuego(){
            let mazoJ1 = [];
            let mazoJ2 = [];
            while(this.mazo.quedanCartas()){
                mazoJ1.push(this.mazo.getCarta());
                mazoJ2.push(this.mazo.getCarta());
            }
            this.jugador1.setMano(mazoJ1);
            this.jugador2.setMano(mazoJ2);
        }
        jugar(){
            if(this.jugador1.sacarCarta() || this.jugador2.sacarCarta()){
                alert("juego terminado");
            }
        }

    }



    let mazo = new Mazo();
    mazo.shuffle();
    let jugador1 = new Jugador("Eloy", $(".js-jugador-1"));
    let jugador2 = new Jugador("Juan Carlos", $(".js-jugador-2"));
    let juego = new Juego(jugador1, jugador2, mazo);

    $(".js-jugar").on("click", function(){
        juego.jugar();
    });


});