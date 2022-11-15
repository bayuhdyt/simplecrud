const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mobile_legend3",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("database connected!");
});

module.exports = connection;
