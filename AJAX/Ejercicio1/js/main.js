$("document").ready(function() {
    
    $("a").on("click", function(){
        $.ajax({
            "url": "http://localhost/Proyectos/ejercicio1/politica.html",
            "method": "GET",
            "dataType": "HTML",
            "success": function (data, textStatus) {
                $(".contenedorNoticiaPrincipal").html(data);
            }
        });
        $(".contenedor").html("Cargando");
    });
    
});