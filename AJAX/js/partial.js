$("document").ready(function() {

    $("#cargar").on("click", function () {
        $.ajax({
            "url": "index.php?",
            "method": "GET",
            "dataType": "HTML",
            "succes": function (data, textStatus) {
                $("#contenedor").html(data); 
                $("#comportamiento").on("click", function(){ 
                });
            }
            
        });
        $("#contenedor").html("Cargando");
    });

});