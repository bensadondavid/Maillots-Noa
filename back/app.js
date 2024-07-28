const express = require('express')
const app = express()
const { pool } = require('pg')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const PORT = 4000
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})