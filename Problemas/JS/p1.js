function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which

    if(teclado == 8)return true;

    var patron = /[0-9\d .]/

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


}

function validarm(e){

    var teclado = (document.all)?e.keyCode:e.which


    if(teclado == 8)return true;

    var patron = /[0-9]/

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);

}

function interes(){

    var valor = document.formulario.cantidad.value;
    var mes = document.formulario.meses.value;

    var mes_1 = parseInt(mes)
    var result= parseInt(valor);


    var interes = result*(mes_1*0.02);


    var total = result+mes_1+interes;

    document.formulario.sueldoti.value = "$" +total;

}



function borrar(){

    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.meses.value = "";

}