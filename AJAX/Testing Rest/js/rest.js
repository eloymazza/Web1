window.addEventListener("load",function name() {

    let inputGroup = $(".js-group-id");
    let infoGroup = $(".infoGroup");
    let inputID =  $(".js-item-id");
    let infoID = $(".infoItem");
    let inputGroupPost = $(".js-grupo-elegido");
    let infoPost = $(".js-informacion");

    function mostrarInfoGroup(data) {
        let html = "<h3> Mensajes: </h3>";
        for(let i of data.information){
            html+= "<p> Id: " + i._id + " " + i.thing + "</p>";
        }   
        infoGroup.append(html);
    }

    function mostrarInfoID(data) {
         infoID.append("<p>" + data.information.thing + "</p>");
    }

    function guardadoOK(data) {
        alert("Datos Guardados Existosamente");
        console.log(data);
    }

    $(".js-obtener-info-grupo").on("click", function () {

       let idGrupo = inputGroup.val();
        $.ajax(
            {
                "url": "http://web-unicen.herokuapp.com/api/thing/group/" + idGrupo,
                "method": "GET",
                "dataType": "JSON",
                "success": mostrarInfoGroup,
                "error": function () {
                    alert("Error en rest");
                },
            }
        );
    });

    $(".js-obtener-info-id").on("click", function(){

        let idItem = inputID.val();
        $.ajax(
            {
                "url": "http://web-unicen.herokuapp.com/api/thing/" + idItem,
                "method": "GET",
                "dataType": "JSON",
                "success": mostrarInfoID,
                "error": function () {
                    alert("Error en rest");
                },
            }
        );
    });

    $(".js-guardar-info").on("click", function (event) {
        event.preventDefault();
        let info = infoPost.val();
        let objeto = { 
            "group": 8,
            "thing": {
                "evento": "borrar",
                "descripcion": "borrar",
                "fecha": "borrar",
                "hora": "borrarj"
            },
        };
        $.ajax({
            "url" : "http://web-unicen.herokuapp.com/api/thing",
            "method": "POST",
            "dataType": "JSON",
            "data": JSON.stringify(objeto),
            "contentType": "application/json; charset=utf-8",
            "success": guardadoOK,
            "error": function () {
                    alert("Error en rest");
                },
        });

    });

});