/*
Alumno: Julian Sabarino
Ejercicio: 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
	var num2;
	var mod;
	num1 = document.getElementById('txtIdNumeroDividendo').value;
	num2 = document.getElementById('txtIdNumeroDivisor').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	if (num2 == 0)
	{
		alert("No se puede dividir por 0");
	}
	else
	{
		mod = num1 % num2;
		mensaje = "El resto es: " + mod;
		alert(mensaje);
	}
}
