const express = require('express')
const path = require('path')
const rotas = express.Router()

rotas.use(express.static("front"));

let mapaSite = [
  {'Spolaor': 'consult', 'info': 'Faz consultoria para empresas!'},
  {'Spolaor': 'mining', 'info': 'Serviços de Criptomoedas!'},
  {'Spolaor': 'bank', 'info': "Um banco digital para um grupo seleto de CNPJ's e CPF's!"},
  {'Spolaor': 'contabilidade', 'info': 'Presta serviços contábeis para as empresas!'}
]

rotas.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '/front/home.html'))
})

rotas.get('/:id', (req, res)=> {
  const id = req.params.id
  const infoPagina = mapaSite.find(i=>i.Spolaor == id)

  if(!infoPagina) {
    res.status(404).json({
      erro: 'Página não encontrada!', paginaPesquisada: id
    })
  }
  else {
    res.status(200).json(infoPagina)
  }
})

module.exports = rotas