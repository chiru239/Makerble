document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('#new-task-input');
    const taskForm = document.querySelector('#task-form');
    const taskList = document.querySelector('#task-list');


    if (taskForm && taskInput) {
        taskForm.addEventListener('submit', (event) => {
            event.preventDefault();


            if (taskInput.value.length < 3) {
                alert('Task name must be at least 3 characters long.');
                return;
            }


            const newTask = document.createElement('li');
            newTask.className = 'bg-gray-50 p-3 rounded-md shadow-sm mb-2';
            newTask.textContent = taskInput.value;


            taskList.appendChild(newTask);


            taskInput.value = '';
        });
    } else {
        console.error('Element not found: #task-form or #new-task-input');
    }
});