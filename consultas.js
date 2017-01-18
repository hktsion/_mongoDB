var consultas = {
	"consulta1": {
		"datosConsulta": "Listar Nombre_sucursal, cod_sucursal, Director y Poblacion de aquellas sucursales cuyo Cod_sucursal sea distinto a 287",
		"dataFrom": db.SUCURSALES,
		"lookingFor": [{sucCodigo:{$ne: 287}}],
		"showFields": [{sucCodigo:1, sucNombre: 1, sucDirector: 1}],
		"orderBy": [],
		"createIndex": false,
		"createDBCopy": false
	},
	"consulta2": {
		"datosConsulta": "Listar Nombre_sucursal, cod_sucursal, Poblacion y Facturacion de aquellas sucursales cuyo codigo de sucursal sea alguno de los siguientes valores\n[313, 287, 280, 297, 292, 308, 312, 330]",
		"dataFrom": db.SUCURSALES,
		"lookingFor": [{sucCodigo: {$in: [313, 287, 280, 297, 292, 308, 312, 330]}}],
		"showFields": [{sucNombre:1, sucCodigo:1, sucPob:1, sucFactu:1}],
		"orderBy": [],
		"createIndex": false,
		"createDBCopy": false
	},
	"consulta3": {
		"datosConsulta": "Listar Director, Población y facturación de todas las sucursales, ordenadas de forma Descendente por el campo Poblacion",
		"dataFrom": db.SUCURSALES,
		"lookingFor": [],
		"showFields": [{sucDirector:1, sucPob:1, sucFactu:1}],
		"orderBy": [{sucPob:1}],
		"createIndex": false,
		"createDBCopy": false
	},
	"consulta4": {
		"datosConsulta": "Listar DNI, nombre_cliente, apellido1, apellido2, profesion y cod_sucursal, de aquellos clientes cuyo cod_sucursal sea distinto de 287, Ordenado por Profesion en modo Ascendente.",
		"dataFrom": db.CLIENTES,
		"lookingFor": [{cliCodSuc:{$ne: 287}}],
		"showFields": [{cliDni:1, cliNombre:1, cliApellido1:1, cliApellido2:1, cliProfesion:1, cliCodSuc:1}],
		"orderBy": [{cliProfesion: -1}],
		"createIndex": false,
		"createDBCopy": false
	},
	"consulta5": {
		"datosConsulta": "Listar DNI, nombre, apellido1, profesion, telefono, cod_sucursal para aquellos clientes cuyo cod_sucursal sea Mayor o igual que 312.",
		"dataFrom":db.CLIENTES,
		"lookingFor": [{cliCodSuc: {$gte: 312}}],
		"showFields": [{cliDni:1, cliNombre:1, cliApellido1:1, cliProfesion:1, cliTelefono:1, cliCodSuc:1}],
		"orderBy": [{cliCodSuc: 1}],
		"createIndex": false,
		"createDBCopy": false
	},
	"consulta6": {
		"datosConsulta": "Listar DNI, nombre, apellido1, apellido2, profesion y telefono, de todos aquellos clientes que tengan un telefono de contacto.",
		"dataFrom":db.CLIENTES,
		"lookingFor": [{cliTelefono: {$ne: null} }],
		"showFields": [{cliDni:1, cliNombre:1, cliApellido1:1, cliApellido2:1, cliProfesion:1, cliTelefono:1}],
		"orderBy": [],
		"createIndex": false,
		"createDBCopy": false

	},
	"consulta7": {
		"datosConsulta": "Crear un indice tipo Unique en la colección CUENTAS, seleccionando el campo NRO_CUENTA de manera Descendente.",
		"dataFrom":db.CUENTAS,
		"lookingFor": [{cuentNum: -1}],
		"showFields": [],
		"orderBy": [],
		"createIndex": true,
		"createDBCopy": false
	},
	"consulta8": {
		"datosConsulta": "Listar los nro_cuenta, Cod_sucursal y datos de los titulares, de la coleccion CUENTAS ordenados por cod_sucursal en forma ascendente.",
		"dataFrom":db.CUENTAS,
		"lookingFor": [],
		"showFields": [{cuentNum:1, cuentCodSuc:1, cuentTitular:1}],
		"orderBy": [{cuentCodSuc: 1}],
		"createIndex": false,
		"createDBCopy": false
	},
	"consulta9": {
		"datosConsulta": "Crear un indice de tipo Unique, en la coleccion CLIENTES, por el campo DNI ordenado ascendente.",
		"dataFrom":db.CLIENTES,
		"lookingFor": [],
		"showFields": [{cliDni:1, cliNombre:1, cliApellido1:1, cliProfesion:1, cliTelefono:1, cliCodSuc:1}],
		"orderBy": [],
		"createIndex": true,
		"createDBCopy": false
	},
	"consulta10": {
		"datosConsulta": "Hacer una copia de la Base de datos EMPRESA_BANCARIA, con el nombre: EMPRESA_BACKUP_16_ENERO",
		"createIndex": false,
		"createDBCopy": true
	}
};

print("*** [" + Object.keys(consultas).length + " KEYS FOUNDS] ***\n");

/*QUERY RESULTS GENERATOR FOR*/
function qrgf(param){

	var searching = "";
	entity = param.dataFrom;

	if((param.createIndex || param.createDBCopy) == true){
		if(param.createIndex == true){
			searching = db.CUENTAS.createIndex({"id2": 1},{cuentNum: -1}, {unique: true});
		}
		if(param.createDBCopy == true){
			db.copyDatabase("EMPRESA_BANCARIA", "EMPRESA_BACKUP_19_ENERO");
			print("COPIA DE SEGURIDAD REALIZADA");
		}
	}else{
		print(param.datosConsulta);

		switch (param.showFields.length) {
			case 0:
				if(param.orderBy.length == 0){
					searching = entity.find(param.lookingFor[0]);
				}else{
					searching = entity.find(param.lookingFor[0]).sort(params.orderBy[0]); 
				}
				break;
				case 1:
					if(param.orderBy.length == 0){
						searching = entity.find(param.lookingFor[0], param.showFields[0]);
					}else{
						searching = entity.find(param.lookingFor[0], param.showFields[0]).sort(param.orderBy[0]); 
					}
					break;
				};

				print("[" + searching.count() + " FOUND] of [" + entity.find().count() + " TOTAL]\n");

			}
			return searching; 
		};


function nuevoCliente(){
	db.CLIENTES.insert({cliDni: 123456789, cliNombre: "HÉCTOR", cliApellido1: "OCHOA", cliProfesion: "DESARROLLADOR", cliTelefono: null, cliCodSuc: 287});
	print("NUEVO CLIENTE AÑADIDO");
	return db.CLIENTES.find({cliDni: 123456789});
}





