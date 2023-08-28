export function selectMakeNote(){

    let makeNoteTabActive = false
    const buttonMakeNote: Element = document.getElementsByClassName('header-select')[0]

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
}