const ar = [1, 3, 2, 6, 1, 2];
const nk = [6, 3];
const n = nk[0];
const k = nk[1];

const divisibleSumPairs = (n, ar, k) => {
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++
      }
    }
    return count
  }

  let result = divisibleSumPairs(n, ar, k);
  console.log(result);


