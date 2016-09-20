function wordhunt(words, pattern) {
    return words
        .filter(word => word.length === pattern.length)
        .filter(word => {
            for (let i = 0; i < word.length; i++) {
                if (pattern[i] !== '_' && pattern[i] !== word[i]) return false;
            }
            return true;
        }).length;
}