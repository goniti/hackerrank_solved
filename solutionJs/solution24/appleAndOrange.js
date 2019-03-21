const st = [7, 11];
const s = st[0];
const t = st[1];
const ab = [5, 15];
const a = ab[0];
const b = ab[1];
const apples = [-2, 2, 1];
const oranges = [5, -6];
const mn = [apples.length, oranges.length];
const m = mn[0];
const n = mn[1];


const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let apCount = 0;
    let orCount = 0;

    for (let i = 0; i < m; i++) {
        const ap = apples[i] + a;
        if (ap >= s && ap <= t) {
            apCount++
        }
    }

    for (let j = 0; j < n; j++) {
        const or = oranges[j] + b;
        if (or >= s && or <= t) {
            orCount++
        }
    }

    console.log(apCount)
    console.log(orCount)
}

countApplesAndOranges(s, t, a, b, apples, oranges)