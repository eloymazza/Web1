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
            const empata = 1;
        }

    }
    
});