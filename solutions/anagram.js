
function anagram(first, second) {
    function normalize(str) {
        return str.replace(/ /g, '').toLowerCase();
    }

    // Confirm that we've not just dealing with shuffled-around words.
    if (first.split(' ').map(normalize).sort().join(' ') === second.split(' ').map(normalize).sort().join(' ')) {
        return false;
    }

    // Strip away all of the variane that doesn't matter (capitalization and spacing).
    first = normalize(first);
    second = normalize(second);

    // Check if all of the elements are the same when order is normalized.
    return first.split('').sort().join('') === second.split('').sort().join('');
}