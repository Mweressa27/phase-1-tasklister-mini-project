document.addEventListener('DOMContentLoaded', () => {
  // Select the form and the task list container
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  
  // Add an event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    
    // Get the input value from the text field
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value.trim();

    const selectPriority = document.getElementById('priority');
    const priorityValue = selectPriority.value;

    const ascendingButton = document.getElementById('sort-ascending');
    const descendingButton = document.getElementById('sort-descending');

    const userInput = document.getElementById('user').value;
    const durationInput = document.getElementById('duration').value;
    const dueDateInput = document.getElementById('due-date').value;
    
    // add a task 
    if (taskDescription) {
      const li = document.createElement('li');
      li.textContent = taskDescription;

      //set priority color
      if (priorityValue === 'high') {
        li.style.color = 'red';
      } else if (priorityValue === 'medium') {
        li.style.color = 'yellow';
      } else if (priorityValue === 'low') {
        li.style.color = 'green';
      }
      
      // add a delete button to each task
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(li); 
      });

      const userSpan = document.createElement('span');
      userSpan.textContent = `  User: ${userInput}`;
      li.appendChild(userSpan);

      const durationSpan = document.createElement('span');
      durationSpan.textContent = `  Duration: ${durationInput} hrs`;
      li.appendChild(durationSpan);

      const dueDateSpan = document.createElement('span');
      dueDateSpan.textContent = `  Due: ${dueDateInput}`;
      li.appendChild(dueDateSpan);

      li.appendChild(deleteButton);
      taskList.appendChild(li);
      
      taskInput.value = '';
      document.getElementById('priority').value = 'low';
      document.getElementById('user').value = '';
      document.getElementById('duration').value = '';
      document.getElementById('due-date').value = '';
      
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function() {
      newDescription = prompt("Edit task description:", taskDescription);
      if (newDescription) {
    li.textContent = newDescription;
    li.appendChild(editButton); 
    
  }
});

      li.appendChild(deleteButton);
      taskList.appendChild(li);
      
      // Clear the input field after adding the task
      taskInput.value = '';
    }
  });
  function sortTasks(ascending) {
    const tasks = taskList.children;
    tasks.sort((a, b) => {
      const priorityA = a.style.color;
      const priorityB = b.style.color;
      
      const setpriority = {
        red: 3,   
        yellow: 2, 
        green: 1   
      };
      
      return ascending 
        ? setpriority[priorityA] - setpriority[priorityB]
        : setpriority[priorityB] - setpriority[priorityA];
    });

    //tasks.forEach(task => taskList.appendChild(task));
  }

  ascendingButton.addEventListener('click', () => sortTasks(true));
  descendingButton.addEventListener('click', () => sortTasks(false));
});

