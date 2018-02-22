function Mostrar()
{

	//var contadorNegativos=0;
	var flag=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	do
	{
		numero=parseInt(prompt("ingrese un número: "));

		if(numero>=0)
		{
			positivo=positivo+numero;
		}
		else
		{
			negativo=negativo*numero;
			flag=0;
			//contadorNegativos=contadorNegativos+1;
		}
	
		respuesta=prompt("desea continuar?:");
	}while(respuesta=="s");

document.getElementById('suma').value=positivo;


if(flag==1)
{
	negativo=0
}
/*if(contadorNegativos==0)
{
	negativo=0;
}*/
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN

/*Enunciado:
Al presionar el botón pedir números hasta 
que el usuario quiera, sumar los que son positivos y multiplicar los negativos.*/