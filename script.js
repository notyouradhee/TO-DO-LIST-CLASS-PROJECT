// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const toggleThemeBtn = document.getElementById('toggleTheme');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Prevent adding empty tasks

    const li = document.createElement('li');
    li.className = 'task-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    
    const span = document.createElement('span');
    span.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    
    // Event listener to mark task as complete
    checkbox.onchange = function() {
        if (checkbox.checked) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    taskInput.value = ''; // Clear input field
}

// Function to toggle dark/light mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
toggleThemeBtn.addEventListener('click', toggleTheme);