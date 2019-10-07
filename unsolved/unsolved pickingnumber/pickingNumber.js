const a = [4, 6, 5, 3, 3, 1]
//const a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

const n = a.length

const pickingNumbers = (a) => {
    a.sort((a, b) => a - b)
    const arr = []
    const arr2 = []
    let x = 0
    let y = 0


    for (let i = 0; i < n; i++) {

        arr.push(a[i])
        console.log(arr);

        if (Math.abs(arr[0] - arr[arr.length - 1]) <= 1) {
            console.log(arr);
            x++

        }

    }


    for (let j = n - 1; j > 0; j--) {

        arr2.push(a[j])
        console.log(arr2);

        if (Math.abs(arr2[0] - arr2[arr2.length - 1]) <= 1) {

            y++
            console.log(arr2);
        }

    }


    return Math.max(x, y);

}

let result = pickingNumbers(a)
console.log(result);


