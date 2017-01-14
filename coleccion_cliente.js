//COLECCION CIENTES
//Valores para los datos numéricos;
var dni = numRandomGenerator(20899999, 50356765);
var tlf = numRandomGenerator(666000000, 675834566);
var num = numRandomGenerator(1, 245);
var mails = emailGenerator(cliNombres, sucNombres);

var cliente;

/*La función crea una colección de cliente y la añade a la BBDD*/
function crearColCli(dni, nb, ap1, ap2, prof, email, tlf, codSuc){
	for(var i = 0; i < dni.length; i++){
		cliente = {
			"cliDni": dni[i],
			"cliNombre": nb[i],
			"cliApellido1": ap1[i], 
			"cliApellido2": ap2[i],
			"cliProfesion": prof[i],
			"cliEmail": email[i],
			"cliTelefono": tlf[i],
			"cliCodSuc": codSuc[i]
		};
		db.CLIENTES.insert(cliente);
	}
}