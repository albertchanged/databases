var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// module.exports = function() {
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
connection.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected!');
});
connection.query(mysql, function (err, result) {
  if (err) { throw err; }
  console.log('Result: ' + result);
});
module.exports = connection;
// };
// var connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

// connection.connect(function(err) {
//   if (err) { throw err; }
//   console.log('Connected!');

// });

// connection.query(mysql, function (err, result) {
//   if (err) { throw err; }
//   console.log('Result: ' + result);
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
// });

// server.listen(3000);