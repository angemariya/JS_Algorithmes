let list = {
    value: 9,
    next: {
        value: 10,
        next: {
            value: 5,
            next: null
        }
    }
}

let next = list.next
next.value
/*
const myFunc = (obj) => {
    const arr = [];
    while (obj != null) {
        arr.push(obj.value);
    obj = obj.next;    
    }
    let set = new Set(arr);
    return arr.length === set.size ? true : false;
}

const myFunc = (obj) => {
    const arr = [];
    while (obj != null) {
        if (arr.includes(obj.value)) return false
        arr.add(obj.value);
        obj = obj.next

    }
    return true;
}

let list = {
    value: 9,
    next: {
        value: 10,
        next: {
            value: 9,
            next: null
        }
    }
}

console.log(
    myFunc(list) ? "Нет одинаковых value" : "Есть одинаковые value"
);


*/

const isLinkedListHasDuplicate = (linkedList) => {
    const arrSet = new Set();
    let count = 0;
    while (linkedList != null) {
        count++;
        arrSet.add(linkedList.value);
        linkedList = linkedList.next;
        if (arrSet.size !== count) return false;
    }
    return true;
}



const ifSame = (status) => status ? "Нет одинаковых value" : "Есть одинаковые value" ;
    
console.log(ifSame(myFunc(list)));