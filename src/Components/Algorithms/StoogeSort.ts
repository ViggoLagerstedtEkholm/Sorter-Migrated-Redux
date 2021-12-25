import {Swap} from "./Algorithms";

export function StoogeSort(shuffled: number[]): { index: number, newValue: number }[]{
    const copy = [...shuffled];
    const steps: { index: number, newValue: number }[] = [];
    const n = copy.length;
    Sort(copy, 0, n - 1, steps);
    return steps;
}

function Sort(copy: number[], l: number, h: number, steps: { index: number, newValue: number }[]){
    if (l >= h)
        return;

    if (copy[l] > copy[h]) {
        steps.push({index: l, newValue: copy[h]});
        steps.push({index: h, newValue: copy[l]});
        Swap(l, h, copy);
    }

    if (h - l + 1 > 2) {
        let t = parseInt(String((h - l + 1) / 3), 10);
        Sort(copy, l, h - t, steps);
        Sort(copy, l + t, h, steps);
        Sort(copy, l, h - t, steps);
    }
}