const s = [1, 2, 1, 3, 2];
const dm = [3, 2];
const d = dm[0];
const m = dm[1];

const birthday = (s, d, m) => {
    const n = s.length;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.length - i >= m) {
            const ar = s.slice(i, i + m);
            const sumS = ar.reduce((acc, cV) => acc + cV, 0);

            if (sumS === d) {
                count++
            }
        }
    }
    return count
}

const result = birthday(s, d, m)
console.log(result);

