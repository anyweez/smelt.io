function _match(word, pattern) {
    if (word.length !== pattern.length) return false;

    let keepers = word.split('')
        .filter((letter, i) => pattern[i] === '_' || letter === pattern[i]);

    return keepers.length === word.length;
}

function wordhunt(words, pattern) {
    return words.filter(word => _match(word, pattern)).length;
}