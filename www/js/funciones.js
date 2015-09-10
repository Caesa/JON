
document.addEventListener("deviceready", onDeviceReady, false);

//Cordova is ready

//La funcion que te muestra un error si es que lo hay

function errorCB(){
  alert("Error processing SQL: "+err.message);
}

function successCB(){
  alert("Success");
}

function onDeviceReady() {
	//db.transaction(PopulateDB, successCB, errorCB);

}

function crearDB(){
	var db = openDatabase('JON', '1.0', 'My Sample DB', 100 * 1024);
	db.transaction(populateDB, errorCB);
}

//La funcion que crea la base de datos y todas sus tablas

function populateDB(tx) {
    tx.executeSql('create table if not exists PERSONA(usuario VARCHAR(255) NOT NULL, nombre VARCHAR(255), edad INTEGER, contrasenia VARCHAR(255), sexo VARCHAR(255), PRIMARY KEY (usuario))');
    tx.executeSql('create table if not exists clubf(id INTEGER NOT NULL, persona1 VARCHAR(255), persona2 VARCHAR(255), PRIMARY KEY (id))');
    tx.executeSql('create table if not exists gala(id INTEGER NOT NULL, persona1 VARCHAR(255), persona2 VARCHAR(255), PRIMARY KEY (id))');
    tx.executeSql('create table if not exists rosario(id INTEGER NOT NULL, persona1 VARCHAR(255), persona2 VARCHAR(255), PRIMARY KEY (id))');
    tx.executeSql('create table if not exists enrica(id INTEGER NOT NULL, persona1 VARCHAR(255), persona2 VARCHAR(255), PRIMARY KEY (id))');
    //alert("Base de datos creadisima");
    //tx.executeSql('SELECT * FROM foo', [], function (tx, results) { var len = results.rows.length, i; for (i = 0; i < len; i++) { alert(results.rows.item(i).text); } });
}

//La funcion de registro

function registrar(usuario, pass, nombre, edad, sexo) {
  var db = openDatabase('JON', '1.0', 'My Sample DB', 100 * 1024);
  db.transaction(function alguna(tx){tx.executeSql("insert into PERSONA (usuario, nombre, edad, contrasenia, sexo) values ('"+usuario+"', '"+nombre+"', '"+edad+"', '"+pass+"', '"+sexo+"')");}, successCB, errorCB);
  window.locationf="/login.html"
}

//Con esta funcion se compara si las personas son compatibles o no

function compatible (persona1, persona2, boliche) {
	tx.transaction.executeSql('INSERT INTO  ?(persona1, persona2) VALUES (?, ?)', [boliche, persona1, persona2]);
	tx.executeSql('SELECT * FROM ? WHERE persona2 = ? AND persona1 = ? AND boliche = ?', [boliche, persona1, persona2], function (tx, results) {
  var len = results.rows.length, i;
  for (i = 0; i < len; i++) {
    alert(results.rows.item(i).text);
  }
});
	
}

//Con esta funcion se hace el ingreso al boliche para ver a las otras personas que van a ir esa noche

function entrarBoliche (usuario, boliche) {
	tx.transaction.executeSql('INSERT INTO  ?(persona1, persona2) VALUES (?, ?)', [boliche, usuario, null]);
}

//Esta funcion es la que se hace para loguearse

function login (usuario, contrasenia) {
	tx.executeSql('SELECT * FROM PERSONA WHERE ', [boliche, persona1, persona2], function (tx, results) {
  var len = results.rows.length, i;
  for (i = 0; i < len; i++) {
    alert(results.rows.item(i).text);
  }
});
}

//Esta funcion carga los distintos usuarios que van a ir al mismo boliche que vos

function cargarUsuarios(usuario, boliche){
	tx.executeSql('SELECT * FROM ? WHERE NOT persona1 = ? AND persona2 = ?', [usuario, null], function (tx, results) {
  var len = results.rows.length, i;
  for (i = 0; i < len; i++) {
    alert(results.rows.item(i).text);
  }
});
}

function borrarDatabase(){
    var db = openDatabase('JON', '1.0', 'My Sample DB', 100 * 1024);
    db.transaction(function (tx) {
  tx.executeSql('DROP TABLE PERSONA');
});
}