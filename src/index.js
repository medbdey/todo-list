import './style.css'

let createTask = document.getElementById('createTask');
let addTask = document.getElementById('addTask');
let taskParant = document.getElementById('taskParant');
let taskEdit = document.getElementById('taskEdit');

let currentTask = null;


addTask.addEventListener('click', ()=>{
    if (createTask.value == '') return;

    let newTask = document.createElement('li');
    newTask.textContent = createTask.value;

    let done = document.createElement('button');
    done.classList.add('done');
    done.textContent = "✔";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete');

    
    deleteBtn.addEventListener('click', () => {
        taskParant.removeChild(newTask);
        if (currentTask === newTask) {
            currentTask = null;
            taskEdit.value = '';
        }
    });

    
    done.addEventListener('click', () => {
        newTask.classList.add('finished');
        done.style.backgroundColor = 'gray';
        done.style.border = 'none';
        newTask.style.color = 'gray';
    });


    newTask.addEventListener('click', () => {
        currentTask = newTask;               
        taskEdit.value = newTask.firstChild.textContent; 
    });


    newTask.appendChild(deleteBtn);
    newTask.appendChild(done);
    taskParant.appendChild(newTask);
    createTask.value = '';
});


taskEdit.addEventListener('input', () => {
    if (currentTask) {
        currentTask.firstChild.textContent = taskEdit.value;
    }
});
