/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let dato = prompt("ingrese un dato:");
	
	// le asignas al boton que es todo el queso este lo que va en "dato"
	document.getElementById("txtIdNombre").value= dato;
	

}

