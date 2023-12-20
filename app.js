const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//Config
app.engine('html', require('ejs').renderFile)
    app.set('view engine', 'html') //view engine
    app.use('/static', express.static('./src/public')) //arquivos estáticos
    app.set('views', './src/views')
    
    //Body Parser no express
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('./home/home')
})

app.post('/criarusuario', (req,res) => {
    
})

//PORTA
const port = 8081
app.listen(port, () => console.log(`Servidor rodando na porta : ${port}`))