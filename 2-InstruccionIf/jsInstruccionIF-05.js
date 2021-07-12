function mostrar()
{
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	if (edad >= 13 && edad <= 17)
	{
		alert("Adolecente");
	}else
	{
		alert("No Adolecente");
	}  

}//FIN DE LA FUNCIÓN