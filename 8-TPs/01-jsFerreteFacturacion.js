/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //variables + conversión
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    //formula
    let suma = precio1 + precio2 + precio3;
    //mensaje
    alert("la suma es: " + suma);
    
	
}
function Promedio () 
{
    //variables + conversión
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    // formula
    let promedio = (precio1 + precio2 + precio3) / 3;
    // mensaje
    alert ("el promedio es: " + promedio);
	
}
function PrecioFinal () 
{
    //variables + conversión
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    //formula
    let precioFinal = ((precio1 + precio2 + precio3) * 21) / 100 + (precio1 + precio2 + precio3);
    //mensaje
    alert("el precio final es: " + precioFinal);
	
}