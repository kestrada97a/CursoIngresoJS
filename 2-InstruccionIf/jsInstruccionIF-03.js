function mostrar()
{
	//variable
	let edad;
	//convercion
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//condicional
	if(edad >=18)
	{
		alert("la persona es mayor de edad");
	}
	else 
	{
		alert ("la persona es menor de edad");
	}

}//FIN DE LA FUNCIÓN