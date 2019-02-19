var inquire = require("inquirer");
var cli = require("cli");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "thunder-cloud-atlas",
    database: "bamazon_db"
  });

//running application should start with a table of items for sale

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  showList();
});
//


function showList() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (i = 0; i < res.length; i++){
          console.log(res[i].id + "|" + res[i].item_id + "|" + res[i].product_name + "|" +)
      }
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }