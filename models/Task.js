const tasksArray = []

class Task {
    constructor(name) {
        this.id = tasksArray.length
        this.name = name
        this.created_at = new Date()
        this.updated_at = undefined
        this.description = undefined
        this.status = false
        console.log('task created' + this.created_at)
        tasksArray.push(this)
    }
    static getTasks() {
        return tasksArray
    }
    changeStatus() {
        if (this.status) {
            this.status = false
        } else {
            this.status = true
        }
        console.log(this)
    }
}

module.exports = Task