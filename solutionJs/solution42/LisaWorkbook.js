const arr = [4, 2, 6, 1, 10]
const n = arr.length
const k = 3


const workbook = (n, k, arr) => {
    let count = 0
    let special = 0
    let b = Math.ceil(Math.max(...arr) / k)
    const problem = []
    const chapitre = []
    const myArray = []

    for (let i = 0; i < arr.length; i++) {
        let problems = new Array(arr[i]).fill(i).map((_, i) => i + 1)
        problem.push(problems)
    }

    for (let j = 0; j < problem.length; j++) {
        const test = new Array(Math.ceil(problem[j].length / k)).fill().map(_ => problem[j].splice(0, k))
        chapitre.push(test)
    }


    for (let x = 0; x < n; x++) {
        for (let y = 0; y < b; y++) {
            if (chapitre[x][y] !== undefined) {
                count++
                myArray.push(chapitre[x][y])
            }
        }
    }

    for (let u = 0; u < count; u++) {

        if (myArray[u].indexOf(u + 1) >= 0) {
            special++
        }
    }

    return special



}

let result = workbook(n, k, arr)
result

