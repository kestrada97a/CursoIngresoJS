/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let uno; 
	let dos; 
    let tres; 

	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
	dos = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	tres = uno + dos;
	alert("la suma es " + tres);

}

