document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('allBtn').addEventListener('click', showAllTasks);
document.getElementById('activeBtn').addEventListener('click', showActiveTasks);
document.getElementById('completedBtn').addEventListener('click', showCompletedTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="toggleTask(this)">Complete</button> <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleTask(button) {
    const task = button.parentElement;
    task.classList.toggle('completed');
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}

function showAllTasks() {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => task.style.display = 'flex');
}

function showActiveTasks() {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
    });
}

function showCompletedTasks() {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
    });
}
