// Q1: Remove states starting with vowels
const states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Assam"];
const filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates);