const ITERATIONS = 100000;

function nemo(prob_catch, days) {
    function go_fishing() {
        return Math.random() < prob_catch;
    }

    function simulate() {
        let fish = 10;

        for (let day = 0; day < days; day++) {
            if (go_fishing()) fish++;
            fish--;

            if (fish < 0) return false;
        }

        return true;
    }

    let successes = 0;

    for (let i = 0; i < ITERATIONS; i++) {
        if (simulate()) successes++;
    }

    return Math.round(100 * successes / ITERATIONS) / 100;
}