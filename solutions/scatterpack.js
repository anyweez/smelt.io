function scatterpack(first, second) {
    for (let i = 0; i < first.length; i++) {
        let found = second.indexOf(first[i]);

        if (found === -1) return false;
        else {
            first[i] = null;
            second[found] = null;
        }
    }

    return first.find(x => x !== null) === undefined && 
        second.find(x => x !== null) === undefined;
}