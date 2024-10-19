// Import the MySQL package
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',        // MySQL server host (e.g., 'localhost' for local server)
  user: 'root',             // MySQL username
  password: '987654321', // MySQL password
  database: 'vrd'  // Name of the MySQL database
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database!');
});

// Example: Simple query to test the connection
connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err.message);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection
connection.end();
