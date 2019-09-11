const arr = [1,1,2,5,8,6,4,5,2,3,6,5,4,8,1];
const n = arr.length;


const countingSort = (arr) => {
  //init
  const sorted = [0];

  //this function verify length of sorted array
  const verify = (suite, k) => {
    const verify = [];
    let countConcat = {};
    let countBrr = {};
    const countAll = k.concat(suite);
    countAll.forEach(function (i) { countConcat[i] = (countConcat[i] || 0) + 1; });
    const allValue = Object.values(countConcat);
    const allKeys = Object.keys(countConcat);
    suite.forEach(function (i) { countBrr[i] = (countBrr[i] || 0) + 1; });
    const v = Object.values(countBrr);

    for (let i = 0; i < allValue.length; i++) {
      if (v[i] * 2 !== allValue[i]) {
        verify.push(allKeys[i])
      }
    }
    return verify
  }
  // array for compare with sorted.length
  const length = Math.max(...arr)
  let count = Math.min(...arr)
  const suite = Array.apply(0, Array(length)).map(function () { return count++; });

  //count
  const c = {};
  arr.forEach(function (i) { c[i] = (c[i] || 0) + 1; });
  const v = Object.values(c);
  const k = Object.keys(c);
  v
  k
  //missing number k of suite
  let y = verify(suite, k)
  let x = y.length

  // add element of sorted array

  for (let i = 0; i < length - x; i++) {
    sorted.splice(suite[i], 0, v[i])
  }

  if (x > 0) {
    for (let j = 0; j < x; j++) {
      const zero = Number(y[j])
      sorted.splice(zero, 0, 0)

    }
  }
  return sorted;
}

let result = countingSort(arr)
console.log(result);

// 0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2



// méthode fill() remplit tous les éléments d'un tableau entre deux index avec une valeur statique.