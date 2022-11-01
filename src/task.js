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

    setStarred(value) {
        this.starred = value;
    }
}

const descField = document.querySelector("#desc");
const dateField = document.querySelector("#date");
const doneField = document.querySelector("#done");
const starredField = document.querySelector("#starred");
const maincontent = document.querySelector("#maincontent");
const taskContainer = document.querySelector(".taskList");

let taskArray = [];

//create DOM task - and deal with its remove and edit buttons
function makeTask(task) {
    //create DOM task
    const taskCard = document.createElement("div");
    taskCard.classList.add("task");
    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    if (task.getDone() === true) {
        checkbox.checked = true;
    } else { checkbox.checked = false; }
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
    const starred = document.createElement("button");
    starred.style.backgroundColor = "#C7D2FE";
    starred.style.outline = "none";
    starred.style.border = "none";
    starred.style.fontSize = "1em";
    starred.style.color = "#403FB9";
    if (task.getStarred() === true) {
        starred.innerHTML = "&#9733;";
    } else {
        starred.innerHTML = "&#9734;";
    }

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
    taskRight.appendChild(starred);
    taskRight.appendChild(edit);
    taskRight.appendChild(removeBtn);
    taskCard.appendChild(taskLeft);
    taskCard.appendChild(taskRight);
    taskContainer.appendChild(taskCard);


    //deal with starredBtn
    starred.addEventListener("click", function handleStar(e) {
        if (task.getStarred() === true) {
            starred.innerHTML = "&#9734;";
            task.setStarred(false);
        } else {
            starred.innerHTML = "&#9733;";
            task.setStarred(true);
        }
    });

    //deal with removeBtn
    removeBtn.addEventListener("click", function handleRemove(e) {
        taskContainer.removeChild(e.target.parentNode.parentNode);
        let taskIndex = taskArray.indexOf(task);
        if (taskIndex > -1) {
            taskArray.splice(taskIndex, 1);
        }
    });

    //deal with editBtn
}

//create js task
function promptTask() {
    let desc = descField.value;
    let date = dateField.value;
    let starred = starredField.checked;
    let done = doneField.checked;
    let thistask = new task(desc, date, done, starred);
    taskArray.push(thistask);
    makeTask(thistask);
    //this resets the form after submission
    descField.value = '';
    dateField.value = '';
    starredField.checked = false;
    doneField.checked = false;
}



module.exports = { promptTask }