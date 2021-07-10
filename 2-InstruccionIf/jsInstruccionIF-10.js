function mostrar()
{
	//variables
	let numero;
	let maximo=10;
	let minimo=1;
	//formula
	numero = Math.round(Math.random() * (maximo - minimo) + minimo);  // se puede hacer tambine * 9 + 1
	//condicional
	if(numero >=9)
	{
		alert("EXCELENTE");
	}
	else if (numero >=4 && numero<=8)
	{
		alert("APROBÓ")
	}
	else
	{
		alert ("Vamos, la proxima se puede");
	}
    	

}//FIN DE LA FUNCIÓN