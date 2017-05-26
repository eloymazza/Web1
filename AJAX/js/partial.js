$("document").ready(function() {

    $("#cargar").on("click", function () {      
        $.ajax({
            "url": "http://web-unicen.herokuapp.com/api/html",
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