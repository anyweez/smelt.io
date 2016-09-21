function heatmap(strength) {
    return {
        red: 255 * (strength / 100),
        green: 0,
        blue: 255 - (255 * (strength / 100)),
    };
}