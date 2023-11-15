const { Client } = require('pg')
require('dotenv').config()
const fs = require('fs')

const client = new Client({
    host: process.env.POSTGRES_HOST, 
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: {
        ca: fs.readFileSync('eu-north-1-bundle.pem')
        //rejectUnauthorized: false
    }
})

module.exports = client