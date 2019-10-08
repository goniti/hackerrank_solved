const a = [4, 6, 5, 3, 3, 1]
//const a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

const n = a.length

const pickingNumbers = (a) => {
    let index = 0
    let count = 0
    a.sort()
    for (let i = 0; i < a.length; i++) {
        count++
        if (a[i] === a[0] || a[i] - 1 === a[0]) {

            index = a.indexOf(a[i], (a.indexOf(a[i]) + 1)) + 1

        }

        if (count > a.length - 1) {
            a.shift()

        }


    }

    const arr = a.splice(0, index);
    arr
    console.log(a);


}




let result = pickingNumbers(a)
console.log(result);





// a.sort((a, b) => a - b)
// const arr = []
// const arr2 = []
// let x = 0
// let y = 0


// for (let i = 0; i < n; i++) {

//     arr.push(a[i])
//     console.log(arr);

//     if (Math.abs(arr[0] - arr[arr.length - 1]) <= 1) {
//         console.log(arr);
//         x++

//     }

// }


// for (let j = n - 1; j > 0; j--) {

//     arr2.push(a[j])
//     console.log(arr2);

//     if (Math.abs(arr2[0] - arr2[arr2.length - 1]) <= 1) {

//         y++
//         console.log(arr2);
//     }

// }


// return Math.max(x, y);
