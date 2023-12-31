import {Note,NoteList} from "./index"

export function parseLocalStorageCategoryInNoteList(localStorageCategory){
    let newNoteList:NoteList = new NoteList()
    if(localStorageCategory.noteList.notes) {
        localStorageCategory.noteList.notes.forEach(note => {
            let newNote: Note = new Note(note.title, note.description, note.category, note.number)
            newNoteList.add(newNote)
        })
    }

    localStorageCategory.noteList = newNoteList
    return localStorageCategory

}

export function addNoteInLocalStorageCategory(note:Note,categoryTitle:string){
    let localStorageCategories = JSON.parse(localStorage.getItem('Categories'))
    let category = parseLocalStorageCategoryInNoteList(localStorageCategories.
    find(category => category.title === categoryTitle))

    if(category){
        category.noteList.add(note)
    }
    console.log(category)
    localStorage.setItem('Categories',JSON.stringify(localStorageCategories))
}

