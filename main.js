// Get the input element and the container for tasks
const input = document.getElementById("input");
const taskContainer = document.getElementById("bottom");

// Add event listener for the Enter key
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    AddBtn();
  }
});

// Function to add a new task
function AddBtn() {
  // Check if the input value is empty
  if (input.value.trim() === "") {
    alert("Task cannot be empty");
    return;
  }

  // Create a unique ID for the task using the current timestamp
  const taskId = `task-${Date.now()}`;

  // Create the HTML for the new task
  const output = ` <div class="list">
                                                                                <label style="cursor: pointer">
                                                                                        <input type="checkbox" onClick="Checkbox(event)" />
                                                                                        <span id="${taskId}">${input.value}</span>
                                                                                </label>
                                                                                <span style="cursor: pointer" onclick="removeTask(event)">&#10006;</span>
                                                                        </div>`;

  // Add the new task to the task container
  taskContainer.innerHTML += output;

  // Clear the input field
  input.value = "";
}

// Function to handle checkbox click event
function Checkbox(event) {
  // Get the checkbox element
  const checkbox = event.target;

  // Get the task element (the next sibling of the checkbox)
  const task = checkbox.nextElementSibling;

  // If the checkbox is checked, add a line-through style to the task
  if (checkbox.checked) {
    task.style.textDecoration = "line-through";
  } else {
    task.style.textDecoration = "none";
  }
}
// Function to remove a task
function removeTask(event) {
  // Get the closest parent element with the class "list"
  const taskElement = event.target.closest(".list");

  // Remove the task element from the DOM
  taskElement.remove();
}
