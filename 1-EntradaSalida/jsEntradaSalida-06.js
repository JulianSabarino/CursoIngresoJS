/*
Autor: Julian Sabarino
Ejercicio: 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1;
	var num2;
	var sum;
	num1 = document.getElementById('txtIdNumeroUno').value; //"2" 
	num2 = document.getElementById('txtIdNumeroDos').value; //"3"

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	sum = num1 + num2;
	
	alert(sum);
}

