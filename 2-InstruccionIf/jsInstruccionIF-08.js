function mostrar()
{
	var edad;
	var eCivil;

	edad = document.getElementById('txtIdEdad').value;
	eCivil = document.getElementById('estadoCivil').value;
	edad = parseInt(edad);

/*	if (edad <18 && eCivil != "Soltero")
	{
		//nada
	}
	else
	{
		if (edad >=18 && eCivil == "Soltero")
		{
			alert("Es Soltero y no es menor");
		}
	}*/

	if (eCivil == "Soltero" && edad >=18 )
	{
		alert("Es Soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN