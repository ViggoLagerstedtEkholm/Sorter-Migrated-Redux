import {Swap} from "./Algorithms";

export function BubbleSort (shuffled : number[]): { index: number, newValue: number }[] {
    const copy = [...shuffled];
    const steps: { index: number, newValue: number }[] = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy: number[], steps: { index: number, newValue: number }[]){
    for (let i= 0; i < copy.length; i++) {
        for (let j = 0; j < (copy.length - i - 1); j++) {
            if (copy[j] > copy[j + 1]) {
                steps.push({index: j, newValue: copy[j + 1]});
                steps.push({index: j + 1, newValue: copy[j]});
                Swap(j, j + 1, copy);
            }
        }
    }
}