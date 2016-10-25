function _prox(places, i) {
    let shortest = Number.MAX_SAFE_INTEGER;
    // console.log(places, i);
    for (let loc = 0; loc < places.length; loc++) {
        if (Math.abs(i - places[loc]) < shortest) shortest = Math.abs(i - places[loc]);
    }

    return shortest;
}

function statues(places) {
    places = places.split('');

    let statues = places.map((place, i) => {
        if (place === 'S') return i;
        else return null;
    }).filter(i => i !== null);

    let houses = places.map((place, i) => {
        if (place === 'H') return i;
        else return null;
    }).filter(i => i !== null);

    return houses.filter(i => _prox(statues, i) <= 2).length;
    // return places.filter((_, i) => _prox(locations, i) <= 2).length;
}