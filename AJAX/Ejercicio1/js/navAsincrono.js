$("document").ready(function() {
    let nombreSeccion;
    $("a").on("click", function(){
        console.log(event);
        nombreSeccion = event.target.id;
        $.ajax({
            "url": "partial/" + nombreSeccion + ".html",
            "method": "GET",
            "dataType": "HTML",
            "success": function (data, textStatus) {
                $(".noticiaPrincipal").html(data);
            }
        });
        $(".contenedor").html("Cargando");
    });
    
});