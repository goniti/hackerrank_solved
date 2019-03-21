const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {

  const x = ar.reduce((acc, cV) => acc + cV, 0);
  return x
}

let result = aVeryBigSum(ar);
console.log(result);
