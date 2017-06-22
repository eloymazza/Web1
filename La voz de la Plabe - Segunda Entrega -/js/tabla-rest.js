
    function actualizarTabla() {
         $.ajax(
            {
                "url": "http://web-unicen.herokuapp.com/api/thing/group/8",
                "method": "GET",
                "dataType": "JSON",
                "success": mostrarTabla,
                "error": function () {
                    alert("Error en rest");
                },
            }
        );
    }

    function mostrarTabla(data){
        let contenido = "";
        let pos = 0;
        for(let fila of data.information){
            contenido += "<tr><td>" + fila.thing.evento + "</td>"+ "<td>" + fila.thing.descripcion + "</td>"+
            "<td>" + fila.thing.fecha + "</td>"+ "<td>" + fila.thing.hora + "</td>" +
            "<td><button type='button' class='btn js-borrar' data-id='"+ data.information[pos]._id + "'" + 
            ">Borrar</button></td>" + "</tr>";
            pos++;
        }
        $(".cuerpo-tabla").html(contenido);
        enlazarBotonesBorrar();
    }

    function enlazarBotonesBorrar(){
        
        $(".js-borrar").on("click", function(){
            borrarFila(this);
        });
    }

    function crearFila(event) {

        event.preventDefault();
        let elementos = $(".form-control");
        let objeto = {
            "group": 8,
            "thing": {
                "evento": elementos[0].value,
                "descripcion": elementos[1].value,
                "fecha": elementos[2].value,
                "hora": elementos[3].value,
            },
        };
         $.ajax({
            "url" : "http://web-unicen.herokuapp.com/api/thing",
            "method": "POST",
            "dataType": "JSON",
            "data": JSON.stringify(objeto),
            "contentType": "application/json; charset=utf-8",
            "success": accionExitosa,
            "error": function () {
                    alert("Error en rest");
                },
        });
    }

    function borrarFila(boton) {
        let idFila = $(boton).data("id");
        $.ajax({
			"url":"http://web-unicen.herokuapp.com/api/thing/"+idFila,
			"method": "DELETE",
			"success": accionExitosa,
			"error": function(xmlhr, response, error){
				console.log(error);
			}
		}
	);
    }

    function accionExitosa() {
        alert("Accion realizada exitosamente");
        actualizarTabla();
    }

