export declare function mainScript(): void;
type NoteType = {
    type: string;
    current: boolean;
};
export declare const noteCategories: NoteType[];
export declare class Note {
    private title;
    private description;
    private category;
    private number;
    private htmlElement;
    constructor(title: string, description: string, type: string[], number: number);
    getTitle(): string;
    setTitle(value: string): void;
    getDescription(): string;
    setDescription(value: string): void;
    getHTMLElement(): HTMLElement | null;
    setHTMLElement(element: HTMLElement): void;
    getCategory(): string[];
    setCategory(value: string[]): void;
    getNumber(): number;
    setNumber(value: number): void;
}
export declare class NoteList {
    private notes;
    constructor(noteList?: NoteList);
    add(note: Note): void;
    setNotes(noteList: Note[]): void;
    getNotes(): Note[];
    delete(note: Note): void;
    removeElement(element: HTMLElement): void;
    get(): void;
    [Symbol.iterator](): Iterator<Note>;
}
export {};
