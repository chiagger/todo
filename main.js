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

eval("console.log(\"try\");\n\nconst openBtn = document.querySelector(\".openbtn\");\nconst closeBtn = document.querySelector(\".closebtn\");\nconst maincontent = document.querySelector(\"#maincontent\");\n\n/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */\nfunction openNav() {\n    document.getElementById(\"mySidebar\").style.width = \"250px\";\n    const main = document.getElementById(\"main\");\n    main.style.marginLeft = \"250px\";\n    main.removeChild(openBtn);\n    maincontent.style.marginLeft=\"250px\";\n    \n  }\n  \n  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */\n  function closeNav() {\n    document.getElementById(\"mySidebar\").style.width = \"0\";\n    const main = document.getElementById(\"main\");\n    main.style.marginLeft = \"0px\";\n    maincontent.style.marginLeft=\"0px\";\n    main.appendChild(openBtn);\n  }\n  \n  openBtn.addEventListener(\"click\", openNav);\n  closeBtn.addEventListener(\"click\", closeNav);\n\n//# sourceURL=webpack://todo/./src/index.js?");

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