function addTask() {
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    if (input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = function () {
        li.remove();
    };

    list.appendChild(li);
    input.value = "";
}