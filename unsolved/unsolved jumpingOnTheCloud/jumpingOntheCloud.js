const c = [0, 0, 0, 1, 0, 0] //3
//const c = [0, 0, 1, 0, 0, 1, 0] //4
//53 const c = [0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0]
// const c = [0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0]
const n = c.length

const jumpingOnClouds = (c, n) => {

    let count = -1
    let avoided = 0
    let consecutiveAvoidance = 0

    for (let i = 0; i < n; i++) {
        // Maximum number of jumps
        if (c[i] === 0) {
            count++
        }


        // How many jump can i avoided  ? 
        if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 0) {

            if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 0 && c[i + 3] === 0 && c[i + 4] === 0) {
                consecutiveAvoidance++
            }

            avoided++

        }


    }

    if (consecutiveAvoidance > 0) {
        consecutiveAvoidance++
    }
    avoided -= consecutiveAvoidance


    // return minimum number of jumps
    return count - avoided

}

let result = jumpingOnClouds(c, n)
console.log(result);