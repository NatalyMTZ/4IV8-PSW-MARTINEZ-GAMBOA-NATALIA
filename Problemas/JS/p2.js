function validarn(e){

    var teclado = (document.all)?e.keyCode:e.which

    if(teclado == 8)return true;

    var patron = /[0-9\d .]/

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);

}

function calculo(){

    var valorbase = document.formulario.sueldo.value;
    var valorventas = document.formulario.ventas.value;

    var valorbase_1 = parseInt(valorbase);
    var valorventas_1 = parseInt(valorventas);

    var comision = valorventas_1*(valorbase_1*0.10);

    var total = comision + valorbase_1;

    document.formulario.comision.value = "$" +comision;
    document.formulario.sueldoti.value = "$" +total;
}



function borrar(){
    document.formulario.sueldo.value = "";
    document.formulario.ventas.value = "";
    document.formulario.comision.value = "";
    document.formulario.sueldoti.value = "";
}