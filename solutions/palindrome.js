function palindrome(phrase) {
    phrase = phrase.split(' ').join('').toLowerCase();

    for (let i = 0; i < Math.ceil(phrase.length / 2); i++) {
        if (phrase[i] !== phrase[phrase.length - (i + 1)]) return false;
    }

    return true;
}