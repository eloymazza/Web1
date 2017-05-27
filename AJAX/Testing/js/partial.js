$("document").ready(function(){

    $("#cargar").on("click", function () {
        $.ajax({
            "url": "http://localhost/dashboard/404.html",
            "method": "GET",
            "dataType": "HTML",
            "success": function (data, textStatus) {
                console.log("entre");
                $("#contenedor").html(data);
                $(".js-comportamiento").on("click", function(){
                });
            }
        });
        $("#contenedor").html("Cargando");
    });

});
