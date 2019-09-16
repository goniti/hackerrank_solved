// hccaakkerrannkk

// if h => 1
// if a => 2
// if c => 1
// if k => 2
// if e => 1
// if r => 2
// if n => 1

//return yes

const s = 'hhaacckkekraraannk';
//const s = 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt';


const hackerrankInString = (s) => {
    const order = []
    if ([...s].filter(l => l === 'h').length >= 1) {
        order.push(s.indexOf('h'))
        if ([...s].filter(l => l === 'a').length >= 1) {
            order.push(s.indexOf('a'))
            if ([...s].filter(l => l === 'c').length >= 1) {
                order.push(s.indexOf('c'))
                if ([...s].filter(l => l === 'k').length >= 1) {
                    order.push(s.indexOf('k'))
                    if ([...s].filter(l => l === 'e').length >= 1) {
                        order.push(s.indexOf('e'))
                        if ([...s].filter(l => l === 'r').length >= 1) {
                            order.push(s.indexOf('r'))
                            if ([...s].filter(l => l === 'r').length >= 1) {
                                order.push(s.indexOf('r', (s.indexOf('r') + 1)))
                                if ([...s].filter(l => l === 'a').length >= 1) {
                                    order.push(s.indexOf('a', (s.indexOf('a') + 1)))
                                    if ([...s].filter(l => l === 'n').length >= 1) {
                                        order.push(s.indexOf('n'))
                                        if ([...s].filter(l => l === 'k').length >= 1) {
                                            order.push(s.indexOf('k', (s.indexOf('k') + 1)))


                                            console.log(order);
                                            console.log(order.sort((a, b) => (a > b) - (a < b)));

                                            return 'YES'
                                        } else {
                                            return 'NO'
                                        }
                                    } else {
                                        return 'NO'
                                    }
                                } else {
                                    return 'NO'
                                }
                            } else {
                                return 'NO'
                            }
                        } else {
                            return 'NO'
                        }
                    } else {
                        return 'NO'
                    }
                } else {
                    return 'NO'
                }
            } else {
                return 'NO'
            }
        } else {
            return 'NO'
        }
    }


}


let result = hackerrankInString(s)
console.log(result);
