$("document").ready(function() {
    let nombreSeccion;
    $("a").on("click", function(){
        nombreSeccion = event.target.id;
        console.log(nombreSeccion);
        $.ajax({
            "url": "http://localhost/Proyectos/practicoAjaxPartialRender/" + nombreSeccion + ".html",
            "method": "GET",
            "dataType": "HTML",
            "success": function (data, textStatus) {
                $(".noticiaPrincipal").html(data);
            }
        });
        $(".contenedor").html("Cargando");
    });
    
});