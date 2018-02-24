/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/

function Mostrar()
{

	var contadorNeg=0;
	var contadorPos=0;
	var contadorCeros=0;
	var contadorPares;
	var acumuladorPos=0;
	var acumuladorNeg=0;
	var promedioPos;
	var promedioNeg;
	var seguir;
	var numero;
	var pares; 
	var diferencia;
	//declarar contadores y variables 
	var seguir="si";

	do
	{
	numero=parseInt(prompt("ingrese un número: "));

	if (numero>0)
	{
	contadorPos + contadorPos +1;
	acumuladorPos=acumuladorPos+numero;
	}
	
	else if (numero<0)
	{
		contadorNeg + contadorNeg + 1;
		acumuladorNeg=acumuladorNeg+numero;
	}

	else
	{
		contadorCeros++;
	}

	if (numero%2==0)
	{
		contadorPares++;
	}

		seguir=prompt("desea continuar?: ");
	}while(seguir=="si")
	
	
document.write("1- Suma de los negativos: "+ acumuladorNeg+)




}//FIN DE LA FUNCIÓN