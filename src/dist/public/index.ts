
import {LocalStorage} from "./storage.js"

export function mainScript() {


        let makeNoteTabActive = false
        let buttonMakeNote: Element = document.getElementsByClassName('header-select')[0]
        buttonMakeNote.addEventListener('click', () => {
            makeNoteTabActive = !makeNoteTabActive
            let makeNoteTab: HTMLElement = <HTMLElement>document.getElementsByClassName('make-note-tab')[0]

            if(makeNoteTabActive) {
                makeNoteTab.style.clipPath = 'circle(100%)'
            }
            else{
                makeNoteTab.style.clipPath = 'circle(0)'
            }
        })

        let buttonShowNotes: Element = document.getElementsByClassName('header-select')[1]
        buttonShowNotes.addEventListener('click', () => {
            window.location.href = 'http://localhost:3000/notes'
        })

        let buttonNoteTabExit: Element = document.getElementsByClassName('make-note-tab-title-exit')[0]
        buttonNoteTabExit.addEventListener('click', () => {
            let makeNoteTab: HTMLElement = <HTMLElement>document.getElementsByClassName('make-note-tab')[0]
            makeNoteTab.style.clipPath = 'circle(0)'
        })

        let buttonNoteType: Element = document.getElementsByClassName('notes-types-type')[0]
        if (buttonNoteType) {
            buttonNoteType.addEventListener('click', () => {
                window.location.href = 'http://localhost:3000/notes/all'
            })
        }

        let buttonSaveNote: Element = document.getElementsByClassName('make-note-tab-button')[0]
        buttonSaveNote.addEventListener('click', () => {
            let inputTitle: HTMLInputElement = <HTMLInputElement>document.
            getElementsByClassName('make-note-tab-input')[0]
            let textAreaDescription: HTMLTextAreaElement = <HTMLTextAreaElement>document.
            getElementsByClassName('make-note-tab-description')[0]
            let makeNoteTab:HTMLElement = <HTMLElement> document.getElementsByClassName('make-note-tab')[0]
            if (inputTitle.value) {
                let chosenCategories: string[] = []

                for (let noteType of noteCategories) {
                    if (noteType.current) {
                        chosenCategories.push(noteType.type)
                    }
                }

                chosenCategories.push(noteCategories.find(item => item.type === 'all').type)
                console.log(JSON.parse(localStorage.getItem('Categories')))
                console.log('Before adding note:', JSON.parse(localStorage.getItem('Categories')))
                    let note = new Note(inputTitle.value,textAreaDescription.value,chosenCategories,1)
                    LocalStorage.addActiveNote(note,chosenCategories)
                console.log('After updating notes:', JSON.parse(localStorage.getItem('Categories')))
                inputTitle.value = ''
                textAreaDescription.value = ''
                makeNoteTab.style.clipPath='circle(0)'

            }
        })

        let buttonNoteTabTypeAll: HTMLElement = <HTMLElement>document.
        getElementsByClassName('make-note-tab-types-type')[0]
        let buttonsNoteTabTypes: HTMLElement[] = [buttonNoteTabTypeAll]

        function drawTypesInMakeNoteTab() {
            for (let noteCategory of noteCategories) {
                if (noteCategory.type !== 'all') {
                    let buttonNoteTypeElement: HTMLElement = <HTMLElement>buttonNoteTabTypeAll.cloneNode(true)
                    buttonNoteTypeElement.style.display = 'flex'
                    buttonNoteTypeElement.children[0].textContent = noteCategory.type
                    buttonNoteTabTypeAll.after(buttonNoteTypeElement)
                    buttonsNoteTabTypes.push(buttonNoteTypeElement)
                }
            }
            for (let buttonNoteTypeElement of buttonsNoteTabTypes) {
                buttonNoteTypeElement.addEventListener('click', () => {
                    let type = noteCategories.find(item => item.type === buttonNoteTypeElement.children[0].textContent)
                    type.current = !type.current
                    if(type.current){
                        buttonNoteTypeElement.style.background = 'green'
                    }
                    else {
                        buttonNoteTypeElement.style.background = 'lightseagreen'
                    }
                })


            }
            pageIsLoaded = true


        }

        if (!pageIsLoaded) {
            drawTypesInMakeNoteTab()
        }
    }
type NoteType = {
    type: string,
    current: boolean
}

let pageIsLoaded = false

export const noteCategories: NoteType[] = []



export class Note{



    private title:string
    private description :string
    private category:string[]
    private number:number
    private htmlElement:HTMLElement|null

    constructor(title:string,description:string,type:string[],number:number) {
        this.title = title
        this.description = description
        this.category = type
        this.number = number
        this.htmlElement = null
    }
    getTitle(){
        return this.title
    }
    setTitle(value:string){
        this.title = value
    }

    getDescription(){
        return this.description
    }

    setDescription(value:string){
        this.description = value
    }
    getHTMLElement():HTMLElement | null{
        return this.htmlElement
    }
    setHTMLElement(element:HTMLElement){
        this.htmlElement = element
    }

    getCategory(){
        return this.category
    }
    setCategory(value:string[]){
        this.category = value
    }

    getNumber(){
        return this.number
    }
    setNumber(value:number){
        this.number = value
    }
}

export class NoteList {
    private notes: Note[]
    constructor(noteList?: NoteList) {
        this.notes = noteList ? noteList.notes : []
    }
    add(note: Note) {
        if(note instanceof Note) {
            this.notes.push(note)
        }

    }

    setNotes(noteList: Note[]) {
        this.notes = noteList
    }
    getNotes() {
        return this.notes
    }
    delete(note: Note) {
        this.notes.splice(this.notes.indexOf(note), 1)
    }
    removeElement(element: HTMLElement) {
        console.log(this.notes)
        let note = this.notes.find(item=>item.getHTMLElement() === element)
        this.notes.splice(this.notes.indexOf(note),1)
    }
    get(){
        console.log(this.notes)
    }
    [Symbol.iterator](): Iterator<Note> {
        let index = 0;
        const notes = this.notes;

        return {
            next(): IteratorResult<Note> {
                if (index < notes.length) {
                    const note = notes[index];
                    index++;

                    return {

                        value: note,
                        done: false,


                    };
                } else {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
            },
        };
    }



}


































































