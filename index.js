const express = require('express')
const rotas = require('./rotas')
const porta = process.env.PORT || 3000

const app = express()

app.use('/', rotas)

app.listen(porta, ()=>{console.log('Rodando!')})