/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 





function sumar()
{	
	let uno = parseInt(document.getElementById("txtIdNumeroUno").value);
    let dos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let suma = uno + dos;
	alert("el resultado es " + suma);	
}

function restar()
{
	let uno = parseInt(document.getElementById("txtIdNumeroUno").value);
    let dos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resta = uno - dos;
	alert("el resultado es " + resta); 
}

function multiplicar()
{ 
	let uno = parseInt(document.getElementById("txtIdNumeroUno").value);
    let dos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let mult = uno * dos;
	alert("el resultado es " + mult);
}

function dividir()
{
	let uno = parseInt(document.getElementById("txtIdNumeroUno").value);
    let dos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let div = uno / dos;
	alert("el resultado es " + div);
}

