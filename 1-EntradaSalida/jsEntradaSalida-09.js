/*
Alumno: Julian Sabarino
Ejercicio: 9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var aumento;
	var total;
	var porcentajeAumento;
	
	porcentajeAumento= prompt("Ingrese el Porcentaje","0");
	sueldo = document.getElementById('txtIdSueldo').value;
	porcentajeAumento = parseInt(porcentajeAumento);
	sueldo = parseInt(sueldo)
	
	aumento = (sueldo * porcentajeAumento)/100;
	total = sueldo + aumento;

	document.getElementById('txtIdResultado').value = total;
}
