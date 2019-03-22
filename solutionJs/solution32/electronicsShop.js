const keyboards = [3, 1];
const drives = [5, 2, 8];
const bnm = [10, keyboards.length, drives.length];
const b = bnm[0]; b
const n = bnm[1]; n
const m = bnm[2]; m

const getMoneySpent = (keyboards, drives, bnm, b, n, m) => {
  const amount = [-1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const sumArrays = keyboards[i] + drives[j];

      if (sumArrays <= b) {
        amount.push(sumArrays)
      }
    }
  }

  return Math.max(...amount);

}

let result = getMoneySpent(keyboards, drives, bnm, b, n, m)
console.log(result);
