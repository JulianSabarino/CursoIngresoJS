function mostrar()
{
	var edad;
	
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	if (edad >= 18)
	{
		alert("Mayor de Edad");
	}else
	{
		alert("Menor de Edad");
	}  
	

}//FIN DE LA FUNCIÓN