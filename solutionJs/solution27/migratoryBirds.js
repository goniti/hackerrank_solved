const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
const n = arr.length;


const migratoryBirds = (arr) => {
  let counts = {};
  arr.forEach(function (i) { counts[i] = (counts[i] || 0) + 1; });
  const valueArray = Object.values(counts);
  const keysArray = Object.keys(counts);
  const idxGreat = valueArray.indexOf(Math.max(...valueArray));
  return keysArray[idxGreat];

}

let result = migratoryBirds(arr)
console.log(result);

