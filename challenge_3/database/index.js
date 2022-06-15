var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'customer'
})

con.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('connected to database');
  }
})

module.exports = con;