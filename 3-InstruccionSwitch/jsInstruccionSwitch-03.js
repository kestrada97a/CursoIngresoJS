function mostrar()
{
	//variable
	let mesDelAño;
	//convercion
	mesDelAño=document.getElementById("txtIdMes").value;
	//switch
	switch(mesDelAño)
	{
		case "Enero":
			alert("Este mes tiene 30 o más días" );
			break;
		case "Febrero":
			alert(" Este mes no tiene más de 29 días." );
			break;
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 o más días" );
			break;
	}
	
	


}//FIN DE LA FUNCIÓN