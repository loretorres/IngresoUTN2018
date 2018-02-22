function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while (contador<5)
	{
		numero=parseInt(prompt("ingrese un número: "));
		contador=contador + 1;
		acumulador=acumulador + numero;
	}
promedio=acumulador/5;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN

/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/