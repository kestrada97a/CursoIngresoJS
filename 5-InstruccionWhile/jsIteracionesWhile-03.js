/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	//variables
	let claveIngresada;
	let clave="utn750";
	//asignaciones
	

	claveIngresada= prompt("ingrese la clave correcta: ");
	while(claveIngresada != clave)
	{
		claveIngresada=prompt("ingrese la clave correcta: ");
		

	}
	alert("clave correcta!")

}//FIN DE LA FUNCIÓN
