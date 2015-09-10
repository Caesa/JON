
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
    tx.executeSql('create table if not exists PERSONA(usuario VARCHAR(255) NOT NULL, numero INTEGER NOT NULL, nombre VARCHAR(255), edad INTEGER, contrasenia VARCHAR(255), sexo VARCHAR(255), PRIMARY KEY (usuario))');
    tx.executeSql('create table if not exists clubf(id INTEGER NOT NULL, persona1 VARCHAR(255), persona2 VARCHAR(255), PRIMARY KEY (id))');
    tx.executeSql('create table if not exists gala(id INTEGER NOT NULL, persona1 VARCHAR(255), persona2 VARCHAR(255), PRIMARY KEY (id))');
    tx.executeSql('create table if not exists rosario(id INTEGER NOT NULL, persona1 VARCHAR(255), persona2 VARCHAR(255), PRIMARY KEY (id))');
    tx.executeSql('create table if not exists enrica(id INTEGER NOT NULL, persona1 VARCHAR(255), persona2 VARCHAR(255), PRIMARY KEY (id))');
    //alert("Base de datos creadisima");
    //tx.executeSql('SELECT * FROM foo', [], function (tx, results) { var len = results.rows.length, i; for (i = 0; i < len; i++) { alert(results.rows.item(i).text); } });
}

//La funcion de registro

function registrar(usuario, numero, pass, nombre, edad, sexo) {
  var db = openDatabase('JON', '1.0', 'My Sample DB', 100 * 1024);
  db.transaction(function alguna(tx){tx.executeSql("insert into PERSONA (usuario, numero, nombre, edad, contrasenia, sexo) values ('"+usuario+"', '"+numero+"', '"+nombre+"', '"+edad+"', '"+pass+"', '"+sexo+"')");}, errorCB);
  alert("Lograste registrarte pete");
  window.locationf="/index.html";
}

//Con esta funcion se compara si las personas son compatibles o no

function compatible (persona1, persona2) {
	var db = openDatabase('JON', '1.0', 'My Sample DB', 100 * 1024);
	db.transaction(function alguna(tx){tx.executeSql("INSERT INTO  '"+boliche+"'(persona1, persona2) VALUES ('"+persona1+"', '"+persona2+"')");}, errorCB);
	tx.executeSql('SELECT * FROM ? WHERE persona2 = ? AND persona1 = ? AND boliche = ?', [boliche, persona1, persona2], function (tx, results) {
  var len = results.rows.length, i;
  for (i = 0; i < len; i++) {
    alert(results.rows.item(i).text);
  }
});
	
}

//Con esta funcion se hace el ingreso al boliche para ver a las otras personas que van a ir esa noche

function entrarBoliche (usuario, boliche) {
    var db = openDatabase('JON', '1.0', 'My Sample DB', 100 * 1024);
	db.transaction.(function ola(tx){executeSql("INSERT INTO '"+boliche+"'(persona1, persona2) VALUES ('"+usuario+"', null)");}, errorCB);
}

//Esta funcion es la que se hace para loguearse

function login (usuario, contrasenia) {
    var db = openDatabase('JON', '1.0', 'My Sample DB', 100 * 1024);
    db.transaction.(function ola(tx){tx.executeSql("SELECT * FROM PERSONA WHERE usuario = '"+usuario+"' AND contrasenia = '"+contrasenia+"'" , function (tx, results) {
    var len = results.rows.length;
    if (len == 1) {
        window.locationf="/index.html";
            };
        });
    });
}

//Esta funcion carga los distintos usuarios que van a ir al mismo boliche que vos

function cargarUsuarios(usuario, boliche){
    var db = openDatabase('JON', '1.0', 'My Sample DB', 100 * 1024);
    var numero, edad, nombre;
    db.transaction.(function ola(db, tx){tx.executeSql("SELECT persona1 FROM '"+boliche+"' WHERE NOT persona1 = '"+usuario+"' AND persona2 = null", function (db, tx, results) {
    var len = results.rows.length, i;
    for (i = 0; i < len; i++) {
        db.transaction.(function ola(tx){tx.executeSql("SELECT * FROM PERSONA WHERE usuario = '"+results.rows.item(i).persona1+"'" , function (tx, results) {
        var len = results.rows.length, e;
        for (e = 0; e < len; e++) {
            numero = results.rows.item(e).numero;
            edad = results.rows.item(e).edad;
            nombre = results.rows.item(e).nombre;

            var midiv = document.createElement("div");
            midiv.setAttribute("id","one");
            midiv.innerHTML = '<center><img class="fotoperfil" src="img/perfil1.jpg">
                    <br>Nombre: '+nombre+'<br>Edad: '+edad+'<br>Whatsapp: '+numero+'
                    <div class="ui-grid-d" style="margin-top:5%;">
                    <div class="ui-block-a"><a></a></div>
                    <div class="ui-block-b"><a class="ui-shadow ui-btn ui-corner-all ui-icon-heart ui-btn-icon-notext ui-btn-inline">Button</a></div>
                    <div class="ui-block-c"><a></a></div>
                    <div class="ui-block-d"><a class="ui-shadow ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-inline">Button</a></div>
                    <div class="ui-block-e"><a></a></div>
                    </div>
                    </center>';
            document.body.appendChild(midiv);
            };
        });
    });
    }
        });
    });
}


                <div id="one">
                
                </div>