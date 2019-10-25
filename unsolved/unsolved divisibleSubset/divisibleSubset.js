const k = 4
const s = [19, 10, 12, 10, 24, 25, 22]
//const k = 3
//const s = [1, 7, 2, 4]
const n = s.length

const nonDivisibleSubset = (k, s) => {

    const sFirst = [];
    const sSecond = []

    for (let i = 0; i < s.length; i++) {

        for (let j = i + 1; j < s.length; j++) {


            if ((s[i] + s[j]) % k === 0) {


                if (sFirst.indexOf(s[i]) === -1 && sSecond.indexOf(s[i]) === -1) {
                    sFirst.push(s[i])

                }
                if (sSecond.indexOf(s[j]) === -1 && sFirst.indexOf(s[j]) === -1) {
                    sSecond.push(s[j])

                }

            }
        }

    }

    if (sFirst.length >= sSecond.length) {
        return sFirst.length
    } else {
        return sSecond.length
    }

}

let result = nonDivisibleSubset(k, s)
console.log(result);
