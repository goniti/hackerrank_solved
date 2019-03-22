const ijk = [20, 23, 6];
const i = ijk[0];
const j = ijk[1];
const k = ijk[2];

const beautifulDays = (i, j, k) => {
  let count = 0;

  for (let n = i; n <= j; n++) {
    const nR = n.toString().split('').reverse().join('');
    if ((n - nR) / k === Math.round((n - nR) / k)) {
      count++
    }
  }

  return count
}

let result = beautifulDays(i, j, k);
console.log(result);








