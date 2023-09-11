// Daily To-Do List
function addDailyTask() {
    const taskInput = document.getElementById('daily-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const dailyList = document.getElementById('daily-list');
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span> <button onclick="completeTask(this)">Complete</button>`;
        dailyList.appendChild(li);
        taskInput.value = '';

        // Set a timer to remove the task after 24 hours
        setTimeout(() => {
            removeTask(li);
        }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
    }
}

// Weekly To-Do List
function addWeeklyTask() {
    const taskInput = document.getElementById('weekly-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const weeklyList = document.getElementById('weekly-list');
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span> <button onclick="completeTask(this)">Complete</button>`;
        weeklyList.appendChild(li);
        taskInput.value = '';

        // Set a timer to remove the task after 7 days
        setTimeout(() => {
            removeTask(li);
        }, 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
    }
}

// Weekly/Monthly To-Do List
function addMonthlyTask() {
    const taskInput = document.getElementById('monthly-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const monthlyList = document.getElementById('monthly-list');
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span> <button onclick="completeTask(this)">Complete</button>`;
        monthlyList.appendChild(li);
        taskInput.value = '';

        // Set a timer to remove the task after 30 days
        setTimeout(() => {
            removeTask(li);
        }, 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds
    }
}

function completeTask(button) {
    const taskTextElement = button.parentElement.querySelector('span');
    taskTextElement.style.textDecoration = 'line-through';
    button.style.display = 'none'; // Hide the "Complete" button after marking as complete
}

function removeTask(taskElement) {
    taskElement.remove();
}
