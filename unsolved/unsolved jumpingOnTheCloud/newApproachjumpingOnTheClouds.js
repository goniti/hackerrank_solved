const c = [0, 0, 1, 0, 0, 1, 0] //4
//const c = [0, 0, 0, 0, 1, 0] //3
//const c = [0, 0, 0, 1, 0, 0] //3
//const c = [0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0] //53
//const c = [0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0] //54

const jumpingOnClouds = (c) => {
    const type = ['cumulus ', 'thunderheads ']
    const searchCloud = type.indexOf('cumulus ')
    const idx = c.indexOf(searchCloud)

    let cumulus = []

    for (let i = 0; i < c.length; i++) {

        if (c.indexOf(searchCloud, (idx + i)) >= 0) {

            const isGreenCloud = c.indexOf(searchCloud, (idx + i))

            cumulus.push(isGreenCloud)
            cumulus = [...new Set(cumulus)] // filtering duplicate value on array

        }

    }


    console.log(cumulus);

}

let result = jumpingOnClouds(c)
console.log(result);
