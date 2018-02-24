function Mostrar()
{

	var maximo;
	var minimo;
	var numero;
	var respuesta;
	var flag=0;

do
{
	numero=parseInt(prompt("ingrese un número: "));

	if(numero>mayor||flag==0)
	{
		mayor=numero;
	}

	if(numero<menor||flag==0)
	{
		menor=numero;
		flag=1;
	}
	respuesta=prompt("desea continuar?: ");
}

while(respuesta=='si')
{
	document.getElementById('maximo').value="El mayor es "+mayor;
	document.getElementById('minimo').value="El menor es "+menor;
}
//esto del flag no anda!!!

	/* 
	// declarar variables
	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta;

	do{
		numero=parseInt(prompt("ingrese un número: "));
		contador=contador + 1;
		if(contador==1)
		{
			mayor=numero;
			menor=numero;
		}
		
		if(numero>mayor)
		{
			mayor=numero;
		}

		if(numero<menor)
		{
			menor=numero;
		}
		respuesta=prompt("desea continuar?: ");
	}
	while(respuesta=='si')
	{
		document.getElementById('maximo').value="El mayor es "+mayor;
		document.getElementById('minimo').value="El menor es "+menor;
	
	}

*/


}//FIN DE LA FUNCIÓN