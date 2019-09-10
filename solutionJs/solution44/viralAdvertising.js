// Day Shared Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24

//input
n = 3

//output
const viralAdvertising = (n) => {
    const shared = [5]
    const liked = []

    // complete shared array
    for (let i = 0; i < n - 1; i++) {
        shared.push(Math.floor(shared[i] / 2) * 3)
    }

    // complete liked array
    for (let j = 0; j < shared.length; j++) {
        liked.push(Math.floor(shared[j] / 2))
    }

    // Sum liked for return cumulative Number
    let cumulativeNumber = liked.slice(0, n).reduce((a, b) => a + b, 0)
    return cumulativeNumber
}

let result = viralAdvertising(n)
console.log(result);

//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//                                Result Final                               //
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//

const viralAdvertisingFinal = (n) => {
    const s = [5]
    const l = []

    for (let i = 0; i < n; i++) {
        const f = Math.floor(s[i] / 2)
        l.push(f)
        s.push(f * 3)
    }


    let cN = l.slice(0, n).reduce((a, b) => a + b, 0)
    return cN
}

let resultFinal = viralAdvertisingFinal(n)
console.log(resultFinal);
