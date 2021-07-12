/*
Autor: Julian Sabarino
Ejercicio: 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
	var num2;
	var sum;
	var mensaje;
	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	sum = num1 + num2;
	mensaje = "La suma es: " + sum;
	alert(mensaje);	
}

function restar()
{
	var num1;
	var num2;
	var res;
	var mensaje;
	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	sum = num1 - num2;
	mensaje = "La resta es: " + sum;
	alert(mensaje);
}

function multiplicar()
{ 
	var num1;
	var num2;
	var mul;
	var mensaje;
	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	mul = num1 * num2;
	mensaje = "La multiplicacion es: " + mul;
	alert(mensaje);
}

function dividir()
{
	var num1;
	var num2;
	var div;
	var mensaje;
	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	if (num2 == 0)
	{
		alert("No se puede dividir por 0");
	}
	else
	{
		div = num1 / num2;
		mensaje = "La divicion es: " + div;
		alert(mensaje);
	}
}	

