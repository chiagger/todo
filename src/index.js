//general DOM variables
const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");
const newTaskBtn = document.querySelector("#addTask");
const submitBtn = document.querySelector("#button");

//sidebar
const sidebar = require('./sidebar.js');
openBtn.addEventListener("click", sidebar.openNav);
closeBtn.addEventListener("click", sidebar.closeNav);


//tasks
const form = require('./form.js');
const task = require('./task.js');
newTaskBtn.addEventListener("click", form.openForm);
submitBtn.addEventListener("click", () => {
    task.promptTask();
    form.closeForm()
});

