/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let uno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let dos = parseInt(document.getElementById("txtIdNumeroDos").value);
    let tres = uno + dos;
	alert("la suma es " + tres);

}

