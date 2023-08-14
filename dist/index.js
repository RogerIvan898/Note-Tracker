export function mainScript() {
    let notes = new NoteList();
    let buttonMakeNote = document.getElementsByClassName('header-type')[0];
    buttonMakeNote.addEventListener('click', () => {
        let makeNoteTab = document.getElementsByClassName('make-note-tab')[0];
        makeNoteTab.style.clipPath = 'circle(100%)';
    });
    let buttonShowNotes = document.getElementsByClassName('header-type')[1];
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
            window.location.href = 'http://localhost:3000/notes-all';
        });
    }
    let buttonSaveNote = document.getElementsByClassName('make-note-tab-button')[0];
    buttonSaveNote.addEventListener('click', () => {
        let inputTitle = document.getElementsByClassName('make-note-tab-input')[0];
        let textAreaDescription = document.getElementsByClassName('make-note-tab-description')[0];
        if (inputTitle.value) {
            let chosenTypes = [];
            for (let noteType of noteTypes) {
                if (noteType.current) {
                    chosenTypes.push(noteType.type);
                }
            }
            console.log(noteTypes);
            chosenTypes.push(noteTypes.find(item => item.type === 'All').type);
            notes.add(new Note(inputTitle.value, textAreaDescription.value, chosenTypes, 1));
            inputTitle.value = '';
            textAreaDescription.value = '';
            notes.get();
        }
    });
    let buttonNoteTabTypeAll = document.getElementsByClassName('make-note-tab-types-type')[0];
    let buttonsNoteTabTypes = [buttonNoteTabTypeAll];
    function drawTypesInMakeNoteTab() {
        for (let noteType of noteTypes) {
            if (noteType.type !== 'All') {
                let buttonNoteTypeElement = buttonNoteTabTypeAll.cloneNode(true);
                buttonNoteTypeElement.children[0].textContent = noteType.type;
                buttonNoteTabTypeAll.after(buttonNoteTypeElement);
                buttonsNoteTabTypes.push(buttonNoteTypeElement);
            }
        }
        for (let buttonNoteTypeElement of buttonsNoteTabTypes) {
            buttonNoteTypeElement.addEventListener('click', () => {
                let type = noteTypes.find(item => item.type === buttonNoteTypeElement.children[0].textContent);
                type.current = !type.current;
            });
        }
        pageIsLoaded = true;
    }
    if (!pageIsLoaded) {
        drawTypesInMakeNoteTab();
    }
}
let pageIsLoaded = false;
export const noteTypes = [
    {
        type: 'All',
        current: false,
    },
    {
        type: "Job",
        current: false
    }
];
class Note {
    title;
    description;
    type;
    number;
    constructor(title, description, type, number) {
        this.title = title;
        this.description = description;
        this.type = type;
        this.number = number;
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
    getType() {
        return this.type;
    }
    setType(value) {
        this.type = value;
    }
    getNumber() {
        return this.number;
    }
    setNumber(value) {
        this.number = value;
    }
}
class NoteList {
    notes;
    constructor() {
        this.notes = [];
    }
    add(note) {
        this.notes.push(note);
    }
    delete(number) {
        let note = this.notes.find(item => item.getNumber() === number);
        this.notes.splice(this.notes.indexOf(note), 1);
    }
    get() {
        console.log(this.notes);
    }
}
//# sourceMappingURL=index.js.map