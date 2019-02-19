
var mysql = require("mysql");
var inquirer = require("inquirer");
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

connection.connect(function(err) {
  if (err) throw err;
  promptStart();
});

function promptStart() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Search by ID",
          "exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Search by ID":
         idSearch();
          break;

        case "exit":
        showList();
          connection.end();
          break;
        }
      });
  };


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
    promptStart();
    });
  }

function idSearch() {
    inquirer
    .prompt([
        {
        name: "productId",
        type: "input",
        message: "Enter Product ID: ",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
        }
    }
    ])
    .then(function(answer){
        var query = connection.query ("SELECT item_id FROM products WHERE ?");
    
    }
}
