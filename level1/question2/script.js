fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((res) => {
        ToDoTasks(res);
    })
.catch(err => console.log(err));

var containerElement = document.querySelector(".api-section");

function ToDoTasks(res) {
    for (let i = 0; i < res.length; i++) {
        let status;
        res[i].completed ? status = 'COMPLETED' : status = 'PENDING';
        containerElement.innerHTML += '<div class="card"><div class="card-header"><p class="card-header-item user">USER ' + res[i].userId + '</p><p class="card-header-item task-number">TASK ' + res[i].id + '</p></div><h2 class="title">' + res[i].title + '</h2><p class="task-status">STATUS: ' + status + '</p></div>';
    }
}
