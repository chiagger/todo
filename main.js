/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const openBtn = document.querySelector(\".openbtn\");\nconst closeBtn = document.querySelector(\".closebtn\");\nconst maincontent = document.querySelector(\"#maincontent\");\nconst taskContainer = document.querySelector(\".taskList\");\nconst newTaskBtn = document.querySelector(\"#addTask\");\nconst descField = document.querySelector(\"#desc\");\nconst dateField = document.querySelector(\"#date\");\nconst doneField = document.querySelector(\"#done\");\nconst starredField = document.querySelector(\"#starred\");\nconst submitBtn = document.querySelector(\"#submit\");\n\n\nfunction openNav() {\n    document.getElementById(\"mySidebar\").style.width = \"250px\";\n    const main = document.getElementById(\"main\");\n    main.style.marginLeft = \"250px\";\n    main.removeChild(openBtn);\n    maincontent.style.marginLeft = \"250px\";\n}\n\nfunction closeNav() {\n    document.getElementById(\"mySidebar\").style.width = \"0\";\n    const main = document.getElementById(\"main\");\n    main.style.marginLeft = \"0px\";\n    maincontent.style.marginLeft = \"0px\";\n    main.appendChild(openBtn);\n}\n\nopenBtn.addEventListener(\"click\", openNav);\ncloseBtn.addEventListener(\"click\", closeNav);\n\n\nlet taskArray = [];\n\nlet task = class {\n    constructor(desc, date, done, starred) {\n        this.done = done;\n        this.desc = desc;\n        this.date = date;\n        this.starred = starred;\n    }\n    getDone() {\n        return this.done;\n    }\n    getDesc() {\n        return this.desc;\n    }\n    getDate() {\n        return this.date;\n    }\n    getStarred() {\n        return this.starred;\n    }\n}\n\nfunction makeTask(task) {\n    const taskCard = document.createElement(\"div\");\n    taskCard.classList.add(\"task\");\n\n    const taskLeft = document.createElement(\"div\");\n    taskLeft.classList.add(\"task-left\");\n    const checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.classList.add(\"check\");\n    const desc = document.createElement(\"div\");\n    desc.classList.add(\"desc\");\n    desc.textContent = task.getDesc();\n    taskLeft.appendChild(checkbox);\n    taskLeft.appendChild(desc);\n\n    const taskRight = document.createElement(\"div\");\n    taskRight.classList.add(\"task-right\");\n    const date = document.createElement(\"div\");\n    date.classList.add(\"date\");\n    date.textContent = task.getDate();\n    const edit = document.createElement(\"div\");\n    edit.classList.add(\"edit\");\n    edit.innerHTML = \"&#10000;\";\n    const remove = document.createElement(\"div\");\n    remove.classList.add = \"remove\";\n    remove.innerHTML = \"&#215;\";\n    taskRight.appendChild(date);\n    taskRight.appendChild(edit);\n    taskRight.appendChild(remove);\n\n    taskCard.appendChild(taskLeft);\n    taskCard.appendChild(taskRight);\n\n    taskContainer.appendChild(taskCard);\n}\n\nfunction promptTask() {\n    let desc = descField.value;\n    let date = dateField.value;\n    let starred = starredField.value;\n    let done = doneField.value;\n    let thistask = new task(desc, date, done, starred);\n    taskArray.push(thistask);\n    makeTask(thistask);\n    closeForm();\n}\n\nfunction openForm() {\n    document.getElementById(\"myForm\").style.display = \"block\";\n}\n\nfunction closeForm() {\n    document.getElementById(\"myForm\").style.display = \"none\";\n}\n\nnewTaskBtn.addEventListener(\"click\", openForm);\nsubmitBtn.addEventListener(\"click\", promptTask);\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;