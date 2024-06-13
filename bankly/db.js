/** Database setup for jobly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client({
    user: 'darewood',
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: DB_URI,
});

client.connect();

module.exports = client;
