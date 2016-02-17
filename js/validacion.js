$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();
//        var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var expr1 = /^[a-zA-Z]*$/
        var usuario = $("input[name=usuario]").val();
        var contrasena = $("input[name=contrasena]").val();
        //console.log(usuario, contrasena);
        if( usuario =="" && contrasena == ""){
            $("div#wrapper_form").effect("shake", {direction: "left", distance:8,times:3},500);
            $("div#error_form").html("<h4>Porfavor llene los campos</h4>");
            return false;
        };
        if (usuario == "" || !expr1.test(usuario)) {
          $("div#wrapper_usuario").effect("shake", {direction: "left", distance:8,times:3},500);
            $("div#error_usuario").html("<h4>error de usuario</h4>");
//            $("<h4>error usuario</h4>").appendTo("div#error_usuario").hide().fadeIn(1000);
//                var duplicado = $("<h4>error usuario</h4>").length;
//               parseInt (duplicado);
//                    console.log(duplicado);
//                if( duplicado == 0){
//                        $("<h4>error usuario</h4>").remove();
//                };
            return false;
        } else {
            $("div#error_usuario").remove();
            console.log("usuario correcto")
        };
        if (contrasena == "") {
            $("div#wrapper_contrasena").effect("shake", {direction: "left", distance:8,times:3},500);
            $("div#error_contrasena").html("<h4>error de contraseña</h4>");
            return false;
        } else {
            $("div#error_contrasena").remove();
            console.log("contraseña correcta")
        };
      
    });


});