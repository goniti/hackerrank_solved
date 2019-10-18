
////////////// Work but time out !/////////////////////////
const a = 3
const b = 2555


const squares = (a, b) => {
    let count = 0

    for (let i = 0; i < b; i++) {

        if (i * i >= a && i * i <= b) {
            count++
        }

    }
    return count
}

let result = squares(a, b)
console.log(result);

// Work but time out !

// Complete the squares function below.
// function squares(a, b) {

//     let count = 0

//    for (let i = a; i < b + 1; i++) {



//        if (Math.sqrt(i) === Math.floor(Math.sqrt(i))) {
//            count++
//        }

//    }


//    return count

// }

// let result = squares(a, b)
// console.log(result);