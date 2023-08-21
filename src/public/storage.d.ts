import { Category } from "./notes-controller.ts";
import { Note } from "./index.ts";
export declare class LocalStorage {
    static getItem(item: string): Category[];
    static getCategories(): Category[];
    static addCompletedNote(note: Note): void;
    static addActiveNote(note: Note, categories: string[]): void;
    static deleteActiveNote(note: Note): void;
    static deleteCompletedNote(note: Note): void;
    static addCategory(categoryTitle: string): void;
    static deleteCategory(categoryTitle: string): void;
}
