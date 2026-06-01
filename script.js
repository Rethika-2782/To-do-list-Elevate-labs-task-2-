// ============================================================
//  To-Do List App — script.js
//  Features: Add, Complete (toggle), Delete, Filter, Count
// ============================================================

// ---------- State ----------
let tasks = [];          // Array of task objects: { id, text, completed }
let currentFilter = 'all'; // 'all' | 'active' | 'completed'

// ---------- DOM References ----------
const taskInput     = document.getElementById('taskInput');
const addBtn        = document.getElementById('addBtn');
const taskList      = document.getElementById('taskList');
const taskCount     = document.getElementById('taskCount');
const clearBtn      = document.getElementById('clearCompleted');
const filterBtns    = document.querySelectorAll('.filter-btn');

// ---------- Helpers ----------

/**
 * Generate a simple unique ID using timestamp + random number.
 * @returns {string}
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

/**
 * Return tasks filtered by the current filter setting.
 * @returns {Array}
 */
function getFilteredTasks() {
  if (currentFilter === 'active')    return tasks.filter(t => !t.completed);
  if (currentFilter === 'completed') return tasks.filter(t => t.completed);
  return tasks;
}

/**
 * Update the "X tasks left" counter in the footer.
 */
function updateCounter() {
  const remaining = tasks.filter(t => !t.completed).length;
  taskCount.textContent = `${remaining} task${remaining !== 1 ? 's' : ''} left`;
}

// ---------- Render ----------

/**
 * Re-render the task list based on current tasks and filter.
 * Uses event delegation on the <ul> for check and delete clicks.
 */
function renderTasks() {
  taskList.innerHTML = '';

  const visible = getFilteredTasks();

  visible.forEach(task => {
    const li = document.createElement('li');
    li.classList.add('task-item');
    if (task.completed) li.classList.add('completed');
    li.dataset.id = task.id;

    // Check button
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn');
    checkBtn.setAttribute('aria-label', task.completed ? 'Mark incomplete' : 'Mark complete');
    checkBtn.dataset.action = 'check';

    // Task text
    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = task.text;

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.innerHTML = '&times;';
    delBtn.setAttribute('aria-label', 'Delete task');
    delBtn.dataset.action = 'delete';

    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });

  updateCounter();
}

// ---------- Actions ----------

/**
 * Add a new task from the input field.
 */
function addTask() {
  const text = taskInput.value.trim();
  if (!text) {
    // Shake the input to give feedback
    taskInput.style.borderColor = '#e05555';
    taskInput.focus();
    setTimeout(() => { taskInput.style.borderColor = ''; }, 800);
    return;
  }

  const newTask = {
    id: generateId(),
    text,
    completed: false
  };

  tasks.push(newTask);
  taskInput.value = '';
  taskInput.focus();
  renderTasks();
}

/**
 * Toggle the completed state of a task by its ID.
 * @param {string} id
 */
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

/**
 * Remove a task from the array by its ID.
 * @param {string} id
 */
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

/**
 * Remove all completed tasks.
 */
function clearCompleted() {
  tasks = tasks.filter(t => !t.completed);
  renderTasks();
}

// ---------- Event Listeners ----------

// Add button click
addBtn.addEventListener('click', addTask);

// Enter key in input
taskInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTask();
});

// Event delegation on task list (check / delete)
taskList.addEventListener('click', function(e) {
  const btn    = e.target.closest('[data-action]');
  const listEl = e.target.closest('.task-item');
  if (!btn || !listEl) return;

  const id     = listEl.dataset.id;
  const action = btn.dataset.action;

  if (action === 'check')  toggleTask(id);
  if (action === 'delete') deleteTask(id);
});

// Filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.dataset.filter;
    renderTasks();
  });
});

// Clear completed
clearBtn.addEventListener('click', clearCompleted);

// ---------- Init ----------
renderTasks(); // Render empty state on load