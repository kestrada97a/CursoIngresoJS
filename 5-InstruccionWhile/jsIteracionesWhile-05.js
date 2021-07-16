/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//variables
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	while(!(sexoIngresado == "f"|| sexoIngresado == "m"))
	{
		sexoIngresado = prompt("ingrese f ó m .");

	}
	if(sexoIngresado=="m")
	{
		document.getElementById("txtIdSexo").value="masculino";
	}
	else if (sexoIngresado=="f")
	{
		document.getElementById("txtIdSexo").value="femenino";
	}
	



}//FIN DE LA FUNCIÓN