function mostrar()
{
	//variable
	let edad;
	//convercion
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//condicional
	if(edad >= 13 && edad <= 17)
	{
		alert("la persona es adolescente");
	}
	else if (edad>=18)  
	{
     alert("la persona es mayor de edad");
	}
	else if (edad<=13)
	{
		alert("la persona es un niño");
	}
}//FIN DE LA FUNCIÓN