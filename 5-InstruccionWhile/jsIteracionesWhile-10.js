/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let negativos=0;
	let positivos=0;
	let ceros=0;
	let pares=0;
	let num;
	let stop;
	let ip=0;
	let ip2=0;
	do 
	{
		num= parseInt(prompt("escriba un numero: "));
		stop= prompt("desea finalizar? si/no: ");
		if (num < 0)
		{
			negativos = negativos + num;
			ip++;
			
		}
		else if (num > 0)
		{
			positivos = positivos + num;
			ip2++;
		}
		else 
		{
			ceros++;
		}
		if (num %2 == 0)
		{
			pares++;
		}
		


	} while(stop != "si");

	let diferencia = positivos + negativos;
	 

	alert("la suma de los positivos es: " + positivos);
	alert("la suma de los negativos es: " + negativos);
	alert("la cantidad de positivos es: " + ip2);
	alert("la cantidad de negativos es: " + ip);
	alert("la cantidad de ceros es: " + ceros);
	alert("la cantidad de pares es: " + pares);
	alert("promedio de positivos: " + positivos/ip2);
	alert("promedio negativos: " + negativos/ip);
	alert("diferencia entre positivos y negativos: " + diferencia);


}