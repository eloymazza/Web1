
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

    function enlazarBotones(){
        $(".boton-borrar").on("click", function(){
            borrarFila(this);
        });
    }

    function mostrarTabla(data){
        
        let contenido = "";
        let pos = 0;
        for(let fila of data.information){
            contenido += "<tr><td>" + fila.thing.evento + "</td>"+ "<td>" + fila.thing.descripcion + "</td>"+
            "<td>" + fila.thing.fecha + "</td>"+ "<td>" + fila.thing.hora + "</td>" +
            "<td><button type='button' class='btn boton-borrar' data-id='"+ data.information[pos]._id + "'" + 
            ">Borrar</button></td>" + "</tr>";
            pos++;
        }
        $(".cuerpo-tabla").html(contenido);
        enlazarBotones();
    }

    function eliminadoOK() {
        alert("Eliminado exitosamente");
        actualizarTabla();
    }

    function borrarFila(boton) {
        let idFila = $(boton).data("id");
        $.ajax({
			"url":"http://web-unicen.herokuapp.com/api/thing/"+idFila,
			"method": "DELETE",
			"success": eliminadoOK,
			"error": function(xmlhr, response, error){
				console.log(error);
			}
		}
	);
    }
