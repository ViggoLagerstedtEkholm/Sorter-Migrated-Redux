import {Swap} from "./Algorithms";

export function SelectionSort(shuffled: number[]): { index: number, newValue: number }[]{
    const copy = [...shuffled];
    const steps: { index: number, newValue: number }[] = [];
    Sort(copy, steps);
    console.log(steps);
    return steps;
}

function Sort(copy: number[], steps: { index: number, newValue: number }[] ){
    let n = copy.length;

    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(copy[j] < copy[min]) {
                min = j;
            }
        }
        steps.push({index: i, newValue: copy[min]});
        steps.push({index: min, newValue: copy[i]});
        if (min !== i) {
            Swap(i, min, copy);
        }
    }
}