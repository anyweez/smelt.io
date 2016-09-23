function rosebud(message) {
    let code = new RegExp('^rosebud(!+)1$')

    let results = code.exec(message);

    if (results === null) return 0;
    else return results[1].length * 1000;
}