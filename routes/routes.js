const express = require('express')
const router = express.Router()

const path = require('path')
const UsersController = require('../controllers/UsersController')

router.get('/users',UsersController.showAll)
router.get('/users/:id',UsersController.show)
router.post('/users',UsersController.create)
router.post('/users/:id',UsersController.update)
router.delete('/users/:id',UsersController.delete)


const ProdutoController = require('../controllers/ProdutoController')

router.get('/produto',ProdutoController.showAll)
router.get('/produto/:id',ProdutoController.show)
router.post('/produto',ProdutoController.create)
router.post('/produto/:id',ProdutoController.update)
router.delete('/produto/:id',ProdutoController.delete)


const AvaliacaoController = require('../controllers/AvaliacaoController')

router.get('/avaliacao',AvaliacaoController.showAll)
router.get('/avaliacao/:id',AvaliacaoController.show)
router.post('/avaliacao',AvaliacaoController.create)
router.post('/avaliacao/:id',AvaliacaoController.update)
router.delete('/avaliacao/:id',AvaliacaoController.delete)


router.get ('/',(req, res)=> {
    res.send ("ola bom dia ")
})
router.get ('/pagina',(req, res)=> {
    res.sendFile(path.resolve('./public/pagina.html'))
})
router.use (function (req, res, next){    // tem que ser a ultima rota !!!!!
    //res.status(404).send ("Erro 404")
    res.status(404).sendFile(path.resolve('./public/404.html'))
})

module.exports = router