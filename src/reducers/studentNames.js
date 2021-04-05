import personalData from '../databases/personalData';
import resultsData from '../databases/resultsData';

const results = resultsData.reduce((groups, item) => ({
    ...groups,
    [item.firstName]: [...(groups[item.firstName] || []), item]
}), {});

const studentPersonal = personalData;
const resultsPersonal = Object.entries(results);

const studentsData = [];

for (let i = 0; i < resultsPersonal.length; i++) {
    let student = studentPersonal[i];
    student.firstName = resultsPersonal[i][0];
    student.results = resultsPersonal[i][1];
    studentsData.push(student);
}

const studentNames = (state = studentsData, action) => {

    switch (action.type) {

        case 'SET_STUDENTS':
            const students = action.payload;
            return students;

        default:
            return state;
    }

}

export default studentNames ;