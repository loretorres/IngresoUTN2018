/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var Num1;
    var Num2;
    var resultado;
    Num1=parseInt(document.getElementById("numeroDividendo").value);
    Num2=parseInt(document.getElementById("numeroDivisor").value);
    resultado=Num1%Num2;
    alert("el resto es "+resultado);    
}
