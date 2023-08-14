import { LocalStorage } from "./storage.js";
export function mainScript() {
    let makeNoteTabActive = false;
    let buttonMakeNote = document.getElementsByClassName('header-select')[0];
    buttonMakeNote.addEventListener('click', () => {
        makeNoteTabActive = !makeNoteTabActive;
        let makeNoteTab = document.getElementsByClassName('make-note-tab')[0];
        if (makeNoteTabActive) {
            makeNoteTab.style.clipPath = 'circle(100%)';
        }
        else {
            makeNoteTab.style.clipPath = 'circle(0)';
        }
    });
    let buttonShowNotes = document.getElementsByClassName('header-select')[1];
    buttonShowNotes.addEventListener('click', () => {
        window.location.href = 'http://localhost:3000/notes';
    });
    let buttonNoteTabExit = document.getElementsByClassName('make-note-tab-title-exit')[0];
    buttonNoteTabExit.addEventListener('click', () => {
        let makeNoteTab = document.getElementsByClassName('make-note-tab')[0];
        makeNoteTab.style.clipPath = 'circle(0)';
    });
    let buttonNoteType = document.getElementsByClassName('notes-types-type')[0];
    if (buttonNoteType) {
        buttonNoteType.addEventListener('click', () => {
            window.location.href = 'http://localhost:3000/notes/all';
        });
    }
    let buttonSaveNote = document.getElementsByClassName('make-note-tab-button')[0];
    buttonSaveNote.addEventListener('click', () => {
        let inputTitle = document.
            getElementsByClassName('make-note-tab-input')[0];
        let textAreaDescription = document.
            getElementsByClassName('make-note-tab-description')[0];
        let makeNoteTab = document.getElementsByClassName('make-note-tab')[0];
        if (inputTitle.value) {
            let chosenCategories = [];
            for (let noteType of noteCategories) {
                if (noteType.current) {
                    chosenCategories.push(noteType.type);
                }
            }
            chosenCategories.push(noteCategories.find(item => item.type === 'all').type);
            console.log(JSON.parse(localStorage.getItem('Categories')));
            console.log('Before adding note:', JSON.parse(localStorage.getItem('Categories')));
            let note = new Note(inputTitle.value, textAreaDescription.value, chosenCategories, 1);
            LocalStorage.addActiveNote(note, chosenCategories);
            console.log('After updating notes:', JSON.parse(localStorage.getItem('Categories')));
            inputTitle.value = '';
            textAreaDescription.value = '';
            makeNoteTab.style.clipPath = 'circle(0)';
        }
    });
    let buttonNoteTabTypeAll = document.
        getElementsByClassName('make-note-tab-types-type')[0];
    let buttonsNoteTabTypes = [buttonNoteTabTypeAll];
    function drawTypesInMakeNoteTab() {
        for (let noteCategory of noteCategories) {
            if (noteCategory.type !== 'all') {
                let buttonNoteTypeElement = buttonNoteTabTypeAll.cloneNode(true);
                buttonNoteTypeElement.style.display = 'flex';
                buttonNoteTypeElement.children[0].textContent = noteCategory.type;
                buttonNoteTabTypeAll.after(buttonNoteTypeElement);
                buttonsNoteTabTypes.push(buttonNoteTypeElement);
            }
        }
        for (let buttonNoteTypeElement of buttonsNoteTabTypes) {
            buttonNoteTypeElement.addEventListener('click', () => {
                let type = noteCategories.find(item => item.type === buttonNoteTypeElement.children[0].textContent);
                type.current = !type.current;
                if (type.current) {
                    buttonNoteTypeElement.style.background = 'green';
                }
                else {
                    buttonNoteTypeElement.style.background = 'lightseagreen';
                }
            });
        }
        pageIsLoaded = true;
    }
    if (!pageIsLoaded) {
        drawTypesInMakeNoteTab();
    }
}
let pageIsLoaded = false;
export const noteCategories = [];
export class Note {
    title;
    description;
    category;
    number;
    htmlElement;
    constructor(title, description, type, number) {
        this.title = title;
        this.description = description;
        this.category = type;
        this.number = number;
        this.htmlElement = null;
    }
    getTitle() {
        return this.title;
    }
    setTitle(value) {
        this.title = value;
    }
    getDescription() {
        return this.description;
    }
    setDescription(value) {
        this.description = value;
    }
    getHTMLElement() {
        return this.htmlElement;
    }
    setHTMLElement(element) {
        this.htmlElement = element;
    }
    getCategory() {
        return this.category;
    }
    setCategory(value) {
        this.category = value;
    }
    getNumber() {
        return this.number;
    }
    setNumber(value) {
        this.number = value;
    }
}
export class NoteList {
    notes;
    constructor(noteList) {
        this.notes = noteList ? noteList.notes : [];
    }
    add(note) {
        if (note instanceof Note) {
            this.notes.push(note);
        }
    }
    setNotes(noteList) {
        this.notes = noteList;
    }
    getNotes() {
        return this.notes;
    }
    delete(note) {
        this.notes.splice(this.notes.indexOf(note), 1);
    }
    removeElement(element) {
        console.log(this.notes);
        let note = this.notes.find(item => item.getHTMLElement() === element);
        this.notes.splice(this.notes.indexOf(note), 1);
    }
    get() {
        console.log(this.notes);
    }
    [Symbol.iterator]() {
        let index = 0;
        const notes = this.notes;
        return {
            next() {
                if (index < notes.length) {
                    const note = notes[index];
                    index++;
                    return {
                        value: note,
                        done: false,
                    };
                }
                else {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
            },
        };
    }
}
//# sourceMappingURL=index.js.map