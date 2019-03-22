const height = [2, 5, 4, 5, 2];
const nk = [height.length, 7];
const n = nk[0];
const k = nk[1];

const hurdleRace = (height, nk, n, k) => {
  let potion = Math.max(...height) - k;
  return Math.max(0, potion)
}

let result = hurdleRace(height, nk, n, k);
console.log(result);
