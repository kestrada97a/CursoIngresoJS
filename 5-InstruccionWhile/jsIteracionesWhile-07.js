/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i=0;
	let num;
	let suma=0;  //hay q crear una variable para que se sume ahí el "num"
	let promedio;
	let terminar;

	while(terminar!="si")
	{
		i++;
		num = parseInt(prompt("escriba un numero: "));
		suma = suma + num;
		terminar = prompt("desea terminar? si o no: ");
		// suma += parseInt(prompt("Ingrese un numero:")); // The julian way
	
	}
	document.getElementById("txtIdSuma").value=suma;
	promedio= suma /i;
	document.getElementById("txtIdPromedio").value=promedio;




}//FIN DE LA FUNCIÓN