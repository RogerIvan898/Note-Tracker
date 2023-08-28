import {noteCategoriesInMakeNoteTab,NoteList}from "./index"

export type NotesCategory = {
    title:string,
    noteList: NoteList
}
export function noteController() {
    let categories: NotesCategory[] = []

    if(!localStorage.getItem('Categories')) {
        categories.push({title: 'all', noteList: new NoteList()})
        categories.push({title: 'gfd', noteList: new NoteList()})
        categories.push({title: 'job', noteList: new NoteList()})

        localStorage.setItem('Categories', JSON.stringify(categories))
    }


    let categoriesLocalStorage:NotesCategory[] = JSON.parse(localStorage.getItem('Categories'))
    console.log(localStorage.getItem('Categories'))
    categoriesLocalStorage.forEach(category=>{
        noteCategoriesInMakeNoteTab.push({category:category.title,current:false})
    })

    if(!localStorage.getItem('Completed')){
        localStorage.setItem('Completed',JSON.stringify({title:'Completed',noteList:new NoteList()}))
    }

    const url:string = window.location.href
    const parts:string[] = url.split('/')
    let dynamicCategory:string = parts[parts.indexOf("notes")+1]


    if(dynamicCategory) {
        fetch(`http://localhost:3000/notes/${dynamicCategory}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: localStorage.getItem('Categories')
        }).then(response => response.text()).then(data => {
            console.log(data)
        })
    }

}







