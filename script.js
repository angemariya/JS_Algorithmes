function bul(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===x) {
            return true; // выводится булевое значение
        } else {
            return "-1";
        }
    }
}

function num(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===x) {
            return arr[i]; //выводится число
        } else {
            return -1;
        }
    }
}


let sum = 0;

function result () {
    for(let i=0; i<3; i++) {
        sum = +prompt("Enter number");
        sum += sum[i];
    }  
    return(sum)
}
