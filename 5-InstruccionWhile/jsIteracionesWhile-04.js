/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	while(!(numeroIngresado >=0 && numeroIngresado<=9))
	{
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
		// if(numeroIngresado >=0 && numeroIngresado<=9)
		// {
		// 	document.getElementById("txtIdNumero").value=numeroIngresado; //esta al DOPE ESTOOOOOOOOO
		// }
		
	}
	document.getElementById("txtIdNumero").value=numeroIngresado;


	// while(numeroIngresado <0 || numeroIngresado >9)
	// {
	// 	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	// 	if	(numeroIngresado >=0 && numeroIngresado <= 9)
	// {
	// document.getElementById("txtIdNumero").value=numeroIngresado;
    // }
		
	// }
	
}//FIN DE LA FUNCIÓN