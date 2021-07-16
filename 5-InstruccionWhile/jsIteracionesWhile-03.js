/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	//variables
	let claveIngresada;
	let clave="utn750";
	//asignaciones
	
	while(claveIngresada != clave)
	{
		claveIngresada= prompt("ingrese la clave correcta: ");
		// if(claveIngresada != clave)
		// {
		// 	alert("clave incorrecta");
		// }

	}
	alert("clave correcta!")

}//FIN DE LA FUNCIÓN
