const s = ["a", "b", "a", "a"]
const t = ["a", "b", "a"]
const k = 7


const appendAndDelete = (s, t, k) => {
    const isEqual = JSON.stringify(s) === JSON.stringify(t)
    let count = 0

    if (isEqual && s.length * 2 <= k) {

        return 'YES'

    } else {
        if (k % 2 == 0) {
            return 'YES'
        }
    }





    if (isEqual && count === k) {

        return 'YES'

    } else {
        return 'NO'
    }

}

let result = appendAndDelete(s, t, k)
console.log(result);
