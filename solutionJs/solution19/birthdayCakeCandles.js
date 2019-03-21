const ar = [65, 11, 7, 65, 47, 15, 2, 65, 11, 3, 47, 65, 7, 12];

function birthdayCakeCandles(ar) {
  let candleHeights = 0;
  const compare = (a, b) => {
    if (a < b)
      return -1;
    if (a > b)
      return 1;

    return 0;
  }
  const ars = ar.sort(compare);
  const idxOnArs = ars.length - 1;

  for (let i = 0; i < ars.length; i++) {
    const element = ars[i];
    if (element === ars[idxOnArs]) {
      candleHeights++;
    }

  }
  return candleHeights;
}
let result = birthdayCakeCandles(ar)
console.log(result);
