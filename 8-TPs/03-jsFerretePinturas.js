/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //variables
    let farenheit;
    let celcius;
    //conversión
    farenheit = parseInt(document.getElementById("txtIdTemperatura").value);
    //formula
    let celcius = (farenheit - 32) * (5/9);
    //mensaje
    alert (`${farenheit} Fahrenheit son ${celcius} centígrados`);

	
}

function CentigradosFahrenheit () 
{
    //variables 
    let celcius;
    let farenheit;
    //conversión
    celcius = parseInt(document.getElementById("txtIdTemperatura").value);
    //variable + formula
    farenheit = (celcius * (9/5)) + 32;
    //mensaje
    alert (`${celcius} centígrados son ${farenheit} Fahrenheit`);
	
}
