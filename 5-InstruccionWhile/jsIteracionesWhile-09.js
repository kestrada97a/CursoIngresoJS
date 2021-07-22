/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let max;
	let min;
	let flag=0;

	while(stop != "si")
	{
		numero = parseInt(prompt("escriba un numero: "));
		stop = prompt("desea finalizar, si/no: ");

		if(flag==0)
		{
			max=numero;
			min=numero;
			flag=1;
		}
		
		if(numero>max)
		{
			max=numero;
		}
		else if (numero<min)
		{
			min=numero;
		}

		

	}
	document.getElementById("txtIdMaximo").value=max;
	document.getElementById("txtIdMinimo").value=min;



	

}//FIN DE LA FUNCIÓN