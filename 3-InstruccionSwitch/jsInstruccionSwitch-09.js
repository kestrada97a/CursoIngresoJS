function mostrar()
{
	//variables
	const base = 15000;
	let estacion;
	let destino;
	let precioFinal;
	let aumento=0;
	let descuento=0;
	//asignacion de valores
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	//switch FORMA MIA
	// switch (estacion)
	// {
	// 	case "Invierno":
	// 		if (destino == "Bariloche" )
	// 		{
	// 			precioFinal = base + base *20/100;
	// 			alert(`Total: $${precioFinal}`);
	// 			// aumento = 20;
			
	// 		}
	// 		else if (destino == "Cataratas" || destino == "Cordoba")
	// 		{
	// 			precioFinal = base - base *10/100;
	// 			alert(`Total: $${precioFinal}`);
	// 			// descuento = 10;
	// 		}
	// 		else if (destino == "Mar del plata")
	// 		{
	// 			precioFinal = base - base *20/100;
	// 			alert(`Total: $${precioFinal}`);
	// 			// descuento = 20;
	// 		}
	// 		break;
	// 	case "Verano":
	// 		if (destino == "Bariloche" )
	// 		{
	// 			precioFinal = base - base *20/100;
	// 			alert(`Total: $${precioFinal}`);
	// 			// descuento = 20;
	// 		}
	// 		else if (destino == "Cataratas" || destino == "Cordoba")
	// 		{
	// 			precioFinal = base + base *10/100;
	// 			alert(`Total: $${precioFinal}`);
	// 			// aumento = 10;
	// 		}
	// 		else if (destino == "Mar del plata")
	// 		{
	// 			precioFinal = base + base *20/100;
	// 			alert(`Total: $${precioFinal}`);
	// 			// aumento = 20;
	// 		}
	// 		break;
	// 	case "Primavera":
	// 	case "Otoño":
	// 		if (destino != "Cordoba")
	// 		{
	// 			precioFinal = base + base * 10/100;
	// 			alert(`Total: $${precioFinal}`);
	// 		}
	// 		else
	// 		{
	// 			alert(`Total: $${base}`);
	// 		}
	// forma del profe
	switch (estacion)
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				aumento = 20;
			}
			else if(destino == "Mar del plata")
			{
				descuento = 20;
			}
			else
			{
				descuento = 10;
			}
			break;

		case "Verano":
			if (destino == "Bariloche")
			{
				descuento = 20;
			}
			else if (destino == "Mar del plata")
			{
				aumento = 20;
			}
			else
			{
				aumento = 10
			}
			break;

		case "Otoño":
		case "Primavera":
			if(destino != "Cordoba")
			{
				aumento = 10;
			}
			else
			{
				descuento = 0;
			}
			break;
		
	}		
	if(aumento != 0)
	{
		precioFinal = base + base * aumento/100;
	}
	else if (descuento != 0)
	{
		precioFinal = base - base * descuento/100;
	}
		alert(`Total: $${precioFinal}`);
}//FIN DE LA FUNCIÓN