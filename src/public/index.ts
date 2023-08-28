
export function mainScript() {

    let buttonShowNotes: Element = document.getElementsByClassName('header-select')[1]
    buttonShowNotes.addEventListener('click', () => {
        window.location.href = 'http://localhost:3000/notes'
    })

    let buttonNoteType: Element = document.getElementsByClassName('notes-types-type')[0]
    if (buttonNoteType) {
        buttonNoteType.addEventListener('click', () => {
            window.location.href = 'http://localhost:3000/notes/all'
        })
    }

}
type NoteCategoryInMakeNoteTab = {
    category: string,
    current: boolean
}


export const noteCategoriesInMakeNoteTab: NoteCategoryInMakeNoteTab[] = []

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
        if(note) {
            this.notes.splice(this.notes.indexOf(note), 1)
        }
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


































































