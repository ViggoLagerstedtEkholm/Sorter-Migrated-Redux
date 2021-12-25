export function ShellSort (shuffled: number[]): { index: number, newValue: number }[] {
    const copy = [...shuffled];
    const steps: { index: number, newValue: number }[] = [];
    Sort(copy, steps);
    return steps;
}

function Sort(copy: number[], steps: { index: number, newValue: number }[]) {
    let increment = copy.length / 2;
    while (increment > 0) {
        for (let i = increment; i < copy.length; i++) {
            let j = i;
            const temp = copy[i];

            while (j >= increment && copy[j-increment] > temp) {
                copy[j] = copy[j-increment];
                steps.push({index: j, newValue: copy[j]});
                j = j - increment;
            }

            steps.push({index:j, newValue: temp});

            copy[j] = temp;
        }

        if (increment === 2) {
            increment = 1;
        } else {
            increment = parseInt(String(increment * 5 / 11));
        }
    }
    return copy;
}