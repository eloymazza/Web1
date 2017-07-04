$("document").ready(function() {

    /* Ejercicio 2 

   // Jquery mode
    let pes = $("p");

    function setEventHandlers() {
        $(".esconder").on("click", esconder);
        $(".mostrar").on("click", mostrar);     
    }

   function esconder() {
       pes.hide();
   }
   function mostrar(){
       pes.show();
   }
    
    setEventHandlers();
    

    // Ecma mode

    let pes = document.querySelectorAll("p");
    
    function setEventHandlers() {

        document.querySelector(".esconder").addEventListener("click", esconder); 
        document.querySelector(".mostrar").addEventListener("click", mostrar);   
    }

    // Forma let of
    function esconder(){
       for(let p of pes){
           p.classList.add("oculto");
       }
    }
    // Forma arrow function
    function mostrar(){
        pes.forEach(p => p.classList.remove("oculto"));
    }

    setEventHandlers();
    */

    /* Ejercicio 3 

    // Jquery Mode
    let titulosYSubtitulos = [$("h1"), $("h2"), $("h3")];

    function setEventHandlers() {
        $(".toggle").on("click", toggle);
    }

    function toggle() {

        // Fore each version 
        titulosYSubtitulos.forEach(function(x) {
           x.toggleClass("color");
        }, this);

        // for let of version
        /*for(let h of titulosYSubtitulos){
            h.toggleClass("color");
        }
    }

    setEventHandlers();
    */

    /* Ejercicio 4 

    // JQuery Mode
    /*
    function setEventHandlers() {
        $(".js-cambiar-estilos").on("click", cambiarEstilos);
    }

    function cambiarEstilos() {
       
       let next = $("h1").next();
       while(next.is("p")){
           next.toggleClass("resaltar");
           next = next.next();
       }
    }
    
    setEventHandlers();
    

    // Ecma Mode

    function setEventHandlers() {
        
        document.querySelector(".js-cambiar-estilos").addEventListener("click", cambiarEstilos);
    }

    function cambiarEstilos() {
        
        let titulos = document.querySelectorAll("h1");
        let next;

        for(let titulo of titulos){
                    console.log(titulo.nextSibling);
            next = titulo.nextElementSibling;
            while(next.tagName === "P"){
                next.classList.toggle("resaltar");
                next = next.nextElementSibling;
            }

        }

    }

    setEventHandlers();

    */

     /* Ejercicio 5 

     // JQuery Mode
     
    function setEventHandlers() {
        $(".js-cambiar-estilos").on("click", cambiarEstilos);
    }


    function cambiarEstilos() {
        
        $("p>span").toggleClass("resaltar");
        alert("Cambio realizado");

    }

    setEventHandlers();

    // Ecma Mode Tbc

    */ 

    /* Ejercicio 6 

    $(".js-contar-parrafos").on("click", contarParrafos);
    $(".js-detectar-clases").on("click", detectarClases);
    
    function contarParrafos() {
       let pharagraphs = $("p");
       alert(pharagraphs.length);
    }

    function detectarClases() {
        let ps = $("p");
        let classArr = [];
        let classCont = [];
        let classOfP = "";
        for(let p of ps){
            classOfP = p.className;
            if($.inArray(classOfP,classArr) == -1){
                classArr.push(classOfP);
                classCont.push(1);
            }
            else{
                classCont[classArr.indexOf(classOfP)]++;
            }
        }
        let html = "";
        for(let i = 0; i < classCont.length; i++){
            html+= "<tr><td>"+ classArr[i] + "</td><td>" + classCont[i] + "</td></tr>";
        }
        $(".js-contenedor-tabla").html(html);
    }
    */ 
});