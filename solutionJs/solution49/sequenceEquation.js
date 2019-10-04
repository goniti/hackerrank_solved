const p = [5, 2, 1, 3, 4]

const permutationEquation = (p) => {
    const y = []

    for (let i = 0; i < p.length; i++) {

        y.push(p.indexOf(p.indexOf([...p].sort((a, b) => a - b)[i]) + 1) + 1)

    }

    return y
}


let result = permutationEquation(p)
console.log(result);




//----------------------------------------------
// const p = [5, 2, 1, 3, 4]

// const permutationEquation = (p) => {
 // const compare = (a, b) => {
    //     if (a < b) {
    //         return -1;
    //     } else {
    //         return 1;
    //     }
    // }
//     const n = p.length
//     const arr = p.slice()
//     arr.sort(compare)
//     const y = []

//     for (let i = 0; i < n; i++) {
//         const x = arr[i]
//         const P = p.indexOf(x) + 1

//         y.push(p.indexOf(P) + 1)
//     }

//     return y

// }


// let result = permutationEquation(p)
// console.log(result);

