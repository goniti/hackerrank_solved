const arr = [0, 1, 2, 4, 6, 5, 3];
const n = arr.length;


const findMedian = (arr) => {
    const compare = (a, b) => {
        if (a < b)
          return -1;
        if (a > b)
          return 1;

        return 0;
      }

arr.sort(compare)
    let x = (arr.length- 1) / 2
 return arr[x]
}

let result = findMedian(arr)
console.log(result);