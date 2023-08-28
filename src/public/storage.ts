import {parseLocalStorageCategoryInNoteList} from "./parser-localStorage"
import {NotesCategory} from "./notes-controller"
import {Note, NoteList} from "./index"

export class LocalStorage{

    static addCompletedNote(note:Note){
        let localStorageCompletedNotes:NotesCategory = this.getCompletedNotes()
        localStorageCompletedNotes.noteList.add(note)
        this.deleteActiveNote(note)
        localStorage.setItem('Completed',JSON.stringify(localStorageCompletedNotes))
    }

    static addActiveNote(note:Note,categories:string[]){
        const activeNotesCategories = this.getActiveNotesCategories()
        let categoriesForAdd:NotesCategory[] = []

        categories.forEach(category=>{
            categoriesForAdd.push(activeNotesCategories.
            find(item=> item.title === category))
        })

        if(categoriesForAdd.length){
            categoriesForAdd.forEach(category => {
                category.noteList.add(note)
            })
        }

        localStorage.setItem('Categories',JSON.stringify(activeNotesCategories))
    }

    static deleteActiveNote(note:Note){
            let localStorageCategories = JSON.parse(localStorage.getItem('Categories'))
            let categories:String[] = []

            note.getCategory().forEach(category => {
                console.log(category)
                categories.push
                (localStorageCategories.find(localStorageCategory => localStorageCategory.title === category).title)
            })

            categories.forEach(category => {
                let currentCategory = parseLocalStorageCategoryInNoteList(localStorageCategories.
                find(item => item.title === category))
                if(currentCategory) {
                    currentCategory.noteList.delete(note)
                }
            })

            localStorage.setItem('Categories', JSON.stringify(localStorageCategories))

    }

    static deleteCompletedNote(note:Note){
        let completedNotes:NotesCategory = this.getCompletedNotes()
        completedNotes.noteList.delete(note)

        localStorage.setItem('Completed',JSON.stringify(completedNotes))
    }

    static addCategory(categoryTitle:string){
        const localStorageCategories:NotesCategory[] = JSON.parse(localStorage.getItem('Categories'))

        let category:NotesCategory = {title:categoryTitle,noteList: new NoteList()}
        localStorageCategories.push(category)
        localStorage.setItem('Categories',JSON.stringify(localStorageCategories))
    }

    static deleteCategory(categoryTitle:string){
        const localStorageCategories:NotesCategory[] = JSON.parse(localStorage.getItem('Categories'))

        localStorageCategories.splice(localStorageCategories.indexOf(localStorageCategories.
        find(category => category.title === categoryTitle)),1)

        localStorage.setItem('Categories',JSON.stringify(localStorageCategories))
    }

    static getCompletedNotes():NotesCategory{
        const completedNotesObj = JSON.parse(localStorage.getItem('Completed'))
        const noteList: NoteList = new NoteList()

        completedNotesObj.noteList.notes.forEach(note =>{
            const newNote:Note = new Note(note.title,note.description,note.category,note.number)
            noteList.add(newNote)
        })
        completedNotesObj.noteList = noteList
        return <NotesCategory> completedNotesObj
    }

    static getActiveNotesCategories():NotesCategory[]{
        const activeNotesCategoriesObj = JSON.parse(localStorage.getItem('Categories'))

        activeNotesCategoriesObj.forEach(category =>{
            const noteList:NoteList = new NoteList()

            category.noteList.notes.forEach(note=>{
                const newNote:Note = new Note(note.title,note.description,note.category,note.number)
                noteList.add(newNote)
            })
            category.noteList = noteList
        })

        return <NotesCategory[]> activeNotesCategoriesObj

    }

}













