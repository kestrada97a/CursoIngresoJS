/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let resultado = (2*ancho + 2*largo) * 3;
    alert ("la cantidad de alambre que deberá comprar es: " + resultado);

}
function Circulo () 
{
    const pi = 3.14;
    let radio= parseInt(document.getElementById("txtIdRadio").value);
    let resultado = ((radio*2)*pi)*3;
    alert("la cantidad de alambre que se deberá comprar es: " + resultado);

	
}
function Materiales () 
{
    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let resultado = 2*(largo*ancho) / 1;
    let resultado2 =3*(largo*ancho)/ 1 ;
    // area = largo * ancho;
    // resultado = area * 2;
    // resultado2 = area *3;
    alert(`se necesitan ${resultado} de cemento y ${resultado2} de cal`);
	
}