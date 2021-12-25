import {Swap} from "./Algorithms";

export function HeapSort(shuffled : number[]): { index: number, newValue: number }[] {
    const copy = [...shuffled];
    const steps: { index: number, newValue: number }[] = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy: number[], steps: { index: number, newValue: number }[])
{
    let n = copy.length;
    for (let i = n / 2 - 1; i >= 0; i--)
    {
        Heap(copy, n, i, steps);
    }
    for (let i = n - 1; i >= 0; i--)
    {
        steps.push({index: i, newValue: copy[0]});
        steps.push({index: 0, newValue: copy[i]});

        Swap(0, i, copy);
        Heap(copy, i, 0, steps);
    }
}

function Heap(copy: number[], n: number, i: number, steps: { index: number, newValue: number }[])
{
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && copy[left] > copy[largest])
    {
        largest = left;
    }
    if (right < n && copy[right] > copy[largest])
    {
        largest = right;
    }

    if (largest !== i)
    {
        steps.push({index: i, newValue: copy[largest]});
        steps.push({index: largest, newValue: copy[i]});

        Swap(i, largest, copy);
        Heap(copy, n, largest, steps);
    }
}