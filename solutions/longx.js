function longx(message) {
    let current = 0;
    let record = 0;

    for (let i = 0; i < message.length; i++) {
        if (message[i] === 'x') current++;
        else {
            if (current > record) record = current;
            current = 0;
        }
    }

    // Test one more time before we call it quits.  
    if (current > record) record = current;

    return record;
}