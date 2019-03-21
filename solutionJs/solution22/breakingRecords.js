const scores = [17, 45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50]
const n = scores.length;

const breakingRecords = (scores, n) => {
    const highest = [scores[0]];
    const lowest = [scores[0]];

    for (let i = 0; i < n; i++) {
        const score = scores[i];
        if (score > highest[highest.length - 1]) {
            highest.push(score);
        }
        if (score < lowest[lowest.length - 1]) {
            lowest.push(score);
        }
    }

    return ([highest.length - 1, lowest.length - 1])
}

const result = breakingRecords(scores, n);
console.log(result);