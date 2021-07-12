/*
Autor: Julian Sabarino
Ejercicio: 2
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var name;
	var mensaje;
	name = prompt("Ingrese su nombre","Tu nombre");
	mensaje = "Su nombre es: " + name;
	alert(mensaje);
}

