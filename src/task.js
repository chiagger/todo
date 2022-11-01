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
    setDone(value) {
        this.done = value;
    }
}

const descField = document.querySelector("#desc");
const dateField = document.querySelector("#date");
const doneField = document.querySelector("#done");
const starredField = document.querySelector("#starred");
const taskContainer = document.querySelector(".taskList");
const title = document.querySelector("#title");

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
    if (task.getDone() === true) {
        desc.innerHTML = task.getDesc().strike();
        desc.style.color = "#818cf8";
    } else {
        desc.textContent = task.getDesc();
    }
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
    const removeBtn = document.createElement("button");
    removeBtn.style.backgroundColor = "#C7D2FE";
    removeBtn.style.outline = "none";
    removeBtn.style.border = "none";
    removeBtn.style.fontSize = "1em";
    removeBtn.style.color = "#403FB9";
    removeBtn.innerHTML = "&#215;";
    taskRight.appendChild(date);
    taskRight.appendChild(starred);
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

    //deal with doneBtn
    checkbox.addEventListener("click", function handleDone(e) {
        if (task.getDone() === true) {
            desc.textContent = task.getDesc();
            desc.style.color = "#4435B6";
            checkbox.checked = false;
            task.setDone(false);
        } else {
            desc.innerHTML = task.getDesc().strike();
            desc.style.color = "#818cf8";
            checkbox.checked = true;
            task.setDone(true);
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

function displayAllTab() {
    //remove all tasks
    while (taskContainer.hasChildNodes()) {
        taskContainer.removeChild(taskContainer.firstChild);
    }
    //set title
    title.innerHTML = "All Tasks";
    //add all [filtered] tasks
    taskArray.forEach(task => { makeTask(task) });
}

function toFormattedString(someDate) {
    let result = "";
    result += someDate.getFullYear();
    result += "-";
    let month = someDate.getMonth()+1;
    if (month.length === 1) {
        month = "0"+month;
    }
    result += month
    result += "-";
    let date = someDate.getDate();
    if (date.toString().length === 1) {
        date = "0"+date;
    }
    result += date;
    return result;
}

function displayTodayTab() {
    //remove all tasks
    while (taskContainer.hasChildNodes()) {
        taskContainer.removeChild(taskContainer.firstChild);
    }
    //set title
    title.innerHTML = "Today";
    //add all [filtered] tasks
    const today = new Date();
    taskArray.forEach(task => {
        if (task.getDate() === toFormattedString(today))
            makeTask(task);
    });
}

module.exports = { promptTask, displayAllTab, displayTodayTab }