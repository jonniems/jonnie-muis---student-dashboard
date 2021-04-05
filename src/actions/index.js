export const setDatabase = (studentData) => {
    return {
        type: 'SET_DATA',
        payload: studentData,
    }
}

export const setStudents = (students) => {
    return {
        type: 'SET_STUDENTS',
        payload: students,
    }
}

export const setChartData = (dataArray) => {
    return {
        type: 'SET_CHART_DATA',
        payload: dataArray,
    }
}

export const setAssignmentChartData = (dataArray) => {
    return {
        type: 'SET_ASSIGNMENT_CHART_DATA',
        payload: dataArray,
    }
}

export const updateChart = (database) => {
    return {
        type: 'UPDATE_CHART',
        payload: database,
    }
}

export const updateAssignmentChart = (database) => {
    return {
        type: 'UPDATE_ASSIGNMENT_CHART',
        payload: database,
    }
}

export const selectStudent = (studentName) => {
    return {
        type: 'SELECTED_STUDENT',
        payload: studentName,
    }
}

export const toggleStudent = (student) => {
    return {
        type: 'TOGGLE_STUDENT',
        payload: student,
    }
}

export const sortChart = (param) => {
    return {
        type: 'SORT_CHART',
        payload: param,
    }
}

export const sortAssignmentChart = (param) => {
    return {
        type: 'SORT_ASSIGNMENT_CHART',
        payload: param,
    }
}

export const resetData = () => {
    return {
        type: 'RESET_DATA'
    }
}

export const showStudentBio = (selectedStudent) => {
    return {
        type: 'SET_BIO',
        payload: selectedStudent,
    }
}

export const resetStudentBio = () => {
    return {
        type: 'RESET_BIO',
    }
}
