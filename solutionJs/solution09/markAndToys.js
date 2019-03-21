const nk = [7, 50];
const n = nk[0];
const k = nk[1];
const prices = [1, 12, 5, 111, 200, 1000, 10];


function maximumToys(prices, k, n) {
    let count = 0;
    const compare = (a, b) => {
        if (a < b)
            return -1;
        if (a > b)
            return 1;

        return 0;
    }
    prices.sort(compare)

    for (let i = 0; i < n; i++) {
        k = k - prices[i]
        if (k >= 0) {
            count++
        }
    }
    return count
}

let result = maximumToys(prices, k, n);
console.log(result);
