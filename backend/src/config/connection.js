import mysql from 'mysql';

const configConnection = {
    user: 'root',
    password: 'bama1591',
    database: 'cineApp',
    port: 3306
};

const connection = mysql.createConnection(configConnection);

connection.connect((err) => {
    if (!err) {
        console.log(`Connected Successfully to database ${configConnection.database}`);
    } else {
        console.error(err);
    }
});

export default connection;

