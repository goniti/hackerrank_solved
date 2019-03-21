const ar = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
  const sum = ar.reduce((acc, cV) => acc + cV, 0);
  return sum
}

let result = simpleArraySum(ar);
console.log(result);
