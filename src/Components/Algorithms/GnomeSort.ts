const {Swap} = require("./Algorithms");

export function GnomeSort(shuffled : number[]): { index: number, newValue: number }[] {
    const copy = [...shuffled];
    const steps: { index: number, newValue: number }[] = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy: number[], steps: { index: number, newValue: number }[])
{
    function moveBack(i: number)
    {
        for( ; i > 0 && copy[i-1] > copy[i]; i--)
        {
            steps.push({index: i, newValue: copy[i - 1]});
            steps.push({index:i - 1, newValue: copy[i]});
            Swap(i, i - 1, copy);
        }
    }

    for (let i = 1; i < copy.length; i++)
    {
        if (copy[i-1] > copy[i]) moveBack(i);
    }
}