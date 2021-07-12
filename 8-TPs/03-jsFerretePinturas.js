/*
Autor: Julian Sabarino
Ejercicio: tp3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en
Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en
Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
(°F – 32) × 5/9 = °C
*/
function FahrenheitCentigrados () 
{
	var farenheit;
	var centigrados;
	var mensaje;

	farenheit = document.getElementById('txtIdTemperatura').value;
	farenheit = parseInt(farenheit);
	centigrados = (farenheit - 32) * (5/9);

	mensaje = farenheit + " F son " + centigrados + " C";
	alert(mensaje);
	//alert(centigrados);
}

function CentigradosFahrenheit () 
{
	var farenheit;
	var centigrados;
	var mensaje;

	centigrados = document.getElementById('txtIdTemperatura').value;
	centigrados = parseInt(centigrados);
	farenheit = centigrados * (9/5) + 32;
	mensaje = centigrados + " C son " + farenheit + " F";
	alert(mensaje);
	//alert(farenheit);
}
