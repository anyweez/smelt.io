function _range(max) {
    let arr = [];
    for (let i = 2; i < max; i++) {
        arr.push(i);
    }

    return arr;
}

function sieve(threshold) {
    let nums = _range(threshold);
    let primes = [];

    while (nums.length > 0) {
        let prime = nums.shift();
        nums = nums.filter(num => num % prime !== 0);

        primes.push(prime);
    }

    return primes.length;
}