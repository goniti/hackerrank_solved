const arr = [1, 2, 2, 3]
const n = arr.length

const equalizeArray = (arr, n) => {

    const ascendingOrder = arr.sort((a, b) => a - b)
    const obj = {};
    ascendingOrder.forEach(function (x) { obj[x] = (obj[x] || 0) + 1; });
    const higherDuplication = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b)
    let count = 0

    for (let i = 0; i < n; i++) {

        if (arr[i] === parseInt(higherDuplication)) {
            count++
        }

    }

    return Math.abs(count - n);

}
let result = equalizeArray(arr, n)
console.log(result);