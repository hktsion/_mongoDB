//COLECCION CUENTAS;
var numero_cuenta = numRandomGenerator(111111111111, 999999999999);

/*La función crea una colección de sucursal y la añade a la BBDD*/
function crearColCuent(nc, cod, dni, nb, ap1, tlf){
	for(var i = 0; i < nc.length; i++){
		cuenta = {
			"cuentNum": nc[i],
			"cuentCodSuc": cod[i],
			"cuentTitular": [dni[i], nb[i], ap1[i], tlf[i]]
		};
		db.CUENTAS.insert(cuenta);
	}
}