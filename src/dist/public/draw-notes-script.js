import { parseLocalStorageCategoryInNoteList } from "./parser-localStorage.js";
import { LocalStorage } from "./storage.js";
export function drawNotesScript() {
    let url = window.location.href;
    const parts = url.split('/');
    const urlCategory = parts[parts.indexOf('notes') + 1];
    let categories = JSON.parse(localStorage.getItem('Categories'));
    let currentCategory;
    let currentCategoryNoteList;
    if (urlCategory === 'completed') {
        currentCategory = JSON.parse(localStorage.getItem('Completed'));
        console.log(currentCategory);
        currentCategoryNoteList = parseLocalStorageCategoryInNoteList(currentCategory).noteList;
    }
    else {
        currentCategory = categories.find(currentCategory => currentCategory.title === urlCategory);
        currentCategory = parseLocalStorageCategoryInNoteList(currentCategory);
        currentCategoryNoteList = currentCategory.noteList;
    }
    let itemElement = document.getElementsByClassName('show-notes-page-item')[0];
    for (let note of currentCategoryNoteList.getNotes()) {
        let newItemElement = itemElement.cloneNode(true);
        newItemElement.style.display = 'flex';
        newItemElement.getElementsByClassName('show-notes-page-item-note')[0].
            getElementsByClassName('show-notes-page-item-note-title')[0].textContent = note.getTitle();
        newItemElement.getElementsByClassName('show-notes-page-item-note')[0].
            getElementsByClassName('show-notes-page-item-note-description')[0].textContent = note.getDescription();
        let buttonDeleteNote = newItemElement.
            getElementsByClassName('show-notes-page-item-buttons-delete')[0];
        let buttonCompleteNote = newItemElement.
            getElementsByClassName('show-notes-page-item-buttons-done')[0];
        if (urlCategory === 'completed') {
            buttonCompleteNote.style.display = 'none';
        }
        note.setHTMLElement(newItemElement);
        console.log(note);
        localStorage.setItem('all', JSON.stringify(currentCategoryNoteList.getNotes()));
        buttonDeleteNote.addEventListener('click', () => {
            if (urlCategory === 'completed') {
                LocalStorage.deleteCompletedNote(note);
            }
            else {
                LocalStorage.deleteActiveNote(note);
            }
            newItemElement.remove();
        });
        buttonCompleteNote.addEventListener('click', () => {
            LocalStorage.addCompletedNote(note);
            let completedItem = JSON.parse(localStorage.getItem('Completed'));
            let completedNotesList = parseLocalStorageCategoryInNoteList(completedItem);
            newItemElement.remove();
            localStorage.setItem('Completed', JSON.stringify(completedNotesList));
        });
        itemElement.after(newItemElement);
        itemElement = newItemElement;
        console.log(JSON.parse(localStorage.getItem('Categories')));
    }
}
//# sourceMappingURL=draw-notes-script.js.map