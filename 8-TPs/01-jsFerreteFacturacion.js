/*1.
Autor: Julian Sabarino
Ejercicio: Tp 1
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1;
	var num2;
	var num3;
	var suma;

	num1 = document.getElementById('txtIdPrecioUno').value;
	num2 = document.getElementById('txtIdPrecioDos').value;
	num3 = document.getElementById('txtIdPrecioTres').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);

	suma = num1 + num2 + num3;
	alert(suma);
	
}
function Promedio () 
{
	var num1;
	var num2;
	var num3;
	var promedio;

	num1 = document.getElementById('txtIdPrecioUno').value;
	num2 = document.getElementById('txtIdPrecioDos').value;
	num3 = document.getElementById('txtIdPrecioTres').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);

	promedio = (num1 + num2 + num3)/3;
	alert(promedio);
}
function PrecioFinal () 
{
	var num1;
	var num2;
	var num3;
	var suma;
	var iva;
	iva = 21;
	var precioFinal;

	num1 = document.getElementById('txtIdPrecioUno').value;
	num2 = document.getElementById('txtIdPrecioDos').value;
	num3 = document.getElementById('txtIdPrecioTres').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);

	suma = num1 + num2 + num3;
	precioFinal = suma + (suma*iva)/100;
	alert(precioFinal);
}