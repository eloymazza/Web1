$("document").ready(function() {

    class Juego{

        constructor(j1,j2){
            this.jugador1 = j1;
            this.jugador2 = j2;
            this.tablaDeRelaciones = new TablaDeRelaciones();
        }
        jugar(){
            if(this.checkearCredito()){
                let resultado = this.decidirGanador();
                console.log(resultado);
                if(resultado === "gana"){
                    this.mostrarGanador(this.jugador1);
                    this.jugador1.actualizarCredito(premioApuesta * this.spockFriendly());
                    this.jugador2.actualizarCredito(costoJugada);
                }
                else if(resultado === "pierde"){
                    this.mostrarGanador(this.jugador2);
                    this.jugador1.actualizarCredito(costoJugada);
                    this.jugador2.actualizarCredito(premioApuesta);
                }
                else{
                    alert("Hubo empate");
                    this.jugador1.actualizarCredito(costoJugada);
                    this.jugador2.actualizarCredito(costoJugada);
                }
            }
            else{
                alert("El credito de alguno de los jugadores no es suficiente para seguir jugando");
            }
        }
        checkearCredito(){
            return this.jugador1.creditoSuficiente() && this.jugador2.creditoSuficiente();
        }
        decidirGanador(){
            return this.tablaDeRelaciones.decidirGanador(this.jugador1.getEleccion(), this.jugador2.getEleccion());
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
    }

    class Jugador{

       constructor(nombre,creditoInicial, panelCredito){
           this.credito = creditoInicial;
           this.panelCredito = panelCredito;
           this.eleccion = "piedra";
           this.nombre = nombre;
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
    }

    class JugadorHumano extends Jugador{

        constructor(nombre,creditoInicial, panelCredito){
            super(nombre,creditoInicial, panelCredito);
        }
        elegir(eleccion){
            this.eleccion = eleccion;
        }
        getEleccion(){
           return this.eleccion;
       }

    }

    class JugadorPC extends Jugador{

        constructor(nombre,creditoInicial, panelCredito){
            super(nombre,creditoInicial, panelCredito);
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
                    "piedra": "empataste",
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

    // Termina seccion objetos

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

        let j1 = new JugadorHumano("Jugador 1", creditoInicial, $(".js-credito-j1"));
        let j2;
        if(modoElegido === "Vs-Pc"){
            j2 = new JugadorPC("Jugador pc", creditoInicial, $(".js-credito-pc"));
        }
        else{
            j2 = new JugadorHumano("Jugador 2", creditoInicial, $(".js-credito-j2"));
        }

        let juego = new Juego(j1,j2);

        inicializarEventHandlers(j1,j2, juego);
        
    }

    function renderizarContrincante(modoElegido) {
        
        $.ajax({

            "url": "http://localhost/proyectos/Web1/Piedra%20Papel%20o%20Tijeras,%20Lagarto,%20Spock/partial/marco-"+modoElegido+".html",
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
            "url": "http://localhost/proyectos/Web1/Piedra%20Papel%20o%20Tijeras,%20Lagarto,%20Spock/partial/pantalla-juego.html",
            "method": "GET",
            "dataType": "HTML",
            "success": function(data){
                $(".js-cuerpo").html(data);
                renderizarContrincante(modoElegido);
            }

        });

    });
       

});