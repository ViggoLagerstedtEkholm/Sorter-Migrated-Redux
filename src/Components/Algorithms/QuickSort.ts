import {Swap} from "./Algorithms";

export function QuickSort(shuffled: number[]): { index: number, newValue: number }[] {
    const copy = [...shuffled];
    const steps: { index: number, newValue: number }[] = [];
    quickSortHelper(copy, 0, copy.length - 1, steps);
    return steps;
}

function quickSortHelper(arr: number[], left: number, right: number, animations: { index: number, newValue: number }[]) {
    if (right <= left) return;
    const part = partition(arr, left, right, animations);
    quickSortHelper(arr, left, part, animations);
    quickSortHelper(arr, part + 1, right, animations);
}

function partition(arr: number[], left: number, right: number, animations: { index: number, newValue: number }[]) {
    let i = left;
    let j = right + 1;
    const pivot = arr[left];
    while (true) {
        while (arr[++i] <= pivot) {
            if (i === right) break;
        }
        while (arr[--j] >= pivot) {
            if (j === left) break;
        }
        if (j <= i) break;
        animations.push({index: i, newValue: arr[j]});
        animations.push({index: j, newValue: arr[i]});
        Swap(i, j, arr);
    }
    animations.push({index: left, newValue: arr[j]});
    animations.push({index: j, newValue: arr[left]});
    Swap(left, j, arr);
    return j;
}