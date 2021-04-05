const database = (state = [], action) => {

    switch (action.type) {

        case 'SET_DATA':
            const database = action.payload;
            return database;

        case 'SELECTED_STUDENT':
            const selectedStudent = action.payload;
            const deselectedStudents = state.map(student => {
                if (student.name !== selectedStudent) {
                    student.isActive = false;
                    return student;
                } else {
                    student.isActive = true;
                    return student;
                }
            });
            return deselectedStudents;

        case 'TOGGLE_STUDENT':
            const { value } = action.payload;
            const foundStudent = state.find(student => student.name === value);
            foundStudent.isActive = !foundStudent.isActive;
            const newState = state.map(student => {
                if (student.name !== value) {
                    return student;
                } else {
                    return foundStudent;
                }
            });
            return newState;

        case 'RESET_DATA':
            const resetState = state.map(student => {
                student.isActive = true;
                return student;
            });
            return resetState;

        default:
            return state;
    }

}

export default database;