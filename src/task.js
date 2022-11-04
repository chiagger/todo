let task = class {
    constructor(desc, date, done, starred, project) {
        this.done = done;
        this.desc = desc;
        this.date = date;
        this.starred = starred;
        this.project = project;
    }
    getProject() {
        return this.project;
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
const projField = document.querySelector("#proj");
const taskContainer = document.querySelector(".taskList");
const title = document.querySelector("#title");
const projContainer = document.querySelector(".proj");

let defaultTaskArray = [];
let taskArray = localStorage.getItem('user');
taskArray = JSON.parse(taskArray || JSON.stringify(defaultTaskArray));

function storeMyTasks() {
    while (localStorage.getItem('user') != null) {
        localStorage.clear();
    }
    window.localStorage.setItem('user', JSON.stringify(taskArray));
    //console.log(localStorage.getItem('user'));
    console.log(taskArray);
}

//create DOM task - and deal with its remove and edit buttons
function makeTask(task) {
    storeMyTasks();
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
    const descContainer = document.createElement("div");
    descContainer.classList.add("descContainer");
    const desc = document.createElement("div");
    desc.classList.add("desc");
    if (task.getDone() === true) {
        desc.innerHTML = task.getDesc().strike();
        desc.style.color = "#818cf8";
    } else {
        desc.textContent = task.getDesc();
    }
    const projName = document.createElement("div");
    projName.classList.add("projName");
    projName.textContent = task.getProject();
    descContainer.appendChild(desc);
    descContainer.appendChild(projName);
    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(descContainer);
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
        let index;
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].desc === task.getDesc()
                && taskArray[i].date === task.getDate()
                && taskArray[i].project === task.getProject()) {
                index = i;
            }
        }
        if (task.getStarred() === true) {
            starred.innerHTML = "&#9734;";
            task.setStarred(false);
            taskArray[index].starred = false;           //modify task array
        } else {
            starred.innerHTML = "&#9733;";
            task.setStarred(true);
            taskArray[index].starred = true;
        }
        storeMyTasks();
    });

    //deal with doneBtn
    checkbox.addEventListener("click", function handleDone(e) {
        let index;
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].desc === task.getDesc()
                && taskArray[i].date === task.getDate()
                && taskArray[i].project === task.getProject()) {
                index = i;
            }
        }
        if (task.getDone() === true) {
            desc.textContent = task.getDesc();
            desc.style.color = "#4435B6";
            checkbox.checked = false;
            task.setDone(false);
            taskArray[index].done = false;           //modify task array

        } else {
            desc.innerHTML = task.getDesc().strike();
            desc.style.color = "#818cf8";
            checkbox.checked = true;
            task.setDone(true);
            taskArray[index].done = true;           //modify task array

        }
        storeMyTasks();
    });

    //deal with removeBtn
    removeBtn.addEventListener("click", function handleRemove(e) {
        let index;
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].desc === task.getDesc()
                && taskArray[i].date === task.getDate()
                && taskArray[i].project === task.getProject()) {
                index = i;
            }
        }
        taskContainer.removeChild(e.target.parentNode.parentNode);
        taskArray.splice(taskArray[index], 1);
        storeMyTasks();
    });
}

//create js task
function promptTask() {
    let desc = descField.value;
    let date = dateField.value;
    let starred = starredField.checked;
    let done = doneField.checked;
    let proj = projField.value;
    if (projField.value.length === 0) {
        proj = "default";
    }
    //form validation!!!
    let found = false;
    const projList = document.querySelectorAll(".oneproject");

    if (proj != "default") {
        projList.forEach(thisproj => {
            if (thisproj.textContent === proj) {
                found = true;
            }
        })
        if (found) {
            proj = projField.value;
            let thistask = new task(desc, date, done, starred, proj);
            taskArray.push(thistask);
            makeTask(thistask);
        } else {
            alert("Insert existing project");
        }
    } else {
        let thistask = new task(desc, date, done, starred, proj);
        taskArray.push(thistask);
        makeTask(thistask);
    }


    //this resets the form after submission
    projField.value = '';
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
    let month = someDate.getMonth() + 1;
    if (month.length === 1) {
        month = "0" + month;
    }
    result += month
    result += "-";
    let date = someDate.getDate();
    if (date.toString().length === 1) {
        date = "0" + date;
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

//checks if someDate <= today + 7days
function nextSevenDays(someDate) {
    const today = new Date();
    const todayString = toFormattedString(today);

    let todayFormatted = new Date(todayString);
    let nextSevenDays = new Date(todayString);
    let dateFormatted = new Date(someDate);
    nextSevenDays.setDate(nextSevenDays.getDate() + 7)

    if (dateFormatted <= nextSevenDays
        && dateFormatted >= todayFormatted) {
        return true;
    } else {
        return false;
    }
}

function displayWeekTab() {
    while (taskContainer.hasChildNodes()) {
        taskContainer.removeChild(taskContainer.firstChild);
    }
    title.innerHTML = "This Week";

    taskArray.forEach(task => {
        if (nextSevenDays(task.getDate())) {
            makeTask(task);
        }
    });
}

function displayStarredTab() {
    while (taskContainer.hasChildNodes()) {
        taskContainer.removeChild(taskContainer.firstChild);
    }
    title.innerHTML = "Starred Tasks";

    taskArray.forEach(task => {
        if (task.getStarred()) {
            makeTask(task);
        }
    });
}

function displayProjectTab(e) {
    while (taskContainer.hasChildNodes()) {
        taskContainer.removeChild(taskContainer.firstChild);
    }
    title.innerHTML = e.target.textContent;

    taskArray.forEach(task => {
        if (task.getProject() === e.target.textContent) {
            makeTask(task);
        }
    });
}

function createProject() {
    const proj = document.createElement("a");
    const name = prompt("Project name?");
    proj.textContent = name;
    proj.classList.add("oneproject");
    projContainer.appendChild(proj);
    proj.addEventListener("click", displayProjectTab);
}

function retrieveRecords() { //retrieves items in the localStorage
    storeMyTasks();
    const records = JSON.parse(localStorage.getItem('user'));
    if (records != null) {
        records.forEach(record => {
            let newTask = new task(record.desc, record.date,
                record.done, record.starred, record.project);
            makeTask(newTask);
        });
    }
}

module.exports = { promptTask, displayAllTab, displayTodayTab, displayWeekTab, displayStarredTab, createProject, retrieveRecords }