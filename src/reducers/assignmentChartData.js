import sorter from '../functions/sorter';

const defaultState = {
    assignment: '',
    labels: [],
    diffiScore: [],
    satisScore: [],
    sortDirection: true,
}

const assignmentChartData = (state = defaultState, action) => {

    switch (action.type) {

        case 'SET_ASSIGNMENT_CHART_DATA':
            const data = action.payload;
            return { ...state, ...data };

        case 'SORT_ASSIGNMENT_CHART':
            const param = action.payload;
            const sortedState = sorter(param, state);
            return {
                ...state,
                ...sortedState
            };

        case 'UPDATE_ASSIGNMENT_CHART':
            const database = action.payload;
            let newState = state;
            const metrics = ['diffiScore', 'satisScore'];
            metrics.forEach(metric => {
                const ratings = [];
                state.labels.forEach(studentName => {
                    const foundStudent = database.find(student => student.name === studentName);
                    if (foundStudent.isActive) {
                        const assignment = foundStudent.scores.find(ass => ass.title === state.assignment);
                        const metricScore = assignment[metric];
                        ratings.push(metricScore);
                    } else {
                        ratings.push('');
                    }
                });
                newState = { ...newState, [metric]: ratings };
            });
            return newState;

        default:
            return state;
    }
    
}

export default assignmentChartData;