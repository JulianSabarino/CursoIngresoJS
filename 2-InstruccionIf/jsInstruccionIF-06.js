function mostrar()
{
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	if (edad >= 18)
	{
		alert("Mayor de Edad");
	}else
	{
		if (edad >= 13 && edad <= 17)
		{
			alert("Adolecente");
		}else
		{
			alert("Ni;o");
		}  
	}  


}//FIN DE LA FUNCIÓN