function mostrar()
{
	var edad;
	var eCivil;

	edad = document.getElementById('txtIdEdad').value;
	eCivil = document.getElementById('estadoCivil').value;
	edad = parseInt(edad);

	if (edad <18 && eCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN