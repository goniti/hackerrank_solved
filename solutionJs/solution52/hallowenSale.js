// p = 100  // start price
// d = 19   //  price less than the cost of the previous
// m = 1   //== end price
// s = 180  // mist Wallet
// Expected Output  1

p = 63  // start price
d = 64   //  price less than the cost of the previous
m = 9  //== end price
s = 1242  // mist Wallet
// Expected Output  132


const howManyGames = (p, d, m, s) => {
    const cart = [];
    let total = 0;
    let count = 0

    for (let i = 0; i < s; i++) {
        if (p <= m) {
            p = m
        }

        if (s >= p) {
            cart.push(p)
        } else {
            return 0
        }

        p = p - d

    }

    for (let j = 0; j < cart.length; j++) {
        total += cart[j];
        count++

        if (total >= s) {

            if (m === 1 && count > 2 || total === s) {
                return count
            }

            return count - 1

        }
    }

}


let result = howManyGames(p, d, m, s)
console.log(result);
