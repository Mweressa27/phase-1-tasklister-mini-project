//document.addEventListener("DOMContentLoaded", () => {
  // your code here
//});

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
    
    // Only add the task if it's not empty
    if (taskDescription) {
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskDescription;
      
      // Optionally, add a delete button to each task
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(li); // Remove the task from the list
      });
      
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      
      // Clear the input field after adding the task
      taskInput.value = '';
    }
  });
});

