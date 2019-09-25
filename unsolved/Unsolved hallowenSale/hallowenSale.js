
p = 20  // start price
d = 3   //  price less than the cost of the previous
m = 6   //== end price
s = 25  // mist Wallet

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
            return count - 1
        }
    }

}


let result = howManyGames(p, d, m, s)
console.log(result);
