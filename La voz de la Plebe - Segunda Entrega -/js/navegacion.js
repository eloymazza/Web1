$("document").ready(function() {


    function handlerNavegacion() {
        $("a").on("click", function(){
            console.log(event.target.id)
             partialRender(event.target.id);
        });
    }

    function cargarContenido(data, nombreSeccion) {
        $(".contenido").html(data);
        if(nombreSeccion === "coliseo"){
            actualizarTabla();
            enlazarBotonCrearFila();
        }
    }
    function enlazarBotonCrearFila() {
        $(".js-cargar-evento").on("click", function() {
            crearFila(event);
        });
    }

    function enlazarBotonFormularioSuscripcion(){
        $(".js-solicitar-papiro").on("click", function() {

            alert("Lo sentimos, todos nuestros canillitas han sido secuestraros, asesinados," + 
            " o se han unido al enemigo");
            
        });
    }

    
    function partialRender(nombreSeccion){

        $.ajax({
            "url": "partial/" + nombreSeccion + ".html",
            "method": "GET",
            "dataType": "HTML",
            "success": function(data){
                cargarContenido(data, nombreSeccion);
                if(nombreSeccion === "home"){
                    enlazarBotonFormularioSuscripcion();
                }
            }
        });
    }

    partialRender("home");
    handlerNavegacion();

});