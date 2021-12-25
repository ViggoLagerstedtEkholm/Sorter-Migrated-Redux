export const BUBBLE_SORT = "Bubble sort";
export const INSERTION_SORT = "Insertion sort";
export const MERGE_SORT = "Merge sort";
export const QUICK_SORT = "Quick sort";
export const SELECTION_SORT = "Selection sort";
export const GNOME_SORT = "Gnome sort";
export const COCKTAIL_SORT = "Cocktail sort";
export const HEAP_SORT = "Heap sort";
export const SHELL_SHORT = "Shell sort";
export const STOOGE_SORT = "Stooge sort";

export const Algorithms =
[
    BUBBLE_SORT,
    INSERTION_SORT,
    MERGE_SORT,
    QUICK_SORT,
    SELECTION_SORT,
    GNOME_SORT,
    COCKTAIL_SORT,
    HEAP_SORT,
    SHELL_SHORT,
    STOOGE_SORT
];

export function Swap(A: number, B : number, copy: Array<number>){
    const temp = copy[A];
    copy[A] = copy[B];
    copy[B] = temp;
}