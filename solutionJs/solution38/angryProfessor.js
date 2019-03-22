const t = 2
const a = [-1, -3, 4, 2]
const nk = [4, 3]
const n = nk[0]
const k = nk[1]


const angryProfessor = (a, t, nk, n, k) => {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] <= 0) {
            count++
        }
    }

    if (k <= count) {
        return 'NO'
    }
    return 'YES'
}

let result = angryProfessor(a, t, nk, n, k)
console.log(result);
