const n = 3;
const k = 10;
const A = [2, 1, 3];
const B = [7, 8, 9];

//const n = 4;
//const k = 5;
//const A =[1,2,2,1];
//const B =[3,3,3,4];

const twoArrays = (n, k, A, B) => {
  let count = 0;
  const increase = (a, b) => {
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  }
  const decrease = (a, b) => {
    if (a > b)
      return -1;
    if (a < b)
      return 1;

    return 0;
  }
  A.sort(increase)
  B.sort(decrease)

  for (let i = 0; i < n; i++) {
    let x = A[i] + B[i]
    if (x >= k) {
      count++
    }
  }
  if (count === n) {
    return 'YES'
  }
  return 'NO'
}

let result = twoArrays(n, k, A, B);

console.log(result);
