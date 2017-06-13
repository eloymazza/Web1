$("document").ready(function() {

    class Juego{

        constructor(creditoInicial){
            this.modo = "";
            this.j1 = new Jugador(creditoInicial);
            this.j2 = new Jugador(creditoInicial);
            this.tabla = new TablaDeRelaciones();
        }

        setearModo(modoElegido){
            this.modo = modoElegido;
        }
        getModo(){
            return this.modo;
        }
        jugar(){
            this.j1.setEleccion($(".js-eleccion-j1").val());
            this.j2.setEleccion(Math.floor(Math.random()*5 +1));
            alert(tabla.decidirGanador(j1.getEleccion(), j2.getEleccion()));
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
        getEleccion(){
            return this.eleccion;
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

    const creditoInicial = 100;

    function escucharBotonJugar(juego){
        $(".js-jugar").on("click", function(){
            alert("hola");
            juego.jugar();
        });
    }


    function renderPantallaDeJuego(juego) {
        
        $.ajax({
            "url": "http://localhost:82/Proyectos/Web1/Piedra%20Papel%20o%20Tijeras,%20Lagarto,%20Spock/partial/pantalla-juego-" + juego.getModo() + ".html",
            "method": "GET",
            "dataType": "HTML",
            "success": function (data){
                 $(".cuerpo").html(data);
                 escucharBotonJugar(juego);
            }
        });
    }

    $(".boton").on("click", function(){

        let juego = new Juego(creditoInicial);
        juego.setearModo(event.target.name);
        renderPantallaDeJuego(juego);
        
    });

});