function completeTask(taskId) {
  var task = document.getElementById(taskId);
  task.style.display = "block";
}

function toggleCompleted() {
  var completedTasks = document.getElementById("completedTasks");
  if (completedTasks.style.display === "none" || completedTasks.style.display === "") {
      completedTasks.style.display = "block";
  } else {
      completedTasks.style.display = "none";
  }
}


  
  
  