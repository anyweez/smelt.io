
function weaver(full, replace, freq) {
    let chars = full.split('');

    for (let i = freq - 1; i < chars.length; i += freq) {
        chars[i] = replace;
    }

    return chars.join('');
}