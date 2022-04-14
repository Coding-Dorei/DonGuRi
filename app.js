const express = require('express')

const app = express()

const path = require('path')
const static = require('serve-static')

app.set('view engine',"ejs")
app.set('vies','./views')
app.use('/data',static(path.join(__dirname,"data")))

let port = process.env.PORT || 80

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port)