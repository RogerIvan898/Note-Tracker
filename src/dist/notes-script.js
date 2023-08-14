import { noteTypes } from "./index.js";
export function noteCategoriesPage() {
    {
        const noteCategoryElements = [];
        document.addEventListener('DOMContentLoaded', () => {
            const noteCategoryElement = document.
                getElementsByClassName('notes-types-type')[0];
            for (let noteCategory of noteTypes) {
                if (noteCategory.type !== 'All') {
                    let nextNoteCategoryElement = noteCategoryElement.cloneNode(true);
                    nextNoteCategoryElement.children[0].textContent = noteCategory.type;
                    noteCategoryElement.after(nextNoteCategoryElement);
                    noteCategoryElements.push(nextNoteCategoryElement);
                }
            }
        });
    }
}
//# sourceMappingURL=notes-category.js.map