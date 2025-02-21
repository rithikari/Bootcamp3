function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.className = "list-group-item";

    let span = document.createElement("span");
    span.innerText = taskText;
    span.onclick = function() {
        this.classList.toggle("completed");
    };

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "❌";
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

