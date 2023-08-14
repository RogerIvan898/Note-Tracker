import {noteController} from "./notes-controller.js"
import {mainScript} from "./index.js"
import {noteCategoriesPage} from "./notes-category.js"
import {drawNotesScript} from "./draw-notes-script.js"


async function main() {
    noteController()
   await mainScript()
}

main()

    const noteCategoryElement = document.getElementsByClassName('notes-categories-category')[0];
    if (noteCategoryElement) {
        noteCategoriesPage()
    }

    const noteElement = document.getElementsByClassName('show-notes-page-item')[0];
    if (noteElement) {
        drawNotesScript()
        console.log(890)
}



