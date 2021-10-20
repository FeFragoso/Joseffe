const http = require(`http`)
const porta = process.env.PORT
const fs = require('fs')

const servidor = http.createServer((req, res) => {
  fs.readFile('teste.html', (err,arquivo) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(arquivo)
    return res.end()
  })
})

servidor.listen(porta, () => {console.log('Servidor Rodando')})