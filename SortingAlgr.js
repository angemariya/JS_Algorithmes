const a = [1,3,5,7,9];
const b = [4,10];

const mergeSort = (arr1, arr2) => {
    const c = [];
    let arr1Index = 0;
    let arr2Index = 0;
    while (arr1Index<arr1.length && arr2Index<arr2.length) {
        if(arr1[arr1Index] <= arr2[arr2Index]) {
            c.push(arr1[arr1Index++]);
        } else {
            c.push(arr2[arr2Index++]);
        }
    }
    while (arr1Index < arr1.length) {
        c.push(arr1[arr1Index++]);
    }

    while (arr2Index < arr2.length) {
        c.push(arr2[arr2Index++]);
    }

    return c;
}

console.log(mergeSort(a,b));