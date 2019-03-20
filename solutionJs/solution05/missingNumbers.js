const arr = [1, 2, 3, 4, 8, 10];
const n = arr.length;
const brr = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const m = brr.length;




const missingNumbers = (arr, brr, n, m) => {
  const missingNumber = [];
  let countConcat = {};
  let countBrr = {};

  const countAll = arr.concat(brr);
  countAll.forEach(function (i) { countConcat[i] = (countConcat[i] || 0) + 1; });
  const allValue = Object.values(countConcat);
  const allKeys = Object.keys(countConcat);

  brr.forEach(function (i) { countBrr[i] = (countBrr[i] || 0) + 1; });
  const v = Object.values(countBrr);

  for (let i = 0; i < allValue.length; i++) {
    if (v[i] * 2 !== allValue[i]) {
      missingNumber.push(allKeys[i])
    }
  }
  return missingNumber
}


let result = missingNumbers(arr, brr)
console.log(result.join(' ') + '\n');
