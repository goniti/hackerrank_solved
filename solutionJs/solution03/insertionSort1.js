const arr = [2, 4, 6, 8, 3];
const n = arr.length;

const insertionSort1 = (arr) => {
 const last = arr[n - 1]

  for (let i = n - 2; i >= 0; i--) {
    const element = arr[i];

    if (i === 0 && element > last) {
      arr[1] = element
      console.log(arr.join(' '));
      arr[0] = last
      console.log(arr.join(' '));
    } else if (element > last) {
      arr[i + 1] = element
      console.log(arr.join(' '));
    } else {
      arr[i + 1] = last
      console.log(arr.join(' '));
      break
    }
  }
}

let result = insertionSort1(arr)
