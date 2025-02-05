// Q1: Remove states starting with vowels
const states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Assam"];
const filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates);

// Q2: Reverse words in a string
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr);

// Q3: Replace part of a string using splice
let arr = ['I', 'N', 'D', 'I', 'A'];
arr.splice(1, 4, 'NDONESIA');
console.log(arr.join(''));

// Q4: Count vowels and consonants in a string
function countVowelsConsonants(str) {
    let vowels = str.match(/[aeiouAEIOU]/g)?.length || 0;
    let consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
    return { vowels, consonants };
}
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(countVowelsConsonants(sentence));

// Q5: Replace wrong word with correct word
function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(`\\b${wrong}\\b`, 'g'), correct);
}
console.log(correctfn("I love Javasript", "Javasript", "JavaScript"));

// Q6: Filter numbers greater than 5
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let filteredArr = inputArr.filter(num => num > 5);
console.log(filteredArr);

// Q7: Calculate average scores using map and reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];
const studentAverages = students.map(student => {
    let avg = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return { name: student.name, average: avg };
});
console.log(studentAverages);

// Q8: Find repeated sum of digits until a single digit
function sumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}
console.log(sumOfDigits(456));

// Q9: Count the number of words in a paragraph
function wordCount(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
let paragraph = "This is a sample paragraph to test the word count function.";
console.log(wordCount(paragraph));

// Q10: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello"));

// Q11: Calculate student averages
const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};
const studentAveragesData = Object.keys(studentsData).map(student => {
    let scores = Object.values(studentsData[student]);
    let avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return { [student]: { average: avg } };
});
console.log(studentAveragesData);
