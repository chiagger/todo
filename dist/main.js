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

eval("//general DOM variables\nconst openBtn = document.querySelector(\".openbtn\");\nconst closeBtn = document.querySelector(\".closebtn\");\nconst newTaskBtn = document.querySelector(\"#addTask\");\nconst submitBtn = document.querySelector(\"#button\");\n\n//sidebar\nconst sidebar = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\nopenBtn.addEventListener(\"click\", sidebar.openNav);\ncloseBtn.addEventListener(\"click\", sidebar.closeNav);\n\n\n//tasks\nconst form = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\nconst task = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\nnewTaskBtn.addEventListener(\"click\", form.openForm);\nsubmitBtn.addEventListener(\"click\", () => {\n    task.promptTask();\n    form.closeForm()\n});\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((module) => {

eval("const openBtn = document.querySelector(\".openbtn\");\n\nfunction openNav() {\n    document.getElementById(\"mySidebar\").style.width = \"250px\";\n    const main = document.getElementById(\"main\");\n    main.style.marginLeft = \"250px\";\n    main.removeChild(openBtn);\n    maincontent.style.marginLeft = \"250px\";\n}\n\nfunction closeNav() {\n    document.getElementById(\"mySidebar\").style.width = \"0\";\n    const main = document.getElementById(\"main\");\n    main.style.marginLeft = \"0px\";\n    maincontent.style.marginLeft = \"0px\";\n    main.appendChild(openBtn);\n}\n\nmodule.exports = {openNav, closeNav}\n\n\n\n//# sourceURL=webpack://todo/./src/sidebar.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((module) => {

eval("let task = class {\n    constructor(desc, date, done, starred) {\n        this.done = done;\n        this.desc = desc;\n        this.date = date;\n        this.starred = starred;\n    }\n    getDone() {\n        return this.done;\n    }\n    getDesc() {\n        return this.desc;\n    }\n    getDate() {\n        return this.date;\n    }\n    getStarred() {\n        return this.starred;\n    }\n\n    setStarred(value) {\n        this.starred = value;\n    }\n}\n\nconst descField = document.querySelector(\"#desc\");\nconst dateField = document.querySelector(\"#date\");\nconst doneField = document.querySelector(\"#done\");\nconst starredField = document.querySelector(\"#starred\");\nconst maincontent = document.querySelector(\"#maincontent\");\nconst taskContainer = document.querySelector(\".taskList\");\n\nlet taskArray = [];\n\n//create DOM task - and deal with its remove and edit buttons\nfunction makeTask(task) {\n    //create DOM task\n    const taskCard = document.createElement(\"div\");\n    taskCard.classList.add(\"task\");\n    const taskLeft = document.createElement(\"div\");\n    taskLeft.classList.add(\"task-left\");\n    const checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.classList.add(\"check\");\n    if (task.getDone() === true) {\n        checkbox.checked = true;\n    } else { checkbox.checked = false; }\n    const desc = document.createElement(\"div\");\n    desc.classList.add(\"desc\");\n    desc.textContent = task.getDesc();\n    taskLeft.appendChild(checkbox);\n    taskLeft.appendChild(desc);\n    const taskRight = document.createElement(\"div\");\n    taskRight.classList.add(\"task-right\");\n    const date = document.createElement(\"div\");\n    date.classList.add(\"date\");\n    date.textContent = task.getDate();\n    const starred = document.createElement(\"button\");\n    starred.style.backgroundColor = \"#C7D2FE\";\n    starred.style.outline = \"none\";\n    starred.style.border = \"none\";\n    starred.style.fontSize = \"1em\";\n    starred.style.color = \"#403FB9\";\n    if (task.getStarred() === true) {\n        starred.innerHTML = \"&#9733;\";\n    } else {\n        starred.innerHTML = \"&#9734;\";\n    }\n\n    const edit = document.createElement(\"div\");\n    edit.classList.add(\"edit\");\n    edit.innerHTML = \"&#10000;\";\n    const removeBtn = document.createElement(\"button\");\n    removeBtn.style.backgroundColor = \"#C7D2FE\";\n    removeBtn.style.outline = \"none\";\n    removeBtn.style.border = \"none\";\n    removeBtn.style.fontSize = \"1em\";\n    removeBtn.style.color = \"#403FB9\";\n    removeBtn.innerHTML = \"&#215;\";\n    taskRight.appendChild(date);\n    taskRight.appendChild(starred);\n    taskRight.appendChild(edit);\n    taskRight.appendChild(removeBtn);\n    taskCard.appendChild(taskLeft);\n    taskCard.appendChild(taskRight);\n    taskContainer.appendChild(taskCard);\n\n\n    //deal with starredBtn\n    starred.addEventListener(\"click\", function handleStar(e) {\n        if (task.getStarred() === true) {\n            starred.innerHTML = \"&#9734;\";\n            task.setStarred(false);\n        } else {\n            starred.innerHTML = \"&#9733;\";\n            task.setStarred(true);\n        }\n    });\n\n    //deal with removeBtn\n    removeBtn.addEventListener(\"click\", function handleRemove(e) {\n        taskContainer.removeChild(e.target.parentNode.parentNode);\n        let taskIndex = taskArray.indexOf(task);\n        if (taskIndex > -1) {\n            taskArray.splice(taskIndex, 1);\n        }\n    });\n\n    //deal with editBtn\n}\n\n//create js task\nfunction promptTask() {\n    let desc = descField.value;\n    let date = dateField.value;\n    let starred = starredField.checked;\n    let done = doneField.checked;\n    let thistask = new task(desc, date, done, starred);\n    taskArray.push(thistask);\n    makeTask(thistask);\n    //this resets the form after submission\n    descField.value = '';\n    dateField.value = '';\n    starredField.checked = false;\n    doneField.checked = false;\n}\n\n\n\nmodule.exports = { promptTask }\n\n//# sourceURL=webpack://todo/./src/task.js?");

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