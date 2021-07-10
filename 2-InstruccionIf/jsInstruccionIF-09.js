function mostrar()
{
	//variables
	let numero;
	let maximo=10;
	let minimo=1;
	//formula
    numero = Math.round(Math.random() * (maximo - minimo) + minimo);   // el round redondea, y el random te da un numero entre el 0 y el 0.99999
	alert(numero);

}//FIN DE LA FUNCIÓN