
function phonenum(input) {
    input = input.replace(/[\D]/g, '').split('');

    if (input.length !== 7 && input.length !== 10) return undefined;

    if (input.length === 7) {
        return `${input.slice(0, 3).join('')}-${input.slice(3).join('')}`;
    } else {
        return `(${input.slice(0, 3).join('')}) ${input.slice(3, 6).join('')}-${input.slice(6).join('')}`;
    }
}