import {parseLocalStorageCategoryInNoteList} from "./parser-localStorage.js"
import {Category} from "./notes-controller"
import {Note, NoteList} from "./index.js"


export class LocalStorage{
    static getItem(item:string){
        let itemFromLocalStorage:Category[] = JSON.parse(localStorage.getItem(item))
        let parsedItemFromLocalStorage:Category[] = []

        if(itemFromLocalStorage){
            itemFromLocalStorage.forEach(category => {
                parsedItemFromLocalStorage.push(parseLocalStorageCategoryInNoteList(category))
            })

            return parsedItemFromLocalStorage
        }

    }

    static getCategories(){
        return this.getItem('Categories')
    }
    static addCompletedNote(note:Note){
        let localStorageCompletedNotes = JSON.parse(localStorage.getItem('Completed'))
        let localStorageCategoryInNoteListParsed = parseLocalStorageCategoryInNoteList(localStorageCompletedNotes)

        localStorageCategoryInNoteListParsed.noteList.add(note)
        this.deleteActiveNote(note)
        localStorage.setItem('Completed',JSON.stringify(localStorageCategoryInNoteListParsed))
    }

    static addActiveNote(note:Note,categories:string[]){
        let localStorageCategories:Category[] = JSON.parse(localStorage.getItem('Categories'))
        let categoriesForAdd:Category[] = []
        categories.forEach(category=>{
            categoriesForAdd.push(parseLocalStorageCategoryInNoteList(localStorageCategories.
            find(item=> item.title === category)))
        })

        if(categoriesForAdd.length){
            categoriesForAdd.forEach(category => {
                category.noteList.add(note)
            })
        }

        localStorage.setItem('Categories',JSON.stringify(localStorageCategories))
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
        let completedNotes = parseLocalStorageCategoryInNoteList(JSON.parse(localStorage.getItem('Completed')))
        completedNotes.noteList.delete(note)

        localStorage.setItem('Completed',JSON.stringify(completedNotes))
    }

    static addCategory(categoryTitle:string){
        const localStorageCategories:Category[] = JSON.parse(localStorage.getItem('Categories'))

        let category:Category = {title:categoryTitle,noteList: new NoteList()}
        localStorageCategories.push(category)
        localStorage.setItem('Categories',JSON.stringify(localStorageCategories))
    }

    static deleteCategory(categoryTitle:string){
        const localStorageCategories:Category[] = JSON.parse(localStorage.getItem('Categories'))

        localStorageCategories.splice(localStorageCategories.indexOf(localStorageCategories.
        find(category => category.title === categoryTitle)),1)

        localStorage.setItem('Categories',JSON.stringify(localStorageCategories))
    }
}













