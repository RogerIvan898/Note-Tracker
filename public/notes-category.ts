import {LocalStorage} from "./storage"
export function noteCategoriesPage(){

         let deleteCategories = false
         const noteCategoryElements: HTMLElement[] = []
         document.addEventListener('DOMContentLoaded', () => {
             const addCategoryElement: HTMLElement = <HTMLElement>document.
             getElementsByClassName('notes-categories-serves-add-category')[0]

             const inputCategoryTitleElement: HTMLInputElement = <HTMLInputElement>document.
             getElementsByClassName('add-category-span-input')[0]

             const saveCategoryElement: HTMLElement = <HTMLElement>document.
             getElementsByClassName('add-category-span-save')[0]


             const completedNotes: HTMLElement = <HTMLElement>document.
             getElementsByClassName('notes-categories-serves-completed-categories')[0]

             const deleteNoteCategory: HTMLElement = <HTMLElement>document.
             getElementsByClassName('notes-categories-serves-delete-category')[0]


             const noteCategoryElement: HTMLElement = <HTMLElement>document.
             getElementsByClassName('notes-categories-category')[0]

             console.log()
             let reversedCategories = []
             let spanAddCategoryActive: Boolean = false

             addCategoryElement.addEventListener('click',  () => {
                 const spanElement: HTMLElement = <HTMLElement>document.getElementsByClassName('add-category-span')[0]
                 spanAddCategoryActive = !spanAddCategoryActive
                 if (spanElement.style.display != 'flex') {
                     spanElement.style.display = 'flex'
                     spanElement.style.width = '13.1%'
                     spanElement.style.animation = 'add-category-span-appear 1s'
                     spanElement.style.marginLeft = '12.7%'
                 } else {
                     hideAddCategorySpan()
                 }
             })
             saveCategoryElement.addEventListener('click', () => {
                 if (inputCategoryTitleElement.value) {
                     LocalStorage.addCategory(inputCategoryTitleElement.value)
                     hideAddCategorySpan()
                 }
             })
             JSON.parse(localStorage.getItem('Categories')).forEach(category => {
                 reversedCategories.unshift(category)
             })


             let b = 98
             function mouseMoveOver(event){
                 if(event.target.className === 'notes-categories-category'){
                     event.target.style.borderColor = 'red'
                 }
                 if(event.target.className == 'notes-categories-category-text'){
                     event.target.parentNode.style.borderColor = 'red'
                 }
             }
             function mouseMoveOut(event){
                 if(event.target.className == 'notes-categories-category'){
                     event.target.style.borderColor = 'white'
                 }
             }
             function mouseHoverOver(event){
                 if(event.target.className == 'notes-categories-category'){
                     event.target.style.borderColor = 'mediumseagreen'
                 }
                 if(event.target.className == 'notes-categories-category-text'){
                     event.target.parentNode.style.borderColor = 'mediumseagreen'
                 }
             }

             function deleteCategory(element){
                 if(element.target.className == 'notes-categories-category'){
                     LocalStorage.deleteCategory(element.target.childNodes[0].textContent)
                     element.target.remove()
                 }
                 if(element.target.className == 'notes-categories-category-text'){
                     LocalStorage.deleteCategory(element.target.textContent)
                     element.target.parentNode.remove()
                 }
             }

             deleteNoteCategory.addEventListener('click', () => {
                 const deleteNoteCategorySymbol: HTMLElement = <HTMLElement>document.
                 getElementsByClassName('notes-categories-serves-delete-category-symbol')[0]
                 const deleteNoteCategorySymbolClose: HTMLElement = <HTMLElement>document.
                 getElementsByClassName('notes-categories-serves-delete-category-symbol-close')[0]

                 deleteCategories =!deleteCategories

                 if (deleteNoteCategorySymbol.style.display !== 'none') {
                     deleteNoteCategory.style.borderColor = 'red'
                     deleteNoteCategorySymbol.style.display = 'none'
                     deleteNoteCategorySymbolClose.style.display = 'flex'
                     document.addEventListener('mouseover',mouseMoveOver)
                     document.addEventListener('mouseout',mouseMoveOut)
                     document.addEventListener('click',deleteCategory)
                 } else {
                     deleteNoteCategorySymbolClose.style.display = 'none'
                     deleteNoteCategorySymbol.style.display = 'flex'
                     deleteNoteCategory.style.borderColor = 'mediumseagreen'
                     document.removeEventListener('mouseover',mouseMoveOver)
                     document.removeEventListener('click',deleteCategory)
                     document.addEventListener('mouseover',mouseHoverOver)
                 }

             })

             function hideAddCategorySpan() {
                 const spanElement:HTMLElement = <HTMLElement> document.
                 getElementsByClassName('add-category-span')[0]
                     spanElement.style.animation = 'add-category-span-disappear 1s'
                     spanElement.style.marginLeft = '0.1%'
                     spanElement.style.width = '10%'

                     let animationHandler = () => {
                         spanElement.style.display = 'none'
                         inputCategoryTitleElement.value = ''
                         spanElement.removeEventListener('animationend',animationHandler)
                     }
                     spanElement.addEventListener('animationend',animationHandler)
                 }


             for (let noteCategory of reversedCategories) {
                     let nextNoteCategoryElement: HTMLElement = <HTMLElement>noteCategoryElement.cloneNode(true)

                    nextNoteCategoryElement.style.display = 'flex'
                     nextNoteCategoryElement.children[0].textContent = noteCategory.title
                     noteCategoryElement.after(nextNoteCategoryElement)
                     noteCategoryElements.push(nextNoteCategoryElement)


                     nextNoteCategoryElement.addEventListener('click',()=>{
                         if(!deleteCategories) {
                             window.location.href = `http://localhost:3000/notes/${noteCategory.title}`
                         }
                     })
             }

             completedNotes.addEventListener('click',()=>{
                 window.location.href = 'http://localhost:3000/notes/completed'
             })

         })
}

