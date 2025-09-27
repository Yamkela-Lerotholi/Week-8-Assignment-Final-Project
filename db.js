const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',      // replace with your MySQL password
    database: 'LibraryDB'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Database!');
});

module.exports = connection;
