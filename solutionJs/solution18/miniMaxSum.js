const arr = [1, 2, 3, 4, 5];
arr.sort();

const minSum = arr.slice(0, 4).reduce((acc, cV) => acc + cV, 0);
const maxSum = arr.slice(1).reduce((acc, cV) => acc + cV, 0);


console.log(minSum, maxSum);
