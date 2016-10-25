const FACES = ['J', 'Q', 'K'];

function blackjack(hand) {
    function busts(hand) {
        return hand.reduce((total, next) => total + next, 0) > 21;
    }
    
    let aceCount = hand.filter(card => card === 'A').length;
    // Replace all face cards with 10.
    hand = hand
        .map(item => FACES.includes(item) ? 10 : item)
        .map(item => item === 'A' ? 11 : item);

    for (let i = 0; i < aceCount; i++) {
        hand[hand.findIndex(card => card === 11)] = 1;

        if (!busts(hand)) return false;
    }

    return busts(hand);
}