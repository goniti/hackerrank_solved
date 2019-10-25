// const k = 4
// const s = [19, 10, 12, 10, 24, 25, 22]
const k = 3
const s = [1, 7, 2, 4]
const n = s.length

const nonDivisibleSubset = (k, s) => {
    let count = 0

    for (let i = 0; i < s.length; i++) {

        for (let j = i + 1; j < s.length; j++) {
            console.log(s[i]);
            console.log(s[j]);

            console.log(s[i] + s[j]);


            if ((s[i] + s[j]) % k === 0) {

                count++

            }
        }

    }
    return count


}

let result = nonDivisibleSubset(k, s)
console.log(result);
