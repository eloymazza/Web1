
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
        console.log(data);
    }
