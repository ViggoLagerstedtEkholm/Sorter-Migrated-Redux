export function MergeSort(arr : number[]): { index: number, newValue: number }[] {
    const copy = [...arr];
    const len = copy.length;
    const aux = Array(len);
    const animations: { index: number, newValue: number }[] = [];
    mergeSort(copy, aux, 0, len - 1, animations);
    return animations;
}

function mergeSort(arr: number[], aux: number[], left: number, right: number, animations: { index: number, newValue: number }[]) {
    if (right <= left) return;
    const mid = left + Math.floor((right - left) / 2);
    mergeSort(arr, aux, left, mid, animations);
    mergeSort(arr, aux, mid + 1, right, animations);
    merge(arr, aux, left, mid, right, animations);
}

function merge(arr: number[], aux: number[], left: number, mid: number, right: number, animations: { index: number, newValue: number }[]) {
    for (let i = left; i <= right; i++) aux[i] = arr[i];
    let i = left;
    let j = mid + 1;
    for (let k = left; k <= right; k++) {
        if (i > mid) {
            animations.push({index: k, newValue: aux[j]});
            arr[k] = aux[j++];
        } else if (j > right) {
            animations.push({index: k, newValue: aux[i]});
            arr[k] = aux[i++];
        } else if (aux[j] < aux[i]) {
            animations.push({index: k, newValue: aux[j]});
            arr[k] = aux[j++];
        } else {
            animations.push({index: k, newValue: aux[i]});
            arr[k] = aux[i++];
        }
    }
}