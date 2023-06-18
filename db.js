const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '54.175.59.27',
    user: 'raul123',
    password: '12345',
    database: 'productos'
  });
  
  // Conectar a la base de datos MySQL
  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos: ' + err.stack);
      return;
    }
  
    console.log('Conexión exitosa a la base de datos MySQL');
  });
  
  module.exports = connection;