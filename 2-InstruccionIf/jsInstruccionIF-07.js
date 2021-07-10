function mostrar()
{
	// variables
	let edad;
	let estadoCivil;
	//convercion
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;
	//condicional
	if (edad < 18 && estadoCivil !="Soltero")
	{
		alert("es muy pequeño para NO estar soltero");
	}
	
	


}//FIN DE LA FUNCIÓN