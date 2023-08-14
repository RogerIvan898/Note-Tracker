/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainScript: () => (/* binding */ mainScript),\n/* harmony export */   noteTypes: () => (/* binding */ noteTypes)\n/* harmony export */ });\nfunction mainScript() {\n    let notes = new NoteList();\n    let buttonMakeNote = document.getElementsByClassName('header-type')[0];\n    buttonMakeNote.addEventListener('click', () => {\n        let makeNoteTab = document.getElementsByClassName('make-note-tab')[0];\n        makeNoteTab.style.clipPath = 'circle(100%)';\n    });\n    let buttonShowNotes = document.getElementsByClassName('header-type')[1];\n    buttonShowNotes.addEventListener('click', () => {\n        window.location.href = 'http://localhost:3000/notes';\n    });\n    let buttonNoteTabExit = document.getElementsByClassName('make-note-tab-title-exit')[0];\n    buttonNoteTabExit.addEventListener('click', () => {\n        let makeNoteTab = document.getElementsByClassName('make-note-tab')[0];\n        makeNoteTab.style.clipPath = 'circle(0)';\n    });\n    let buttonNoteType = document.getElementsByClassName('notes-types-type')[0];\n    if (buttonNoteType) {\n        buttonNoteType.addEventListener('click', () => {\n            window.location.href = 'http://localhost:3000/notes-all';\n        });\n    }\n    let buttonSaveNote = document.getElementsByClassName('make-note-tab-button')[0];\n    buttonSaveNote.addEventListener('click', () => {\n        let inputTitle = document.getElementsByClassName('make-note-tab-input')[0];\n        let textAreaDescription = document.getElementsByClassName('make-note-tab-description')[0];\n        if (inputTitle.value) {\n            let chosenTypes = [];\n            for (let noteType of noteTypes) {\n                if (noteType.current) {\n                    chosenTypes.push(noteType.type);\n                }\n            }\n            console.log(noteTypes);\n            chosenTypes.push(noteTypes.find(item => item.type === 'All').type);\n            notes.add(new Note(inputTitle.value, textAreaDescription.value, chosenTypes, 1));\n            inputTitle.value = '';\n            textAreaDescription.value = '';\n            notes.get();\n        }\n    });\n    let buttonNoteTabTypeAll = document.getElementsByClassName('make-note-tab-types-type')[0];\n    let buttonsNoteTabTypes = [buttonNoteTabTypeAll];\n    function drawTypesInMakeNoteTab() {\n        for (let noteType of noteTypes) {\n            if (noteType.type !== 'All') {\n                let buttonNoteTypeElement = buttonNoteTabTypeAll.cloneNode(true);\n                buttonNoteTypeElement.children[0].textContent = noteType.type;\n                buttonNoteTabTypeAll.after(buttonNoteTypeElement);\n                buttonsNoteTabTypes.push(buttonNoteTypeElement);\n            }\n        }\n        for (let buttonNoteTypeElement of buttonsNoteTabTypes) {\n            buttonNoteTypeElement.addEventListener('click', () => {\n                let type = noteTypes.find(item => item.type === buttonNoteTypeElement.children[0].textContent);\n                type.current = !type.current;\n            });\n        }\n        pageIsLoaded = true;\n    }\n    if (!pageIsLoaded) {\n        drawTypesInMakeNoteTab();\n    }\n}\nlet pageIsLoaded = false;\nconst noteTypes = [\n    {\n        type: 'All',\n        current: false,\n    },\n    {\n        type: \"Job\",\n        current: false\n    }\n];\nclass Note {\n    title;\n    description;\n    type;\n    number;\n    constructor(title, description, type, number) {\n        this.title = title;\n        this.description = description;\n        this.type = type;\n        this.number = number;\n    }\n    getTitle() {\n        return this.title;\n    }\n    setTitle(value) {\n        this.title = value;\n    }\n    getDescription() {\n        return this.description;\n    }\n    setDescription(value) {\n        this.description = value;\n    }\n    getType() {\n        return this.type;\n    }\n    setType(value) {\n        this.type = value;\n    }\n    getNumber() {\n        return this.number;\n    }\n    setNumber(value) {\n        this.number = value;\n    }\n}\nclass NoteList {\n    notes;\n    constructor() {\n        this.notes = [];\n    }\n    add(note) {\n        this.notes.push(note);\n    }\n    delete(number) {\n        let note = this.notes.find(item => item.getNumber() === number);\n        this.notes.splice(this.notes.indexOf(note), 1);\n    }\n    get() {\n        console.log(this.notes);\n    }\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./dist/index.js?");

/***/ }),

/***/ "./dist/notes-script.js":
/*!******************************!*\
  !*** ./dist/notes-category.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noteCategoriesPage: () => (/* binding */ noteCategoriesPage)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./dist/index.js\");\n\nfunction noteCategoriesPage() {\n    {\n        const noteCategoryElements = [];\n        document.addEventListener('DOMContentLoaded', () => {\n            const noteCategoryElement = document.\n                getElementsByClassName('notes-types-type')[0];\n            for (let noteCategory of _index_js__WEBPACK_IMPORTED_MODULE_0__.noteTypes) {\n                if (noteCategory.type !== 'All') {\n                    let nextNoteCategoryElement = noteCategoryElement.cloneNode(true);\n                    nextNoteCategoryElement.children[0].textContent = noteCategory.type;\n                    noteCategoryElement.after(nextNoteCategoryElement);\n                    noteCategoryElements.push(nextNoteCategoryElement);\n                }\n            }\n        });\n    }\n}\n//# sourceMappingURL=notes-category.js.map\n\n//# sourceURL=webpack:///./dist/notes-category.js?");

/***/ }),

/***/ "./src/public/script.js":
/*!******************************!*\
  !*** ./src/public/script.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/index.js */ \"./dist/index.js\");\n/* harmony import */ var _dist_notes_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dist/notes-category.js */ \"./dist/notes-category.js\");\n\r\n\r\n\r\n\r\n(0,_dist_index_js__WEBPACK_IMPORTED_MODULE_0__.mainScript)()\r\n\r\nconst noteCategoryElement  = document.getElementsByClassName('notes-types-type')[0]\r\nif(noteCategoryElement){\r\n    (0,_dist_notes_script_js__WEBPACK_IMPORTED_MODULE_1__.noteCategoriesPage)()\r\n}\r\n\r\nconsole.log(890)\r\n\r\n\n\n//# sourceURL=webpack:///./src/public/script.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/script.js");
/******/ 	
/******/ })()
;