/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //variables 
    let precio1;
    let precio2;
    let precio3;
    let suma;
    //conversión
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    //formula
    suma = precio1 + precio2 + precio3;
    //mensaje
    alert("la suma es: " + suma);
    
	
}
function Promedio () 
{
    //variables 
    let precio1;
    let precio2;
    let precio3;
    let promedio;
    //conversión
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    //formula
    promedio = (precio1 + precio2 + precio3) / 3;
    // mensaje
    alert ("el promedio es: " + promedio);
	
}
function PrecioFinal () 
{
    //variables 
    let precio1;
    let precio2;
    let precio3;
    let precioFinal;
    //conversión
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    //variable + formula
    precioFinal = ((precio1 + precio2 + precio3) * 21) / 100 + (precio1 + precio2 + precio3);
    //mensaje
    alert("el precio final es: " + precioFinal);
	
}