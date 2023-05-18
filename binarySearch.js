function binarySearch (num, arr) {
    let left = 0;
    let right = arr.length-1

    while (left<=right) {
        x = Math.floor((left+right)/2)
        if(num === arr[right]) {
            return x
        } else if 
            (num > arr[x]){
                right = x - 1
        } else {
            left = x + 1
        }
    }
    return -1;
}


function bSearchRecursive(array, num, left = 0, right = array.length - 1) {

    if (left > right) {
      return -1;
    }
    const middle = Math.floor((left + right) / 2);
  
    if (array[middle] === num) {
      return middle;
    }
  
    if (array[middle] > num) {
      return bSearchRecursive(array, num, left, middle - 1);
    }
  
    return bSearchRecursive(array, num, middle + 1, right);
  }

