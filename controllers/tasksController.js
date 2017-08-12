const Task = require('../models/Task.js')

// TASKS CONTROLLER
function tasksController(app) {



    // GET
    app.get('/tasks', (req, res) => {
        Task.getTasks()
        res.json(Task.getTasks())
    })

    // POST
    app.post('/tasks/new', (req, res) => {
        console.log(req.body)
        let newTask = new Task(req.body.title)
        res.json(newTask)
    })

    // PUT
    // Change Status
    app.put('/task/:id', (req, res) => {
        let array = Task.getTasks()
        let task = array[req.params.id]
        if (task.status === false) {
            array[req.params.id].status = true
            console.log('Task' + req.params.id + ' status change to ' + task.status)
        } else {
            array[req.params.id].status = false
            console.log('Task status change to ' + task.status)

        }
        res.json(array[req.params.id])
    })
}

module.exports.routes = tasksController