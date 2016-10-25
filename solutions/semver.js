
function semver(v1, v2) {
    let v1parts = v1.split('.').map(Number);
    let v2parts = v2.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
        if (v1parts[i] > v2parts[i]) return v1;
        else if (v2parts[i] > v1parts[i]) return v2;
    }

    return v1;
}