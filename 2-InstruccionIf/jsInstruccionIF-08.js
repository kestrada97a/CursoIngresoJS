function mostrar()
{
	//variables
	let edad;
	let estadoCivil;
	//convercion
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;
	//condicional
	if (estadoCivil == "Soltero" && edad >= 18)
	{
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN