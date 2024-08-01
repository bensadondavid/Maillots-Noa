const express = require('express')
const app = express()
const { Pool } = require('pg')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { host, user, database, password } = require('pg/lib/defaults')

app.use(bodyParser.json())
app.use(cookieParser)

const pool = new Pool({
    host : 'localhost', 
    user : 'postgres', 
    database : 'Noa', 
    port : 5432,
    password : 'david2001'
})



const PORT = 4000
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})