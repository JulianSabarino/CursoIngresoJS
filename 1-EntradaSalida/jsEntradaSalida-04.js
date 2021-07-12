/* 
Autor: Julian Sabarino
Ejercicio: 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var name;
	var mensaje;
	name = prompt("Ingrese su nombre","Tu nombre");
	mensaje = "Su nombre es: " + name;
	document.getElementById('txtIdNombre').value = mensaje;
}

