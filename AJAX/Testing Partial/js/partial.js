$("document").ready(function(){

    $("#cargar").on("click", function () {
        $.ajax({
            "url": "http://localhost/Proyectos/404.html",
            "method": "GET",
            "dataType": "HTML",
            "success": function (data, textStatus) {
                
            }
        });
        $(".js-contenedor").html("Cargando");
    });

});
