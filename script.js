function addTask() {
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
}