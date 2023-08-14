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

/***/ "./src/dist/public/draw-notes-script.js":
/*!**********************************************!*\
  !*** ./src/dist/public/draw-notes-script.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawNotesScript: () => (/* binding */ drawNotesScript)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/dist/public/index.js\");\n/* harmony import */ var _notes_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-controller.js */ \"./src/dist/public/notes-controller.js\");\n\n\nfunction drawNotesScript() {\n    let categories = JSON.parse(localStorage.getItem('Categories'));\n    let currentCategory = categories.find(currentCategory => currentCategory.title === 'All');\n    currentCategory = (0,_notes_controller_js__WEBPACK_IMPORTED_MODULE_1__.parseLocalStorageCategoryInNoteList)(currentCategory);\n    let currentCategoryNoteList = currentCategory.noteList;\n    let itemElement = document.getElementsByClassName('show-notes-page-item')[0];\n    for (let note of currentCategoryNoteList.getNotes()) {\n        let newItemElement = itemElement.cloneNode(true);\n        newItemElement.getElementsByClassName('show-notes-page-item-note')[0].\n            getElementsByClassName('show-notes-page-item-note-title')[0].textContent = note.getTitle();\n        newItemElement.getElementsByClassName('show-notes-page-item-note')[0].\n            getElementsByClassName('show-notes-page-item-note-description')[0].textContent = note.getDescription();\n        let buttonDeleteNote = newItemElement.\n            getElementsByClassName('show-notes-page-item-buttons-delete')[0];\n        let buttonCompleteNote = newItemElement.\n            getElementsByClassName('show-notes-page-item-buttons-done')[0];\n        note.setHTMLElement(newItemElement);\n        console.log(note);\n        localStorage.setItem('All', JSON.stringify(currentCategoryNoteList.getNotes()));\n        buttonDeleteNote.addEventListener('click', () => {\n            currentCategoryNoteList.getNotes().splice(currentCategoryNoteList.getNotes().\n                indexOf(currentCategoryNoteList.getNotes().find(item => item.getTitle() === note.getTitle()\n                && item.getDescription() === note.getDescription())), 1);\n            localStorage.setItem('Categories', JSON.stringify(categories));\n            newItemElement.remove();\n            console.log(categories);\n        });\n        buttonCompleteNote.addEventListener('click', () => {\n            let completedNotesObj;\n            let completedNotesList = new _index_js__WEBPACK_IMPORTED_MODULE_0__.NoteList();\n            if (localStorage.getItem('completedNotes')) {\n                completedNotesObj = JSON.parse(localStorage.getItem('completedNotes'));\n                completedNotesObj.forEach(note => {\n                    let completedNote = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Note(note.title, note.description, note.type, note.number);\n                    completedNotesList.add(completedNote);\n                });\n            }\n            completedNotesList.add(currentCategoryNoteList.getNotes().\n                find(item => item.getHTMLElement() === note.getHTMLElement()));\n            currentCategoryNoteList.removeElement(note.getHTMLElement());\n            newItemElement.remove();\n            localStorage.setItem('Categories', JSON.stringify(categories));\n            localStorage.setItem('completedNotes', JSON.stringify(completedNotesList.getNotes()));\n        });\n        itemElement.after(newItemElement);\n        itemElement = newItemElement;\n        console.log(JSON.parse(localStorage.getItem('Categories')));\n    }\n    let buttonsDeleteNote = document.\n        getElementsByClassName('show-notes-page-item-buttons-delete');\n}\n//# sourceMappingURL=draw-notes-script.js.map\n\n//# sourceURL=webpack:///./src/dist/public/draw-notes-script.js?");

/***/ }),

/***/ "./src/dist/public/index.js":
/*!**********************************!*\
  !*** ./src/dist/public/index.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Note: () => (/* binding */ Note),\n/* harmony export */   NoteList: () => (/* binding */ NoteList),\n/* harmony export */   mainNoteList: () => (/* binding */ mainNoteList),\n/* harmony export */   mainScript: () => (/* binding */ mainScript),\n/* harmony export */   noteTypes: () => (/* binding */ noteTypes),\n/* harmony export */   setNoteList: () => (/* binding */ setNoteList)\n/* harmony export */ });\n/* harmony import */ var _notes_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-controller.js */ \"./src/dist/public/notes-controller.js\");\n\nfunction mainScript() {\n    console.log(localStorage);\n    let buttonMakeNote = document.getElementsByClassName('header-select')[0];\n    buttonMakeNote.addEventListener('click', () => {\n        let makeNoteTab = document.getElementsByClassName('make-note-tab')[0];\n        makeNoteTab.style.clipPath = 'circle(100%)';\n    });\n    let buttonShowNotes = document.getElementsByClassName('header-select')[1];\n    buttonShowNotes.addEventListener('click', () => {\n        window.location.href = 'http://localhost:3000/notes';\n    });\n    let buttonNoteTabExit = document.getElementsByClassName('make-note-tab-title-exit')[0];\n    buttonNoteTabExit.addEventListener('click', () => {\n        let makeNoteTab = document.getElementsByClassName('make-note-tab')[0];\n        makeNoteTab.style.clipPath = 'circle(0)';\n    });\n    let buttonNoteType = document.getElementsByClassName('notes-types-type')[0];\n    if (buttonNoteType) {\n        buttonNoteType.addEventListener('click', () => {\n            window.location.href = 'http://localhost:3000/notes/all';\n        });\n    }\n    let buttonSaveNote = document.getElementsByClassName('make-note-tab-button')[0];\n    buttonSaveNote.addEventListener('click', () => {\n        let inputTitle = document.\n            getElementsByClassName('make-note-tab-input')[0];\n        let textAreaDescription = document.\n            getElementsByClassName('make-note-tab-description')[0];\n        let makeNoteTab = document.getElementsByClassName('make-note-tab')[0];\n        if (inputTitle.value) {\n            let chosenTypes = [];\n            for (let noteType of noteTypes) {\n                if (noteType.current) {\n                    chosenTypes.push(noteType.type);\n                }\n            }\n            chosenTypes.push(noteTypes.find(item => item.type === 'All').type);\n            console.log(JSON.parse(localStorage.getItem('Categories')));\n            console.log('Before adding note:', JSON.parse(localStorage.getItem('Categories')));\n            mainNoteList.add(new Note(inputTitle.value, textAreaDescription.value, chosenTypes, 1));\n            console.log('After adding note:', JSON.parse(localStorage.getItem('Categories')));\n            chosenTypes.forEach(chosenCategory => {\n                let categories = JSON.parse(localStorage.getItem('Categories'));\n                console.log('Current category:', chosenCategory, categories);\n                let category = categories.find(note => note.title === chosenCategory);\n                if (category) {\n                    category = (0,_notes_controller_js__WEBPACK_IMPORTED_MODULE_0__.parseLocalStorageCategoryInNoteList)(category);\n                    category.noteList.getNotes().push(new Note(inputTitle.value, textAreaDescription.value, chosenTypes, 1));\n                }\n                localStorage.setItem('Categories', JSON.stringify(categories));\n            });\n            console.log('After updating notes:', JSON.parse(localStorage.getItem('Categories')));\n            localStorage.setItem('All', JSON.stringify(mainNoteList.getNotes()));\n            inputTitle.value = '';\n            textAreaDescription.value = '';\n            makeNoteTab.style.clipPath = 'circle(0)';\n            mainNoteList.get();\n        }\n    });\n    let buttonNoteTabTypeAll = document.getElementsByClassName('make-note-tab-types-type')[0];\n    let buttonsNoteTabTypes = [buttonNoteTabTypeAll];\n    function drawTypesInMakeNoteTab() {\n        for (let noteType of noteTypes) {\n            if (noteType.type !== 'All') {\n                let buttonNoteTypeElement = buttonNoteTabTypeAll.cloneNode(true);\n                buttonNoteTypeElement.children[0].textContent = noteType.type;\n                buttonNoteTabTypeAll.after(buttonNoteTypeElement);\n                buttonsNoteTabTypes.push(buttonNoteTypeElement);\n            }\n        }\n        for (let buttonNoteTypeElement of buttonsNoteTabTypes) {\n            buttonNoteTypeElement.addEventListener('click', () => {\n                let type = noteTypes.find(item => item.type === buttonNoteTypeElement.children[0].textContent);\n                type.current = !type.current;\n            });\n        }\n        pageIsLoaded = true;\n    }\n    if (!pageIsLoaded) {\n        drawTypesInMakeNoteTab();\n    }\n}\nlet pageIsLoaded = false;\nconst noteTypes = [];\nclass Note {\n    title;\n    description;\n    type;\n    number;\n    htmlElement;\n    constructor(title, description, type, number) {\n        this.title = title;\n        this.description = description;\n        this.type = type;\n        this.number = number;\n        this.htmlElement = null;\n    }\n    getTitle() {\n        return this.title;\n    }\n    setTitle(value) {\n        this.title = value;\n    }\n    getDescription() {\n        return this.description;\n    }\n    setDescription(value) {\n        this.description = value;\n    }\n    getHTMLElement() {\n        return this.htmlElement;\n    }\n    setHTMLElement(element) {\n        this.htmlElement = element;\n    }\n    getType() {\n        return this.type;\n    }\n    setType(value) {\n        this.type = value;\n    }\n    getNumber() {\n        return this.number;\n    }\n    setNumber(value) {\n        this.number = value;\n    }\n}\nclass NoteList {\n    notes;\n    constructor(noteList) {\n        this.notes = noteList ? noteList.notes : [];\n    }\n    add(note) {\n        if (note instanceof Note) {\n            this.notes.push(note);\n        }\n    }\n    setNotes(noteList) {\n        this.notes = noteList;\n    }\n    getNotes() {\n        return this.notes;\n    }\n    delete(number) {\n        let note = this.notes.find(item => item.getNumber() === number);\n        this.notes.splice(this.notes.indexOf(note), 1);\n    }\n    removeElement(element) {\n        console.log(this.notes);\n        let note = this.notes.find(item => item.getHTMLElement() === element);\n        this.notes.splice(this.notes.indexOf(note), 1);\n    }\n    get() {\n        console.log(this.notes);\n    }\n    [Symbol.iterator]() {\n        let index = 0;\n        const notes = this.notes;\n        return {\n            next() {\n                if (index < notes.length) {\n                    const note = notes[index];\n                    index++;\n                    return {\n                        value: note,\n                        done: false,\n                    };\n                }\n                else {\n                    return {\n                        value: undefined,\n                        done: true,\n                    };\n                }\n            },\n        };\n    }\n}\nlet mainNoteList = new NoteList();\nif (localStorage.getItem('All')) {\n    mainNoteList = new NoteList();\n    let notes = JSON.parse(localStorage.getItem('All'));\n    for (let note of notes) {\n        let newNote = new Note(note.title, note.description, note.type, note.number);\n        mainNoteList.add(newNote);\n    }\n}\nif (!localStorage.getItem('completedNotes')) {\n    localStorage.setItem('completedNotes', '');\n}\nfunction setNoteList(noteList) {\n    localStorage.setItem('All', JSON.stringify(noteList));\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./src/dist/public/index.js?");

/***/ }),

/***/ "./src/dist/public/notes-category.js":
/*!*******************************************!*\
  !*** ./src/dist/public/notes-category.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noteCategoriesPage: () => (/* binding */ noteCategoriesPage)\n/* harmony export */ });\nfunction noteCategoriesPage() {\n    {\n        const noteCategoryElements = [];\n        document.addEventListener('DOMContentLoaded', () => {\n            const noteCategoryElement = document.\n                getElementsByClassName('notes-types-type')[0];\n            for (let noteCategory of JSON.parse(localStorage.getItem('Categories'))) {\n                if (noteCategory.type !== 'All') {\n                    let nextNoteCategoryElement = noteCategoryElement.cloneNode(true);\n                    nextNoteCategoryElement.children[0].textContent = noteCategory.type;\n                    noteCategoryElement.after(nextNoteCategoryElement);\n                    noteCategoryElements.push(nextNoteCategoryElement);\n                }\n            }\n        });\n    }\n}\n//# sourceMappingURL=notes-category.js.map\n\n//# sourceURL=webpack:///./src/dist/public/notes-category.js?");

/***/ }),

/***/ "./src/dist/public/notes-controller.js":
/*!*********************************************!*\
  !*** ./src/dist/public/notes-controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noteController: () => (/* binding */ noteController),\n/* harmony export */   parseLocalStorageCategoryInNoteList: () => (/* binding */ parseLocalStorageCategoryInNoteList)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/dist/public/index.js\");\n\nfunction noteController() {\n    let categories = [];\n    if (!localStorage.getItem('Categories')) {\n        categories.push({ title: 'All', noteList: new _index_js__WEBPACK_IMPORTED_MODULE_0__.NoteList() });\n        categories.push({ title: 'Job', noteList: new _index_js__WEBPACK_IMPORTED_MODULE_0__.NoteList() });\n        localStorage.setItem('Categories', JSON.stringify(categories));\n    }\n    else {\n        let categoriesLocalStorage = JSON.parse(localStorage.getItem('Categories'));\n        console.log(categoriesLocalStorage);\n        categoriesLocalStorage.forEach(category => {\n            categories.push(category);\n        });\n        localStorage.setItem('Categories', JSON.stringify(categories));\n    }\n    let categoriesLocalStorage = JSON.parse(localStorage.getItem('Categories'));\n    console.log(localStorage.getItem('Categories'));\n    categoriesLocalStorage.forEach(category => {\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.noteTypes.push({ type: category.title, current: false });\n    });\n}\nfunction parseLocalStorageCategoryInNoteList(localStorageCategory) {\n    let newNoteList = new _index_js__WEBPACK_IMPORTED_MODULE_0__.NoteList();\n    console.log(localStorageCategory);\n    localStorageCategory.noteList.notes.forEach(note => {\n        let newNote = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Note(note.title, note.description, note.type, note.number);\n        newNoteList.add(newNote);\n    });\n    localStorageCategory.noteList = newNoteList;\n    console.log(localStorageCategory);\n    return localStorageCategory;\n}\n//# sourceMappingURL=notes-controller.js.map\n\n//# sourceURL=webpack:///./src/dist/public/notes-controller.js?");

/***/ }),

/***/ "./src/dist/public/script.js":
/*!***********************************!*\
  !*** ./src/dist/public/script.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notes_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-controller.js */ \"./src/dist/public/notes-controller.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/dist/public/index.js\");\n/* harmony import */ var _notes_category_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes-category.js */ \"./src/dist/public/notes-category.js\");\n/* harmony import */ var _draw_notes_script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw-notes-script.js */ \"./src/dist/public/draw-notes-script.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nasync function main() {\r\n    (0,_notes_controller_js__WEBPACK_IMPORTED_MODULE_0__.noteController)()\r\n   await (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.mainScript)()\r\n}\r\n\r\nmain()\r\n\r\n    const noteCategoryElement = document.getElementsByClassName('notes-types-type')[0];\r\n    if (noteCategoryElement) {\r\n        (0,_notes_category_js__WEBPACK_IMPORTED_MODULE_2__.noteCategoriesPage)()\r\n    }\r\n\r\n    const noteElement = document.getElementsByClassName('show-notes-page-item')[0];\r\n    if (noteElement) {\r\n        (0,_draw_notes_script_js__WEBPACK_IMPORTED_MODULE_3__.drawNotesScript)()\r\n        console.log(890)\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/dist/public/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dist/public/script.js");
/******/ 	
/******/ })()
;