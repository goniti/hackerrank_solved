//const a = [4, 6, 5, 3, 1, 3]
//const a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
//const a = [1, 2, 2, 3, 1, 2]
const a = [4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4]
const n = a.length

const pickingNumbers = (a) => {
    let final = 0
    const checkValue = []

    const count = a.reduce((map, val) => { map[val] = (map[val] || 0) + 1; return map }, {})

    count //-----------------------
    const highestDuplicateValue = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b)

    console.log(highestDuplicateValue); //-----------------------

    const objectValueByKey = (counts, key) => {
        return Object.entries(counts).find(i => i[0] === key);
    }

    final = objectValueByKey(count, highestDuplicateValue)[1]
    console.log(final); //-----------------------


    for (let i = 0; i < a.length; i++) {

        if (a[i] === parseInt(highestDuplicateValue) - 1 || a[i] === parseInt(highestDuplicateValue) + 1) {

            checkValue.push(a[i])

        }

    }
    console.log(checkValue); //-----
    const counts = checkValue.reduce((map, val) => { map[val] = (map[val] || 0) + 1; return map }, {})
    counts
    const checkValueDuplicate = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b)
    checkValueDuplicate
    final = final + objectValueByKey(counts, checkValueDuplicate)[1]
    return final

}




let result = pickingNumbers(a)
console.log(result);