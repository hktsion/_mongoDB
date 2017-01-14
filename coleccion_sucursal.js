//COLECCION SUCURSAL
//Valores para los datos numéricos;
var cod_suc = numRandomGenerator(276, 335);
var tlf = numRandomGenerator(666000000, 675834566);
var num = numRandomGenerator(1, 245);
var cp = numRandomGenerator(28016, 28098); 
var factu = numRandomGenerator(10000000, 50000000);
var sucursal;

/*La función crea una colección de sucursal y la añade a la BBDD*/
function crearColSuc(nm, cod, dr, pb, tf, st, num, cp, ft){
	for(var i = 0; i < nm.length; i++){
		sucursal = {
			"sucNombre": nm[i],
			"sucCodigo": cod[i],
			"sucDirector": dr[i], 
			"sucPob": pb[i],
			"sucTlf": tf[i],
			"sucCalle": st[i],
			"sucNum": num[i],
			"sucCP": cp[i],
			"sucFactu": ft[i]
		};
		db.SUCURSALES.insert(sucursal);
	}
}