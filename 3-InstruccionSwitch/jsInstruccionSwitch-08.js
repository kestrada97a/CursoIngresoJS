function mostrar()
{
	//variable
	let destino;
	//convercion
	destino = document.getElementById("txtIdDestino").value;
	//switch
	switch (destino)
	{
		case "Bariloche":
			alert("HACE FRIO");
			break;
		case "Cataratas":
			alert("HACE CALOR");
			break;
		case "Mar del plata":
			alert("HACE FRIO");
			break;
		case "Ushuaia":
			alert("HACE FRIO");
			break;
	}

}