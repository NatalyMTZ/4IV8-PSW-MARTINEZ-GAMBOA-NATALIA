  
function validar(formulario){

    /* 
    Queremos validar que se escriban mas de 5 caracteres en el campo de nombre,
    */

    if(formulario.nombre.valur.lenght < 5){

        alert("Por favor escribe mñas de 5 caracteres en el campo nombre");
        //Focus posiciona el cursor en donde esta mal
        formulario.nombre.focus();

    return false;

    }


    // Validar que el nombre acepte solo leras

    var checkOk = "QWERYTUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuipoasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allValid = true;

    for(var i = 0; i < checkOk.lenght; i++){

        var ch = checkStr.charAt(i);

            for(var j = 0; j<checkOk.length; j++)
                if(ch == checkOk.charAt(j))
                 break;

            if(j == checkOk.lenght){

                allValid= false;
                    break;

            }

    }

    if(!allValid){

        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;


    }


    /*
    
    Vamos a validar solo numeros
    
    */

    var checkOk = "1234567890";

    var checkStr = formulario.edad.value;

    var allValid = true;

    for(var i = 0; i < checkOk.lenght; i++){

        var ch = checkStr.charAt(i);

            for(var j = 0; j<checkOk.length; j++)
                if(ch == checkOk.charAt(j))
                 break;

            if(j == checkOk.lenght){

                allValid= false;
                    break;

            }

    }

    if(!allValid){

        alert("Escribe solo números en el campo edad");
        formulario.edad.focus();
        return false;


    }


    /*
    VAlidar correo eletronico
    Se utilizan expresiones regulares
    Poder diferenciar una cadena de caracteres y definir que caracteres 
    son validos de acuerdo a una condición
    
    */


    var txt = formulario.email.value;

    //expresión regular

    //Diagonal invertida s se refiere a una cadena
    //antes del arroba hay una cadena
    //Cuando colocamos parentesis le  estamos diceiendo que otros elementos puede agregar a la expresión
    var b = /^[^@\s] + @ [^@\.\s] + (\.[^@\.\s]) + $/;

    alert("Email" + (b.test(txt)?"":"no")+"valido");
    
    return b.test(txt);



}