/*
Autor: Julian Sabarino
Ejercicio: T2

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var perimetroTriple;
	var mensaje;

	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	
	perimetro = (2 * largo + 2 * ancho);
	perimetroTriple = perimetro * 3;
	mensaje = "La cantidad de alambre para tres vueltas es: " + perimetroTriple + " metros";
	alert(mensaje);
}

function Circulo () 
{
	var radio;
	var pi;
	var perimetro;
	var perimetroTriple;
	var mensaje;

	pi = 3.14;
	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);
		
	perimetro = pi * 2 * radio;
	perimetroTriple = perimetro * 3;
	mensaje = "La cantidad de alambre para tres vueltas es: " + perimetroTriple + " metros";
	alert(mensaje);
}

function Materiales () 
{
	var largo;
	var ancho;
	var radio;
	var pi;
	var areaCirc;
	var areaRect;
	var cantCalPerM2;
	var cantCemPerM2;
	var cantCalCir;
	var cantCalRec;
	var cantCemCir;
	var cantCemRec;
	var mensaje;

	cantCemPerM2 = 2;
	cantCalPerM2 = 3;
	pi = 3.14;
	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;
	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	areaRect = largo * ancho;
	areaCirc = pi * radio * radio;

	cantCalCir = areaCirc * cantCalPerM2;
	cantCemCir = areaCirc * cantCemPerM2;
	cantCalRec = areaRect * cantCalPerM2;
	cantCemRec = areaRect * cantCemPerM2;

	mensaje = "Cantidad de Cal necesaria para el Rectangulo: " + cantCalRec;
	alert(mensaje);
	mensaje = "Cantidad de Cemento necesaria para el Rectangulo: " + cantCemRec;
	alert(mensaje);

	mensaje = "Cantidad de Cal necesaria para el Circulo: " + cantCalCir;
	alert(mensaje);
	mensaje = "Cantidad de Cemento necesaria para el Circulo: " + cantCemCir;
	alert(mensaje);
}