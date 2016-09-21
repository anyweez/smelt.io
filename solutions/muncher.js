function muncher(html) {
    let matches = /^.*\$([0-9]+(\.[0-9]{2})?)[^.\d].*$/.exec(html);
    return matches ? parseFloat(matches[1]) : null;
}