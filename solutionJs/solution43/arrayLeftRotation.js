const a = [1, 2, 3, 4, 5]
const n = a.length
const d = 4
const nd = [n, d]


const rotLeft = (a, d) => {
    let start = a.slice(0, d)
    let end = a.slice(d)
    let convert = end.concat(start)


    return convert
}


const result = rotLeft(a, d);