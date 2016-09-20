
function binary(num) {
    let exp = 1;
    let digits = [];

    while (num >= Math.pow(2, exp)) exp++;

    for (exp--; exp >= 0; exp--) {
        let bit = Math.floor(num / Math.pow(2, exp));

        digits.push(bit);
        num -= bit * Math.pow(2, exp);
    }

    return digits.join('');
}