//general DOM variables
const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");
const newTaskBtn = document.querySelector("#addTask");
const submitBtn = document.querySelector("#button");
const allTasks = document.querySelector("#alltasks");
const today = document.querySelector("#today");
const thisweek = document.querySelector("#thisweek");
const important = document.querySelector("#important");
const addProjectBtn = document.querySelector("#addProjectBtn");

const task = require('./task.js');
task.retrieveRecords();


//sidebar
const sidebar = require('./sidebar.js');
openBtn.addEventListener("click", sidebar.openNav);
closeBtn.addEventListener("click", sidebar.closeNav);

//tasks
const form = require('./form.js');
newTaskBtn.addEventListener("click", form.openForm);
submitBtn.addEventListener("click", () => {
    task.promptTask();
    form.closeForm()
});

//sidebar
allTasks.addEventListener("click", task.displayAllTab);
today.addEventListener("click", task.displayTodayTab);
thisweek.addEventListener("click", task.displayWeekTab);
important.addEventListener("click", task.displayStarredTab);
addProjectBtn.addEventListener("click", task.createProject);
