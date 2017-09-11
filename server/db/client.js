// const pg = require('pg')

// const client = new pg.Client({
//   host: process.env.RDS_HOSTNAME,
//   port: process.env.RDS_PORT,
//   user: process.env.RDS_USERNAME,
//   password: process.env.RDS_PASSWORD,
//   database: process.env.RDS_DB_NAME
// });

// client.connect();

// module.exports = client;

var pg = require('pg');
var client = new pg.Client('postgres://localhost:5432/er2sql');

client.connect();

module.exports = client;
