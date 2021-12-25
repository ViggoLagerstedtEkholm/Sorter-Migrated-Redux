import {Swap} from "./Algorithms";

export function InsertionSort(shuffled : number[]): { index: number, newValue: number }[] {
    const copy = [...shuffled];
    const steps: { index: number, newValue: number }[] = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy: number[], steps: { index: number, newValue: number }[])
{
    let n = copy.length;
    for (let i = 1; i < n; i++) {
        let key = copy[i];
        let j = i-1;
        while ((j > -1) && (key < copy[j])) {
            steps.push({index: j + 1, newValue: copy[j]});
            Swap(j + 1, j, copy);
            j--;
        }
        copy[j+1] = key;
        steps.push({index: j + 1, newValue: key});
    }
}