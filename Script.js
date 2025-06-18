const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = document.getElementById("taskInput").value.trim();
  const taskDate = document.getElementById("taskDate").value;
  const taskTime = document.getElementById("taskTime").value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.textContent = `${taskText} (${taskDate} ${taskTime})`;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.onclick = () => {
    taskContent.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) taskContent.textContent = `${newTask} (${taskDate} ${taskTime})`;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(actions);
  taskList.appendChild(li);

  document.getElementById("taskInput").value = "";
  document.getElementById("taskDate").value = "";
  document.getElementById("taskTime").value = "";
}
