/*Con esta función conseguiremos números de teléfonos, códigos de sucursales, dnis...*/
function numRandomGenerator(min, max){
	var arrayValores = [];
	for(var i = 0; i < 10; i++){
		arrayValores[i] = Math.floor(Math.random()*(max - min) + min);
	}
	return arrayValores;
}

/*La funcion recibe un array de nombres y la entidad bancaria, el 
email será del tipo: pepe@clientes.bankia.es*/
function emailGenerator(nombres, sucursales){
	var cliEmails = [];
	var dot = "";
	for(var i = 0; i < 10; i++){
		dot = (i%3 == 0) ? ".es" : ".com";
		sucursales[i] = sucursales[i].toLowerCase();
		sucursales[i] = sucursales[i].replace(" ", "");
		nombres[i] = nombres[i].replace(" ", "");
		nombres[i] = nombres[i].toLowerCase();
		cliEmails[i] = nombres[i] + "@clientes." + sucursales[i] + dot;
	}
	return cliEmails;
}