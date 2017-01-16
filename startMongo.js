var go = {
	"scripts": [
		"datos_sucursales",
		"datos_clientes",
		"functions",
		"coleccion_sucursal",
		"coleccion_cliente",
		"coleccion_cuenta"
	],
	loadScripts: function(){
		for(var i = 0; i < go.scripts.length; i++ ){
			load("/data/db/js/" + go.scripts[i] + ".js");
		}
	},
	createCollections: function(){
		crearColSuc(sucNombres, cod_suc, sucDirectores, sucPoblaciones, tlf, sucCalles, num, cp, factu);
		crearColCli(dni, cliNombres, cliApe1, cliApe2, cliProfesion, mails, tlf, cod_suc);
		crearColCuent(numero_cuenta, cod_suc, dni, cliNombres, cliApe1, tlf);
	}
};

go.loadScripts();
go.createCollections();

