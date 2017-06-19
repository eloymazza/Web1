$("document").ready(function() {

    /* Seccion objetos */

    class Juego{

        constructor(j1,j2){
            this.jugador1 = j1;
            this.jugador2 = j2;
            this.tablaDeRelaciones = new TablaDeRelaciones();
        }
        jugar(){
            if(this.checkearCredito()){
                let eleccionj1 = this.jugador1.getEleccion();
                let eleccionj2 = this.jugador2.getEleccion();
                this.actualizarElecciones(eleccionj1, eleccionj2);
                let multiplicador = 1;
                let resultado = this.decidirGanador(eleccionj1, eleccionj2);
                if(resultado === "gana"){
                    multiplicador = this.spockFriendly();
                    this.actualizarPantalla(this.jugador1, multiplicador);
                }
                else if(resultado === "pierde"){
                    this.actualizarPantalla(this.jugador2, multiplicador);
                }
                else {
                    alert("Hubo empate");
                }
                this.jugador1.actualizarCredito(costoJugada);
                this.jugador2.actualizarCredito(costoJugada);
            }
            else{
                alert("El credito de alguno de los jugadores no es suficiente para seguir jugando");
            }
        }
        checkearCredito(){
            let creditosValidos = true;
            if(!this.jugador1.creditoSuficiente()){
                alert("Jugador 1 se ha quedado sin credito");
                creditosValidos = false;
            }
            if(!this.jugador2.creditoSuficiente()){
                alert("Jugador 2 se ha quedado sin credito");
                creditosValidos = false;
            }
            return creditosValidos;
        }
        decidirGanador(eleccionj1, eleccionj2){
            return this.tablaDeRelaciones.decidirGanador(eleccionj1, eleccionj2);
        }
        actualizarPantalla(ganador, multiplicador){
            this.mostrarGanador(ganador);
            ganador.actualizarCredito(premioApuesta * multiplicador);
            ganador.actualizarPartidasGanadas();
        }
        spockFriendly(){
            if(this.jugador1.getEleccion() === "spock"){
                return 2;
            }
            return 1;
        }
        mostrarGanador(ganadorRonda){
                alert("El ganador es: " + ganadorRonda.getNombre());   
        }
        actualizarElecciones(eleccionj1, eleccionj2){
            $(".js-imagen-j1").attr("src", "css/images/pantalla-juego/"+ eleccionj1 +".png");
            $(".js-imagen-j2").attr("src","css/images/pantalla-juego/"+ eleccionj2 +".png");
        }

    }

    

    class Jugador{

       constructor(nombre, panelCredito, celdaContador){
           this.nombre = nombre;
           this.credito = creditoInicial;
           this.panelCredito = panelCredito;
           this.eleccion = "piedra";
           this.contador = celdaContador;
           this.partidasGanadas = 0;
       }
       creditoSuficiente(){
           return this.credito >= 5;
       }
       actualizarCredito(valor){
            this.credito += valor;
            this.panelCredito.html(this.credito);
       }
       getNombre(){
           return this.nombre;
       }
       actualizarPartidasGanadas(){
            this.partidasGanadas++;
            this.contador.html(this.partidasGanadas);
       }
    }

    class JugadorHumano extends Jugador{

        constructor(nombre, panelCredito,celdaContador){
            super(nombre, panelCredito, celdaContador);
        }
        elegir(eleccion){
            this.eleccion = eleccion;
        }
        getEleccion(){
           return this.eleccion;
       }
    }

    class JugadorPC extends Jugador{

        constructor(nombre, panelCredito, celdaContador){
            super(nombre, panelCredito, celdaContador);
        }
        getEleccion(){
            this.eleccion = this.elegir();
            return this.eleccion;
       }
        elegir(){
            let random = Math.floor(Math.random()*5);
            switch (random) {
                case 0: return "piedra";
                case 1: return "papel";    
                case 2: return "tijera";
                case 3: return "lagarto";
                case 4: return "spock"; 
                default: return "piedra";
            }
        }

    }

    class TablaDeRelaciones{

        constructor(){
            this.tabla = {

                "piedra": {
                    "piedra": "empata",
                    "papel": "pierde",
                    "tijera": "gana",
                    "lagarto": "gana",
                    "spock": "pierde"
                },
                "papel": {
                    "piedra": "gana",
                    "papel": "empata",
                    "tijera": "pierde",
                    "lagarto": "pierde",
                    "sopck": "gana"
                },
                "tijera": {
                    "piedra" : "pierde",
                    "papel" : "gana",
                    "tijera" : "empata",
                    "lagarto" : "gana",
                    "spock" : "pierde"
                },
                "lagarto": {
                    "piedra": "pierde",
                    "papel": "gana",
                    "tijera": "pierde",
                    "lagarto": "empata",
                    "sopck": "gana"
                },
                "spock": {
                    "piedra": "gana",
                    "papel": "pierde",
                    "tijera": "gana",
                    "lagarto": "pierde",
                    "sopck": "empata"
                }
            };
        }

        decidirGanador(eleccionJ1, eleccionJ2){
            return this.tabla[eleccionJ1][eleccionJ2];       // Muchas gracias a los muchachos de StackOverFlow !!!
        }

    }

    //  Seccion de procedimientos

    const creditoInicial = 100;
    const costoJugada = -5;
    const premioApuesta = 5;

    function inicializarEventHandlers(j1, j2, juego) {
        
        $(".js-eleccion-j1").on("click", function(){
            j1.elegir(event.target.id);
        });
        $(".js-eleccion-j2").on("click", function(){
            j2.elegir(event.target.id);
        });
        $(".js-jugar").on("click", function (){
            juego.jugar();
        });
    }

    function iniciarJuego(modoElegido) {

        let j1 = new JugadorHumano("Jugador 1", $(".js-credito-j1"), $(".js-contador-j1"));
        let j2;
        if(modoElegido === "Vs-Pc"){
            j2 = new JugadorPC("Jugador pc", $(".js-credito-pc"), $(".js-contador-j2"));
        }
        else{
            j2 = new JugadorHumano("Jugador 2", $(".js-credito-j2"), $(".js-contador-j2"));
        }

        let juego = new Juego(j1,j2);
        

        inicializarEventHandlers(j1,j2, juego);
        
    }

    function renderizarContrincante(modoElegido) {
        
        $.ajax({

            "url": "partial/marco-"+modoElegido+".html",
            "method": "GET",
            "dataType": "HTML",
            "success": function(data){
                 $(".js-partial-vs").html(data);
                 iniciarJuego(modoElegido);
            }

        });

    }
    
    $(".js-elegir-modo").on("mouseup", function(){

        let modoElegido = this.innerText;
       
        $.ajax({
            "url": "partial/pantalla-juego.html",
            "method": "GET",
            "dataType": "HTML",
            "success": function(data){
                $(".js-cuerpo").html(data);
                renderizarContrincante(modoElegido);
            }

        });

    });
       

});