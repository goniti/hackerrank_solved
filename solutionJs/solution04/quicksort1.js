const arr = [4, 5, 3, 7, 2];
const n = arr.length;

function quickSort(arr, n) {
  const equal = arr[0]
  const solution = [];


  for (let i = 0; i < n; i++) {
    if (equal > arr[i]) {
      solution.push(arr[i])
    }
  }
  solution.push(equal)


  for (let j = 0; j < n; j++) {

    if (equal < arr[j]) {
      solution.push(arr[j])
    }
  }

  return solution

}

console.log(quickSort(arr, n));

//Solution 2
const arr2 = [0, -3, 6, 4, -10, 8, -5, 2, -7];
const n2 = arr2.length;


const quickSort2 = arr2 => {
  if (arr2.length < 2) return arr2;

  const pivot = arr2[Math.floor(Math.random() * arr2.length)];

  let left = [];
  let equal2 = [];
  let right = [];

  for (let element of arr2) {
    if (element > pivot) right.push(element);
    else if (element < pivot) left.push(element);
    else equal2.push(element);
  }

  return quickSort2(left)
    .concat(equal2)
    .concat(quickSort2(right));
};


let result2 = quickSort2(arr2)
console.log(result2);