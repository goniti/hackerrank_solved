const n = 4
const t = n.length

const utopianTree = (n, t) => {
    const period = [...Array(n + 1).keys()]
    const height = []
    let count = 1

    for (let i = 0; i < period.length; i++) {

        if (period.indexOf(period[i]) % 2 == 0 && period[i] !== 0) {
            height.push(count)
            count = count * 2

        } else {
            height.push(count++)
        }

    }

    return height[n]

}

let result = utopianTree(n, t)
console.log(result);
