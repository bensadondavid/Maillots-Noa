const express = require('express')
const app = express()
const { Pool } = require('pg')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const secretJwtKey = 'David&Noa'
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
    try{
    const existingUser = await pool.query(
        `SELECT * FROM users WHERE  email = $1 OR phone = $2`, 
        [email, phone]
    )
    if(existingUser.rows.length > 0){
        return res.json({message : 'User already exists'})
    }
    const HashedPassword = await bcrypt.hash(password, 10)
    const newUser = await pool.query(
        `INSERT INTO users(firstname, lastname, email, password, phone, birthDay, birthMonth, country) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
        [firstname, lastname, email, HashedPassword, phone, birthDay, birthMonth, country]
    )
    return res.json({message : 'User created'})
}
    catch(error){
        return res.json({message : error})
}
})

// Login

app.post('/login', async(req, res)=>{
    const {email, phone, password} = req.body
    try{
        const verifyUser = await pool.query(
            `SELECT * FROM users WHERE email = $1`, 
            [email]
        )
        if(verifyUser.rows.length === 0){
           return res.json({message : 'Wrong Email'})
        }
        const user = verifyUser.rows[0]
        const passwordmatch = await bcrypt.compare(password, user.password)

        if(!passwordmatch){
        return res.json({message : 'Wrong password'})
        }
        else{
            const token = jwt.sign({id : user.id}, secretJwtKey, {expiresIn : '7d'})
            res.cookie('token', token, {httpOnly : true, maxAge : 7*24*60*60*1000})
            return res.json({message : 'Logged In'})
        }
    }
    catch(error){
        return res.json({message : 'Internal Server Error'})
    }
})

// Card

app.get('/cards', async(req, res)=>{
    try{
    const card = await pool.query(`SELECT * FROM products`)
    return res.json(card.rows);
    }
    catch(error){
        return res.json({message : 'error'})
    }
})

// Wish

app.get('/wish', async(req, res)=>{
    try{
    const wish = await pool.query(`SELECT * FROM products`)
    return res.json(wish.rows);
    }
    catch(error){
        return res.json({message : 'error'})
    }
})


const PORT = 4000
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})