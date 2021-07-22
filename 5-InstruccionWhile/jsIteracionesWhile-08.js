/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let suma=0;
	let num;
	let stop="no";
	let negativos=1;
	let positivos=0;

	while (stop != "si")
	{
		num = parseInt(prompt("escriba un numero: "));
		stop = prompt("desea finalizar?, si/no: ")
		suma = suma + num;
		if (num >= 0)
		{
			positivos = positivos + num;
		}	
		else if (num < 0)
		{
			negativos = negativos * num;
		}

	}
	document.getElementById("txtIdSuma").value=positivos;
	document.getElementById("txtIdProducto").value=negativos;


}//FIN DE LA FUNCIÓN