

const helperP = (arr, start, end) => {
    let p = arr[end];
    let i = start;
    let j = 0;
    for (j = start; j<=end-1; j++) {
        if (arr[j]<p) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, j);
    return i;
}

const swap = (source, i, j) => {
    let x = source[i]; 
    source[i] = source[j]; 
    source[j] = x;    
}

const quickSort = (arr, start, end) => {
    if (start < end) {
        let p = helperP (arr, start, end)
        quickSort(arr, start, p-1)
        quickSort(arr, p+1, end)
    }
}

const arr = [1,8,2,-2,9];
console.log(arr);
quickSort(arr, 0, arr.length-1)
console.log(arr);

