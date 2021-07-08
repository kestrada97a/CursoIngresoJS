/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 





function sumar()
{	
	let uno;
	let dos;
	let suma;
	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
    dos = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = uno + dos;
	alert("el resultado es " + suma);	
}

function restar()
{   
	let uno;
	let dos;
	let resta;
	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
    dos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resta = uno - dos;
	alert("el resultado es " + resta); 
}

function multiplicar()
{ 
	let uno;
	let dos;
	let mult;
	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
    dos = parseInt(document.getElementById("txtIdNumeroDos").value);
	mult = uno * dos;
	alert("el resultado es " + mult);
}

function dividir()
{
	let uno;
	let dos;
	let div;
	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
    dos = parseInt(document.getElementById("txtIdNumeroDos").value);
	div = uno / dos;
	alert("el resultado es " + div);
}

