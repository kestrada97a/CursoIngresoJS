function mostrar()
{
	let i=0;
	let num;
	let suma=0;  //hay q crear una variable para que se sume ahí el "num"
	let promedio;

	while(i<5)
	{
		i++;
		num = parseInt(prompt("escriba un numero: "));
		suma = suma + num;
		// suma += parseInt(prompt("Ingrese un numero:")); // The julian way
	
	}
	document.getElementById("txtIdSuma").value=suma;
	promedio= suma /5;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN