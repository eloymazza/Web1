$("document").ready(function() {
    let nombreSeccion;
    $("a").on("click", function(){
        console.log(event);
        nombreSeccion = event.target.id;
        $.ajax({
            "url": "http://localhost:82/Proyectos/ejercicio1/" + nombreSeccion + ".html",
            "method": "GET",
            "dataType": "HTML",
            "success": function (data, textStatus) {
                $(".noticiaPrincipal").html(data);
            }
        });
        $(".contenedor").html("Cargando");
    });
    
});