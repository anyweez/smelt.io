function chemistry(element, symb) {
    // 1. Exactly two letters long
    if (symb.length !== 2) return false;

    symb = symb.toLowerCase();
    element = element.toLowerCase().split('');
    // 2. Both letters in the symbol must appear in the element name.
    if (!element.includes(symb[0]) || !element.includes(symb[0])) return false;

    // 3. Letters must be in the same order as the element.
    return (element.indexOf(symb[0]) < element.indexOf(symb[1]));
}