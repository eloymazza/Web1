$("document").ready(function() {

    class Juego{

        constructor(){
            this.modo = "";
            this.p1 = new Jugador();
            this.p2 = new Jugador();
            this.tabla = new TablaDeRelaciones();
        }

        setearModo(modoElegido){
            this.modo = modoElegido;
        }
        getModo(){
            return this.modo;
        }

        jugar(){

        }
    }

    class Jugador{

        constructor(creditoInicial){
            this.credito = creditoInicial;
            this.eleccion = undefined;
        }
        actualizarCredito(cantidad){
            this.credito += cantidad;
        }
        setEleccion(eleccion){
            this.eleccion = eleccion;
        }
    }

    class TablaDeRelaciones{

        constructor(){
            this.tabla = {

                "piedra": {
                    "piedra": "empate",
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
            }
        }

        decidirGanador(eleccionJ1, eleccionJ2){
            return this.tabla[eleccionJ1][eleccionJ2];       // Muchas gracias a los muchachos de StackOverFlow !!!
        };

    }

    // Termina seccion objetos

    function insertarPantallaDeJuego(data) {
        
        setTimeout(function(){
            console.log(data);
            $(".cuerpo").html(data);
         }, 3000);
        
    }

    function renderPantallaDeJuego(modoDeJuego) {
        
        console.log(modoDeJuego);
        $.ajax({
            "url": "http://localhost:82/Proyectos/Web1/Piedra%20Papel%20o%20Tijeras,%20Lagarto,%20Spock/partial/pantalla-juego-" + modoDeJuego + ".html",
            "method": "GET",
            "dataType": "HTML",
            "success": insertarPantallaDeJuego,
        });
        
    }

    $(".boton").on("click", function(){

        $(".marco").fadeTo(2000, 0);

        let juego = new Juego();
        juego.setearModo(event.target.name);
        renderPantallaDeJuego(juego.getModo());
        
    });

    
});