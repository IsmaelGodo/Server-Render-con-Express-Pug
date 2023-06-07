const express = require('express');
const pelisRoutes = require('./routes/pelisRoutes')
const app = express()
const port = 3000

app.use(express.static('public'));
// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

//Prepara node para trabajar con url
app.use(express.urlencoded({extended: false}))
//app.use(express.json())
app.use('/', pelisRoutes)


app.listen(port, () => {
    console.log(`Servidor funcionando en https://localhost:${port}`)
})