const express = require('express')
const app = express()
const { Pool } = require('pg')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const allowedOrigin = 'http://localhost:5173'
app.use(cors({
    origin : allowedOrigin,
    credentials : true
}))

app.use(bodyParser.json())
app.use(cookieParser())

const pool = new Pool({
    host : 'localhost', 
    user : 'postgres', 
    database : 'Noa', 
    port : 5432,
    password : 'david2001'
})

// register

app.post('/register', async(req, res)=>{
    const {firstname, lastname, email, password, phone, birthDay, birthMonth, country} = req.body
    const existingUser = await pool.query(
        `SELECT * FROM users WHERE  email = $1 OR phone = $2`, 
        [email, phone]
    )
    if(existingUser.rows.length > 0){
        return res.json({message : 'User already exists'})
    }
    const newUser = await pool.query(
        `INSERT INTO users(firstname, lastname, email, password, phone, birthDay, birthMonth, country) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
        [firstname, lastname, email, password, phone, birthDay, birthMonth, country]
    )
    return res.json({message : 'User created'})
})

const PORT = 4000
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})