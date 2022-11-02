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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((module) => {

eval("\nfunction openForm() {\n    document.getElementById(\"myForm\").style.display = \"block\";\n}\n\nfunction closeForm() {\n    document.getElementById(\"myForm\").style.display = \"none\";\n}\n\nmodule.exports = {openForm, closeForm}\n\n//# sourceURL=webpack://todo/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//general DOM variables\nconst openBtn = document.querySelector(\".openbtn\");\nconst closeBtn = document.querySelector(\".closebtn\");\nconst newTaskBtn = document.querySelector(\"#addTask\");\nconst submitBtn = document.querySelector(\"#button\");\nconst allTasks = document.querySelector(\"#alltasks\");\nconst today = document.querySelector(\"#today\");\nconst thisweek = document.querySelector(\"#thisweek\");\nconst important = document.querySelector(\"#important\");\n\n\n//sidebar\nconst sidebar = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\nopenBtn.addEventListener(\"click\", sidebar.openNav);\ncloseBtn.addEventListener(\"click\", sidebar.closeNav);\n\n\n//tasks\nconst form = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\nconst task = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\nnewTaskBtn.addEventListener(\"click\", form.openForm);\nsubmitBtn.addEventListener(\"click\", () => {\n    task.promptTask();\n    form.closeForm()\n});\n\n//sidebar\nallTasks.addEventListener(\"click\", task.displayAllTab);\ntoday.addEventListener(\"click\", task.displayTodayTab);\nthisweek.addEventListener(\"click\", task.displayWeekTab);\nimportant.addEventListener(\"click\", task.displayStarredTab);\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((module) => {

eval("const openBtn = document.querySelector(\".openbtn\");\n\nfunction openNav() {\n    document.getElementById(\"mySidebar\").style.width = \"250px\";\n    const main = document.getElementById(\"main\");\n    main.style.marginLeft = \"250px\";\n    main.removeChild(openBtn);\n    maincontent.style.marginLeft = \"250px\";\n}\n\nfunction closeNav() {\n    document.getElementById(\"mySidebar\").style.width = \"0\";\n    const main = document.getElementById(\"main\");\n    main.style.marginLeft = \"0px\";\n    maincontent.style.marginLeft = \"0px\";\n    main.appendChild(openBtn);\n}\n\n\n\nmodule.exports = {openNav, closeNav}\n\n\n\n//# sourceURL=webpack://todo/./src/sidebar.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((module) => {

eval("let task = class {\n    constructor(desc, date, done, starred) {\n        this.done = done;\n        this.desc = desc;\n        this.date = date;\n        this.starred = starred;\n    }\n    getDone() {\n        return this.done;\n    }\n    getDesc() {\n        return this.desc;\n    }\n    getDate() {\n        return this.date;\n    }\n    getStarred() {\n        return this.starred;\n    }\n    setStarred(value) {\n        this.starred = value;\n    }\n    setDone(value) {\n        this.done = value;\n    }\n}\n\nconst descField = document.querySelector(\"#desc\");\nconst dateField = document.querySelector(\"#date\");\nconst doneField = document.querySelector(\"#done\");\nconst starredField = document.querySelector(\"#starred\");\nconst taskContainer = document.querySelector(\".taskList\");\nconst title = document.querySelector(\"#title\");\n\nlet taskArray = [];\n\n//create DOM task - and deal with its remove and edit buttons\nfunction makeTask(task) {\n    //create DOM task\n    const taskCard = document.createElement(\"div\");\n    taskCard.classList.add(\"task\");\n    const taskLeft = document.createElement(\"div\");\n    taskLeft.classList.add(\"task-left\");\n    const checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.classList.add(\"check\");\n    if (task.getDone() === true) {\n        checkbox.checked = true;\n    } else { checkbox.checked = false; }\n    const desc = document.createElement(\"div\");\n    desc.classList.add(\"desc\");\n    if (task.getDone() === true) {\n        desc.innerHTML = task.getDesc().strike();\n        desc.style.color = \"#818cf8\";\n    } else {\n        desc.textContent = task.getDesc();\n    }\n    taskLeft.appendChild(checkbox);\n    taskLeft.appendChild(desc);\n    const taskRight = document.createElement(\"div\");\n    taskRight.classList.add(\"task-right\");\n    const date = document.createElement(\"div\");\n    date.classList.add(\"date\");\n    date.textContent = task.getDate();\n    const starred = document.createElement(\"button\");\n    starred.style.backgroundColor = \"#C7D2FE\";\n    starred.style.outline = \"none\";\n    starred.style.border = \"none\";\n    starred.style.fontSize = \"1em\";\n    starred.style.color = \"#403FB9\";\n    if (task.getStarred() === true) {\n        starred.innerHTML = \"&#9733;\";\n    } else {\n        starred.innerHTML = \"&#9734;\";\n    }\n    const removeBtn = document.createElement(\"button\");\n    removeBtn.style.backgroundColor = \"#C7D2FE\";\n    removeBtn.style.outline = \"none\";\n    removeBtn.style.border = \"none\";\n    removeBtn.style.fontSize = \"1em\";\n    removeBtn.style.color = \"#403FB9\";\n    removeBtn.innerHTML = \"&#215;\";\n    taskRight.appendChild(date);\n    taskRight.appendChild(starred);\n    taskRight.appendChild(removeBtn);\n    taskCard.appendChild(taskLeft);\n    taskCard.appendChild(taskRight);\n    taskContainer.appendChild(taskCard);\n\n\n    //deal with starredBtn\n    starred.addEventListener(\"click\", function handleStar(e) {\n        if (task.getStarred() === true) {\n            starred.innerHTML = \"&#9734;\";\n            task.setStarred(false);\n        } else {\n            starred.innerHTML = \"&#9733;\";\n            task.setStarred(true);\n        }\n    });\n\n    //deal with doneBtn\n    checkbox.addEventListener(\"click\", function handleDone(e) {\n        if (task.getDone() === true) {\n            desc.textContent = task.getDesc();\n            desc.style.color = \"#4435B6\";\n            checkbox.checked = false;\n            task.setDone(false);\n        } else {\n            desc.innerHTML = task.getDesc().strike();\n            desc.style.color = \"#818cf8\";\n            checkbox.checked = true;\n            task.setDone(true);\n        }\n    });\n\n    //deal with removeBtn\n    removeBtn.addEventListener(\"click\", function handleRemove(e) {\n        taskContainer.removeChild(e.target.parentNode.parentNode);\n        let taskIndex = taskArray.indexOf(task);\n        if (taskIndex > -1) {\n            taskArray.splice(taskIndex, 1);\n        }\n    });\n}\n\n//create js task\nfunction promptTask() {\n    let desc = descField.value;\n    let date = dateField.value;\n    let starred = starredField.checked;\n    let done = doneField.checked;\n    let thistask = new task(desc, date, done, starred);\n    taskArray.push(thistask);\n    makeTask(thistask);\n    //this resets the form after submission\n    descField.value = '';\n    dateField.value = '';\n    starredField.checked = false;\n    doneField.checked = false;\n}\n\nfunction displayAllTab() {\n    //remove all tasks\n    while (taskContainer.hasChildNodes()) {\n        taskContainer.removeChild(taskContainer.firstChild);\n    }\n    //set title\n    title.innerHTML = \"All Tasks\";\n    //add all [filtered] tasks\n    taskArray.forEach(task => { makeTask(task) });\n}\n\nfunction toFormattedString(someDate) {\n    let result = \"\";\n    result += someDate.getFullYear();\n    result += \"-\";\n    let month = someDate.getMonth() + 1;\n    if (month.length === 1) {\n        month = \"0\" + month;\n    }\n    result += month\n    result += \"-\";\n    let date = someDate.getDate();\n    if (date.toString().length === 1) {\n        date = \"0\" + date;\n    }\n    result += date;\n    return result;\n}\n\nfunction displayTodayTab() {\n    //remove all tasks\n    while (taskContainer.hasChildNodes()) {\n        taskContainer.removeChild(taskContainer.firstChild);\n    }\n    //set title\n    title.innerHTML = \"Today\";\n    //add all [filtered] tasks\n    const today = new Date();\n    taskArray.forEach(task => {\n        if (task.getDate() === toFormattedString(today))\n            makeTask(task);\n    });\n}\n\n//checks if someDate <= today + 7days\nfunction nextSevenDays(someDate) {\n    const today = new Date();\n    const todayString = toFormattedString(today);\n\n    let todayFormatted = new Date(todayString);\n    let nextSevenDays = new Date(todayString);\n    let dateFormatted = new Date(someDate);\n    nextSevenDays.setDate(nextSevenDays.getDate() + 7)\n\n    if (dateFormatted <= nextSevenDays\n        && dateFormatted >= todayFormatted) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\nfunction displayWeekTab() {\n    while (taskContainer.hasChildNodes()) {\n        taskContainer.removeChild(taskContainer.firstChild);\n    }\n    title.innerHTML = \"This Week\";\n\n    taskArray.forEach(task => {\n        if (nextSevenDays(task.getDate())) {\n            makeTask(task);\n        }\n    });\n}\n\nfunction displayStarredTab() {\n    while (taskContainer.hasChildNodes()) {\n        taskContainer.removeChild(taskContainer.firstChild);\n    }\n    title.innerHTML = \"Starred Tasks\";\n\n    taskArray.forEach(task => {\n        if (task.getStarred()) {\n            makeTask(task);\n        }\n    });\n}\n\nmodule.exports = { promptTask, displayAllTab, displayTodayTab, displayWeekTab, displayStarredTab }\n\n//# sourceURL=webpack://todo/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;