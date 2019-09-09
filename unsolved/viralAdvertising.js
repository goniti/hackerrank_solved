// 5            5
//(-) = 2      (-) x 3 = 6
// 2            2

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
    const shared = [5, 6, 9, 12, 18]
    const liked = []

    let cumulative = []

    for (let i = 0; i < shared.length; i++) {
        liked.push(Math.floor(shared[i] / 2))
    }


    // cumulative.push(liked[0])
    // cumulative.push(liked[0] + liked[1])
    // cumulative.push(liked[0] + liked[1] + liked[2])
    // cumulative.push(liked[0] + liked[1] + liked[2] + liked[3])
    // cumulative.push(liked[0] + liked[1] + liked[2] + liked[3] + liked[4])


}

let result = viralAdvertising(n)
console.log(result);
