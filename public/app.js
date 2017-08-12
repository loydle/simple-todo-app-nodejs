/* 
    Methods and functions 
    initSection()
    initNavbar()
    showTaskList()
    createNewTask()
    updateStatusTask
    readTask()

*/


(function() {
    initSection();
    initNavbar();
    showTaskList();

})()


function initSection() {
    $('section').html('<br>')
}

function initNavbar() {
    let div = document.createElement('div')
    $('section').append(div)
    div.innerHTML = `
    <ul id="nav">
        <li id="getAll">get All</li>
    </ul>`
    $('#getAll').on('click', (event) => {
        $.ajax({
            type: 'GET',
            url: '/tasks',
            success: (data) => {
                console.log(data)
            }
        })
    })
}

function showTaskList() {
    let div = document.createElement('div')
    $('section').append(div)
    div.innerHTML = `
    <h1>dashboard</h1>
    <form id="newTask">
        <input type="text" id="taskNameInput" placeholder="...">
        <input type="submit" value="Submit">
    </form>
    <h2>list of tasks</h2>
    <ul id="listOfTasks">
    </ul>`
}

// GET TASK

function readTask(event) {
    console.log(event)

}



// POST NEW TASK
function createNewTask() {
    $.ajax({
        type: 'POST',
        url: '/tasks/new',
        data: {
            title: $('#taskNameInput').val()
        },
        success: (data) => {
            let list = document.querySelector('#listOfTasks')
            list.innerHTML += `<li id='task-${data.id}' onclick='updateStatusTask(${data.id})'><a onclick'readTask(${data.id})'>${data.name} - ${data.status}</li>`
            $('#taskNameInput').val('')
        }
    })

}
$('form#newTask').on('submit', (event) => {
    event.preventDefault()

    createNewTask()
})

// CHANGE STATUS TASK

function updateStatusTask(data) {
    $.ajax({
        type: 'PUT',
        url: '/task/' + data,
        success: (data) => {
            console.log(data.status)
            let li = $(`#task-${data.id}`)
            console.log(li)
            if (data.status === true) {
                li.addClass('done')
            } else {
                li.removeClass('done')
            }

            li.html(`${data.name} - ${data.status}`)

        }
    })
}