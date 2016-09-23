function slide() {
    let vals = [];

    return {
        add(num) {
            if (vals.length > 3) vals.shift();

            vals.push(num);
        },
        get() {
            return vals.reduce((tot, next) => tot + next) / vals.length;
        }
    }
}