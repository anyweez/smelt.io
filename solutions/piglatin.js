
function piglatin(phrase) {
   let words = phrase.split(' ').map(word => word.substr(1) + word[0] + 'ay');

   return words.join(' ');
//    console.log(words);
}