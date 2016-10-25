function isNarcissistic(num) {
    let digits = num.toString().split('').map(Number);
    let total = digits.reduce((total, next) => total + Math.pow(next, digits.length), 0);

    return total === num;
}

function narcissistic(i) {
    let count = 0;
    let current = 0;

    while (i - 1 > count) {
        current++;
        // If its narcissistic, increase current.
        if (isNarcissistic(current)) count++;
    }

    return current;
}