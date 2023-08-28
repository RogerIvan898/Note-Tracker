import {LocalStorage} from "./storage"
import {Note, noteCategoriesInMakeNoteTab} from "./index"

export function makeNoteTab() {
    let pageIsLoaded = false
    let buttonNoteTabExit: Element = document.getElementsByClassName('make-note-tab-title-exit')[0]
    buttonNoteTabExit.addEventListener('click', () => {
        let makeNoteTab: HTMLElement = <HTMLElement>document.getElementsByClassName('make-note-tab')[0]
        makeNoteTab.style.clipPath = 'circle(0)'
    })

    let buttonSaveNote: Element = document.getElementsByClassName('make-note-tab-button')[0]

    buttonSaveNote.addEventListener('click', () => {

        let inputTitle: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName('make-note-tab-input')[0]

        let textAreaDescription: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementsByClassName('make-note-tab-description')[0]

        let makeNoteTab: HTMLElement = <HTMLElement>document.getElementsByClassName('make-note-tab')[0]

        if (inputTitle.value) {
            let chosenCategories: string[] = []

            for (let noteType of noteCategoriesInMakeNoteTab) {
                if (noteType.current) {
                    chosenCategories.push(noteType.category)
                }
            }

            chosenCategories.push(noteCategoriesInMakeNoteTab.find(item => item.category === 'all').category)

            let note = new Note(inputTitle.value, textAreaDescription.value, chosenCategories, 1)
            LocalStorage.addActiveNote(note, chosenCategories)
            inputTitle.value = ''
            textAreaDescription.value = ''
            makeNoteTab.style.clipPath = 'circle(0)'

        }
    })

    let buttonNoteTabTypeAll: HTMLElement = <HTMLElement>document.getElementsByClassName('make-note-tab-types-type')[0]
    let buttonsNoteTabTypes: HTMLElement[] = [buttonNoteTabTypeAll]

    function drawCategoriesInMakeNoteTab() {
        for (let noteCategory of noteCategoriesInMakeNoteTab) {
            if (noteCategory.category !== 'all') {
                let buttonNoteTypeElement: HTMLElement = <HTMLElement>buttonNoteTabTypeAll.cloneNode(true)
                buttonNoteTypeElement.style.display = 'flex'
                buttonNoteTypeElement.children[0].textContent = noteCategory.category
                buttonNoteTabTypeAll.after(buttonNoteTypeElement)
                buttonsNoteTabTypes.push(buttonNoteTypeElement)
            }
        }
        for (let buttonNoteTypeElement of buttonsNoteTabTypes) {
            buttonNoteTypeElement.addEventListener('click', () => {
                let type = noteCategoriesInMakeNoteTab.find(item => item.category === buttonNoteTypeElement.children[0].textContent)
                type.current = !type.current
                if (type.current) {
                    buttonNoteTypeElement.style.background = 'green'
                } else {
                    buttonNoteTypeElement.style.background = 'lightseagreen'
                }
            })


        }
        pageIsLoaded = true
    }
    if (!pageIsLoaded) {
        drawCategoriesInMakeNoteTab()
    }
}










