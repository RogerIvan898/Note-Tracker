import { parseLocalStorageCategoryInNoteList } from "./parser-localStorage.js";
import { NoteList } from "./index.js";
export class LocalStorage {
    static getItem(item) {
        let itemFromLocalStorage = JSON.parse(localStorage.getItem(item));
        let parsedItemFromLocalStorage = [];
        if (itemFromLocalStorage) {
            itemFromLocalStorage.forEach(category => {
                parsedItemFromLocalStorage.push(parseLocalStorageCategoryInNoteList(category));
            });
            return parsedItemFromLocalStorage;
        }
    }
    static getCategories() {
        return this.getItem('Categories');
    }
    static addCompletedNote(note) {
        let localStorageCompletedNotes = JSON.parse(localStorage.getItem('Completed'));
        let localStorageCategoryInNoteListParsed = parseLocalStorageCategoryInNoteList(localStorageCompletedNotes);
        localStorageCategoryInNoteListParsed.noteList.add(note);
        this.deleteActiveNote(note);
        localStorage.setItem('Completed', JSON.stringify(localStorageCategoryInNoteListParsed));
    }
    static addActiveNote(note, categories) {
        let localStorageCategories = JSON.parse(localStorage.getItem('Categories'));
        let categoriesForAdd = [];
        categories.forEach(category => {
            categoriesForAdd.push(parseLocalStorageCategoryInNoteList(localStorageCategories.
                find(item => item.title === category)));
        });
        if (categoriesForAdd.length) {
            categoriesForAdd.forEach(category => {
                category.noteList.add(note);
            });
        }
        localStorage.setItem('Categories', JSON.stringify(localStorageCategories));
    }
    static deleteActiveNote(note) {
        let localStorageCategories = JSON.parse(localStorage.getItem('Categories'));
        let categories = [];
        note.getCategory().forEach(category => {
            console.log(category);
            categories.push(localStorageCategories.find(localStorageCategory => localStorageCategory.title === category).title);
        });
        categories.forEach(category => {
            let currentCategory = parseLocalStorageCategoryInNoteList(localStorageCategories.
                find(item => item.title === category));
            if (currentCategory) {
                currentCategory.noteList.delete(note);
            }
        });
        localStorage.setItem('Categories', JSON.stringify(localStorageCategories));
    }
    static deleteCompletedNote(note) {
        let completedNotes = parseLocalStorageCategoryInNoteList(JSON.parse(localStorage.getItem('Completed')));
        completedNotes.noteList.delete(note);
        localStorage.setItem('Completed', JSON.stringify(completedNotes));
    }
    static addCategory(categoryTitle) {
        const localStorageCategories = JSON.parse(localStorage.getItem('Categories'));
        let category = { title: categoryTitle, noteList: new NoteList() };
        localStorageCategories.push(category);
        localStorage.setItem('Categories', JSON.stringify(localStorageCategories));
    }
    static deleteCategory(categoryTitle) {
        const localStorageCategories = JSON.parse(localStorage.getItem('Categories'));
        localStorageCategories.splice(localStorageCategories.indexOf(localStorageCategories.
            find(category => category.title === categoryTitle)), 1);
        localStorage.setItem('Categories', JSON.stringify(localStorageCategories));
    }
}
//# sourceMappingURL=storage.js.map