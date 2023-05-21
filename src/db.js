const Pool = require('pg').Pool;

const dbHost = "127.0.0.1";
const dbUser= "postgres";
const dbPassword = "postgres";
const dbDatabase= "kutuphane";
const port = 5432;

const connection = new Pool({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    port: port,
    database: dbDatabase
});

module.exports = connection;