const a = [7, 4, 5, 1, 1, 3, 4, 1, 7, 1];
const n = 8;

const minimumDistances = (a, n) => {
  let db = 0
  const compare = (a, b) => {
    if (a > b)
      return -1;
    if (a < b)
      return 1;
  }

  const obj = {}
  const minDistance = [];

  for (let i = 0; i < a.length; i++) {
    const element = a[i]
    if (obj[element]) {
      obj[element].push(i)
    } else {
      obj[element] = [i]
    }
  }

  for (const key in obj) {
    const value = obj[key];

    if (value.length >= 2) {
      db++
      const valueSort = value.sort(compare);

      for (let j = 0; j < valueSort.length; j++) {
        for (let k = j + 1; k < valueSort.length; k++) {
          minDistance.push(valueSort[j] - valueSort[k])
        }
      }
    }
  }

  if (db === 0) {
    return -1
  }
  return Math.min(...minDistance)
}

let result = minimumDistances(a, n);
console.log(result);