var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Dmcc6910!",
  database: "bamazon"
});

connection.connect(function(err) {
	if(err){
		return console.log(err);
	}
	console.log('connected as id ' + connection.threadId);
	connection.end();
});

