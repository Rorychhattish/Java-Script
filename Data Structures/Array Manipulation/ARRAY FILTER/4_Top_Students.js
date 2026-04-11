// Goal: Filter the Top Students
// Find students whose score is at least 90.
// const students = [
//     { name: 'David', grade: 90 }, 
//     { name: 'Daisy', grade: 100 },
//     { name: 'Darcie', grade: 80 }
// ];
// const a = topStudents(students);
// console.log(a); 
// /*
// *  [
// *    { name: 'David', grade: 90 }, 
// *    { name: 'Daisy', grade: 100 }
// *  ]
// */



function topStudents(array) {
    return array.filter((student) => {
        return student.grade >= 90;
    });
}

module.exports = topStudents;