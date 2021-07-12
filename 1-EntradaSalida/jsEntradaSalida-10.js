/*
Autor: Julian Sabarino
Ejercicio: 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var total;
	var porcentajeDescuento;
	porcentajeDescuento= prompt("Ingrese el Porcentaje","0");
	importe = document.getElementById('txtIdImporte').value;
	porcentajeDescuento = parseInt(porcentajeDescuento);
	importe = parseInt(importe);
	
	descuento = (importe * porcentajeDescuento)/100;
	total = importe - descuento;

	document.getElementById('txtIdResultado').value = total;
}
