const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");
const maincontent = document.querySelector("#maincontent");
const taskContainer = document.querySelector(".taskList");
const newTaskBtn = document.querySelector("#addTask");
const descField = document.querySelector("#desc");
const dateField = document.querySelector("#date");
const doneField = document.querySelector("#done");
const starredField = document.querySelector("#starred");
const submitBtn = document.querySelector("#submit");

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    const main = document.getElementById("main");
    main.style.marginLeft = "250px";
    main.removeChild(openBtn);
    maincontent.style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    const main = document.getElementById("main");
    main.style.marginLeft = "0px";
    maincontent.style.marginLeft = "0px";
    main.appendChild(openBtn);
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);


let taskArray = [];

let task = class {
    constructor(desc, date, done, starred) {
        this.done = done;
        this.desc = desc;
        this.date = date;
        this.starred = starred;
    }
    getDone() {
        return this.done;
    }
    getDesc() {
        return this.desc;
    }
    getDate() {
        return this.date;
    }
    getStarred() {
        return this.starred;
    }
}



function makeTask(task) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task");

    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    const desc = document.createElement("div");
    desc.classList.add("desc");
    desc.textContent = task.getDesc();
    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(desc);

    const taskRight = document.createElement("div");
    taskRight.classList.add("task-right");
    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = task.getDate();
    const edit = document.createElement("div");
    edit.classList.add("edit");
    edit.innerHTML = "&#10000;";
    const removeBtn = document.createElement("button");
    removeBtn.style.backgroundColor = "#C7D2FE";
    removeBtn.style.outline = "none";
    removeBtn.style.border = "none";
    removeBtn.style.fontSize = "1em";
    removeBtn.style.color = "#403FB9";
    removeBtn.innerHTML = "&#215;";
    taskRight.appendChild(date);
    taskRight.appendChild(edit);
    taskRight.appendChild(removeBtn);

    taskCard.appendChild(taskLeft);
    taskCard.appendChild(taskRight);

    taskContainer.appendChild(taskCard);
    removeBtn.addEventListener("click",function handle(e) { 
        taskContainer.removeChild(e.target.parentNode.parentNode); 
        console.log(taskArray);
        let taskIndex = taskArray.indexOf(task);
        if (taskIndex > -1) { 
            taskArray.splice(taskIndex, 1);
          }
        console.log(taskArray);
    });
}

function promptTask() {
    let desc = descField.value;
    let date = dateField.value;
    let starred = starredField.value;
    let done = doneField.value;
    let thistask = new task(desc, date, done, starred);
    taskArray.push(thistask);
    makeTask(thistask);
    closeForm();
}

function removeTask(e) {
    console.log(e.target);
    taskContainer.removeChild(e.target);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

newTaskBtn.addEventListener("click", openForm);
submitBtn.addEventListener("click", promptTask);

