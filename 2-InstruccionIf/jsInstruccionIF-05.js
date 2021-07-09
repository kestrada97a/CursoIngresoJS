function mostrar()
{
	//variable
	let edad;
	//convercion
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//condicional
	if(edad <= 12 || edad >= 18)
	{
		alert("la persona no es adolescente");
	}
}//FIN DE LA FUNCIÓN