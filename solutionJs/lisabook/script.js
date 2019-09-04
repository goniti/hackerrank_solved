const arr = [4, 2, 6, 1, 10]
const n = arr.length
const k = 3


const workbook = (n, k, arr) => {

    const page = []

    for (let i = 0; i < arr.length; i++) {
        let problem = new Array(arr[i]).fill(i).map((_, i) => i + 1)
        page.push(problem)
    }


    const sequence = Array.prototype.concat(...page);

    console.log(sequence)


}

let result = workbook(n, k, arr)
result