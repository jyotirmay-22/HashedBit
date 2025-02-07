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