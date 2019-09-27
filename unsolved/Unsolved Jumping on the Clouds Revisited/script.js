//const k = 2
//const c = [0, 0, 1, 0, 0, 1, 1, 0]

const k = 3
const c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0] // output80

const n = c.length


const jumpingOnClouds = (c, k) => {
    const type = ['cumulus', 'thunderheads']
    let searchCloud = type.indexOf('cumulus')
    const idx = c.indexOf(searchCloud)
    let cumulus = []
    let thunderheads = []

    for (let i = 0; i < n; i++) {

        searchCloud = type.indexOf(type[0])

        if (c.indexOf(searchCloud, (idx + i)) >= 0) {
            const greenCloud = c.indexOf(searchCloud, (idx + i))

            cumulus.push(greenCloud)
            cumulus = [...new Set(cumulus)] // filtering duplicate value on array

        }

        searchCloud = type.indexOf(type[1])

        if (c.indexOf(searchCloud, (idx + i)) >= 0) {
            const redCloud = c.indexOf(searchCloud, (idx + i))

            thunderheads.push(redCloud)
            thunderheads = [...new Set(thunderheads)] // filtering duplicate value on array
        }

    }

    for (let j = 0; j < n; j++) {
        j = j + k - 1
        cumulus = cumulus.filter(item => item !== j)
        thunderheads = thunderheads.filter(item => item !== j)
    }

    console.log(cumulus);
    console.log(thunderheads);


    // return 100 - (cumulus.length + thunderheads.length * 3)


}

let result = jumpingOnClouds(c, k)
console.log(result);