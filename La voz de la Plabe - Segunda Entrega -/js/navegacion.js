$("document").ready(function() {

    function handlerNavegacion() {
        $("a").on("click", function(){
             partialRender(event.target.id);
        });
    }
    
    function cargarContenido(data, nombreSeccion) {
        $(".contenido").html(data);
        if(nombreSeccion === "coliseo"){
            actualizarTabla();
        }
    }


    function partialRender(nombreSeccion){

        $.ajax({
            "url": "partial/" + nombreSeccion + ".html",
            "method": "GET",
            "dataType": "HTML",
            "success": function(data){
                cargarContenido(data, nombreSeccion);
            }
        });
    }

    partialRender("home");
    handlerNavegacion();

});