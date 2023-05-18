// squareSorted([ -4, -3, -3, 0, 1, 2, 10 ]) -> [ 0, 1, 4, 9, 9, 16, 100 ]

const squareSorted = (arr) => {

  const res = [];

  const negativeReversedSorted = []; // [ 16, 9, 9 ]
  const positiveSorted = []; // [ 0, 1, 4, 100 ]

  for (const element of arr) {
    const item = element;
    if (item < 0) {
      negativeReversedSorted.push(item ** 2);
    } else {
      positiveSorted.push(item ** 2);
    }
  }

  const negativeSorted = negativeReversedSorted.reverse(); // [ 9, 9, 16 ]

  let aPointer = 0;
  let bPointer = 0;

  while (aPointer < negativeSorted.length && bPointer < positiveSorted.length) {
    const a = negativeSorted[aPointer];
    const b = positiveSorted[bPointer];

    if (a < b) {
      res.push(a);
      aPointer++;
    } else {
      res.push(b);
      bPointer++;
    }
  }

  while (aPointer < negativeSorted.length) {
    res.push(negativeSorted[aPointer]);
    aPointer++;
  }

  while (bPointer < positiveSorted.length) {
    res.push(positiveSorted[bPointer]);
    bPointer++;
  }

  return res;
};

console.log(squareSorted([-4, -3, -3, 0, 1, 2, 10]));


