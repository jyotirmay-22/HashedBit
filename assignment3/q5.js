// Q5: Replace wrong word with correct word
function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(`\\b${wrong}\\b`, 'g'), correct);
}
console.log(correctfn("I love Javasript", "Javasript", "JavaScript"));
