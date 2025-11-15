function mySqrt(x) {
    if (x===2) {
        return 1
    }
    else if (x===0) {
        return 0
    }
    let i = 1;
    let n = 0
    let ns = 0
    while (i * i < x) {
        i++;
    }
    const lowerSquare = (i - 1) * (i - 1);
    const upperSquare = i * i;

    if (x - lowerSquare < upperSquare - x) {
        n = lowerSquare
    } else {
        n = upperSquare
    }
    for (let j = 0; j < n; j++) {
        if (j*j===n) {
            ns=j
        }
    }
    let s = ns + (x - n) / (2 * ns)
    return ~~s
}
console.log(mySqrt(0));
