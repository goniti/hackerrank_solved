//const arr = [5, 4, 4, 2, 2, 8]
//const arr = [1, 2, 3, 4, 3, 3, 2, 1]
//const arr = [8, 8, 14, 10, 3, 5, 14, 12]
const arr = [66, 42, 68, 72, 68, 81, 91, 19, 40, 73, 44, 73, 89, 73, 44, 12, 77, 40, 44, 17, 59, 99, 35, 92, 80, 51, 14, 30]
const n = arr.length


const cutTheSticks = (arr) => {
    const answer = [n]


    for (let i = 0; i < arr.length; i++) {
        arr = arr.filter(i => i !== 0);
        arr = arr.map(i => i - Math.min(...arr))
        const filtered = arr.filter(i => i !== 0).length

        if (filtered > 0) {
            answer.push(filtered)
        }

        // continue loop
        if (arr.length !== 2) {
            i = -1
        }
    }


    return answer

}

let result = cutTheSticks(arr)
console.log(result.join("\n") + "\n");



