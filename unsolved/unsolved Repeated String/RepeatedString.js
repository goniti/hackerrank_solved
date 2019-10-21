const s = "aba"
const n = 10



function repeatedString(s, n) {

    if (s.length === 1) {
        return n
    }


    if (Math.floor(n / s.length) === n / s.length) {
        return Math.floor(n / s.length) * 2
    } else {
        return Math.floor(n / s.length) * 2 + 1

    }
}

let result = repeatedString(s, n)
console.log(result);
