const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const fs = require('fs')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, (req, res) => {
    console.log('server up and running..')
})

app.use('/assets', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { title: 'My Awesome App' })
})

// Controllers
const tasksController = require(__dirname + '/controllers/tasksController')
tasksController.routes(app)