/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var Importe
    var Descuento
    var NuevoImporte

    Importe=parseInt(document.getElementById("importe").value);
    Descuento=Importe*0.25;
    NuevoImporte=Importe-Descuento;
    document.getElementById("resultado").value=NuevoImporte;
}
