const arr = [2, 4, 6, 8, 3];
const n = arr.length;

const insertionSort1 = (arr) => {
  const last = arr[arr.length - 1]

  for (let i = arr.length - 2; i >= 0; i--) {

    if (i === 0 && arr[i] > last) {
      arr[1] = arr[i]
      console.log(arr.join(' '));
      arr[0] = last
      console.log(arr.join(' '));
    } else if (arr[i] > last) {
      arr[i + 1] = arr[i]
      console.log(arr.join(' '));
    } else {
      arr[i + 1] = last
      console.log(arr.join(' '));
      break
    }

  }
}

let result = insertionSort1(arr)
console.log(result)
