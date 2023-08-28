import {NoteList} from "./index"
import {parseLocalStorageCategoryInNoteList} from "./parser-localStorage"
import {LocalStorage} from "./storage"
import {NotesCategory} from "./notes-controller"

export function drawNotesScript() {

    const url:string = window.location.href
    const parts:string[] = url.split('/')
    const urlCategory:string = parts[parts.indexOf('notes')+1]

    const categories:NotesCategory[] = LocalStorage.getActiveNotesCategories()
    let currentCategory:NotesCategory

    if(urlCategory === 'completed'){
        currentCategory = JSON.parse(localStorage.getItem('Completed'))
        console.log(currentCategory)
    }
    else {
        currentCategory = categories.find(category => category.title === urlCategory)
    }

    let itemElement: HTMLElement = <HTMLElement>document.getElementsByClassName('show-notes-page-item')[0]

    for (let note of currentCategory.noteList.getNotes()) {
        let newItemElement: HTMLElement = <HTMLElement>itemElement.cloneNode(true)
        newItemElement.style.display = 'flex'

        newItemElement.getElementsByClassName('show-notes-page-item-note')[0].
        getElementsByClassName('show-notes-page-item-note-title')[0].textContent = note.getTitle()

        newItemElement.getElementsByClassName('show-notes-page-item-note')[0].
        getElementsByClassName('show-notes-page-item-note-description')[0].textContent = note.getDescription()

        let buttonDeleteNote: HTMLElement = <HTMLElement>newItemElement.
        getElementsByClassName('show-notes-page-item-buttons-delete')[0]

        let buttonCompleteNote:HTMLElement = <HTMLElement>newItemElement.
        getElementsByClassName('show-notes-page-item-buttons-done')[0]

        if(urlCategory === 'completed'){
            buttonCompleteNote.style.display = 'none'
        }

        note.setHTMLElement(newItemElement)

        buttonDeleteNote.addEventListener('click', () => {

            if(urlCategory === 'completed'){
                LocalStorage.deleteCompletedNote(note)
            }
            else {
                LocalStorage.deleteActiveNote(note)
            }
            newItemElement.remove()
        })

        buttonCompleteNote.addEventListener('click',()=>{
            LocalStorage.addCompletedNote(note)

            let completedItem = JSON.parse(localStorage.getItem('Completed'))
            let completedNotesList = parseLocalStorageCategoryInNoteList(completedItem)
            newItemElement.remove()
            localStorage.setItem('Completed',JSON.stringify(completedNotesList))

        })
        
        itemElement.after(newItemElement)
        itemElement = newItemElement
        console.log(JSON.parse(localStorage.getItem('Categories')))
    }

}

