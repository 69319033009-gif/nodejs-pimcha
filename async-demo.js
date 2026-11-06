// async-demo.js (CommonJS: ใช้ await ได้เฉพาะในฟังก์ชัน async)
const students = [
{ id: 1, name: 'สมชาย' },
{ id: 2, name: 'สมหญิง' },
];
const gradeTable = { 1: ['A', 'B+'], 2: ['B', 'A'] };

async function getStudentGrades(studentId) {
    try {
        const student = students.find(s => s.id === studentId);
        if (!student) {
            throw new Error('Student not found');
        }

        const grades = gradeTable[studentId];
        if (!grades) {
            throw new Error('Grades not found for student');
        }

        return grades;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
getStudentGrades(1)
    .then(grades => {
        console.log('Grades', grades);
    })
    .catch(error => {
        console.error('Error fetching grades:', error);
    });
    