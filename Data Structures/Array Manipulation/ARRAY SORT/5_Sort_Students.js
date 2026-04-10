// Goal: Sort Students
// Given an array of students, sort first by graduated then by grade like in the example above.
// Each object in the students array will have properties id, graduated and grade just like in the example shown above.
//  For debugging purposes, the tests will log your actual results versus the expected test results.



function sortStudents(students) {
    return students.sort((a, b) => {
        // Rule 1: Students who Graduated (True should come first)
        if (a.graduated !== b.graduated) {
            // true (1) lai false (0) bhanda pahila rakhna b - a logic use garne
            return b.graduated - a.graduated;
        }
        // Rule 2: Highest Grades (Descending order)
        // Yedi dubai graduated xan vane, thulo grade mathi rakhne
        return b.grade - a.grade;
    });
}

module.exports = sortStudents;