function doubloon(events) {
    let on = false;
    let cost = 0;

    for (let i = 0; i < events.length; i++) {
        if (events[i] === '1') on = true;
        else if (events[i] === '0') on = false;

        cost += on ? 1 : 0;
    }

    return cost;
}