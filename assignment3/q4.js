// Q4: Count vowels and consonants in a string
function countVowelsConsonants(str) {
    let vowels = str.match(/[aeiouAEIOU]/g)?.length || 0;
    let consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
    return { vowels, consonants };
}
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(countVowelsConsonants(sentence));