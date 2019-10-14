const s = ["a", "b", "c", "d", "e", "f"]
const t = ["f", "e", "d", "c", "b", "a"]
//const s = ["a", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v"]
//const t = ["b", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v", "a", "s", "d", "f", "q", "w", "e", "r", "t", "y", "u", "i", "g", "h", "j", "k", "z", "x", "c", "v"]
const k = 100


const appendAndDelete = (s, t, k) => {
    const isEqual = JSON.stringify(s) === JSON.stringify(t)
    const sL = s.length
    const tL = t.length
    const l = Math.max(...[sL, tL])
    let count = 0
    let operation = 0

    if (isEqual && sL * 2 <= k || tL === 1 && sL < k || isEqual && k % 2 == 0) {
        return 'Yes'
    }

    for (let i = 0; i < l; i++) {
        if (s[i] !== t[i]) {
            break
        }
        count++
    }

    operation = sL - count
    operation = operation + tL - count

    if (operation === k || operation === tL * 2 && operation < k) {
        return 'Yes'
    } else {
        if ((k - operation) % 2 == 0 && operation < k) {
            return 'Yes'
        }
        return 'No'
    }

}

let result = appendAndDelete(s, t, k)
console.log(result);
