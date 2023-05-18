//Алгоритм бегущих сумм

const arr = [4, 1, 7, -5];
const runningSum = [arr[0]];

for (let i = 1; i < arr.length; i++) {
    runningSum[i] = arr[i] + runningSum[i-1];
}

console.log(runningSum);

// [ arr[0], arr[0] + arr[1], arr[0] + arr[1] + arr[2], arr[0] + arr[1], + arr[2] + arr[3] ]
// arr[1] + arr[2]
// runningSum[2] - runningSum[0]

// arr[i..j] -> runningSum[j] - runningSum[i] + arr[i]