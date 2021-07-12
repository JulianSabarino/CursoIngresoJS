function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	var numero;
	random = Math.random();
	numero=random*10 + 1;
	numero=parseInt(numero);
	alert(numero);

	if (numero>4)
	{
		if (numero>=9)
		{
			alert("EXCELENTE");
		}
		else
		{
			alert("APROBÓ");
		}
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN