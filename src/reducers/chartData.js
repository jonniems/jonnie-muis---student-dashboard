import getStudentRatings from '../functions/getStudentRatings';
import getAverage from '../functions/getAverage';
import sorter from '../functions/sorter';

const defaultState = {
    labels: [],
    diffiScore: [],
    satisScore: [],
    sortDirection: true,
}

const chartData = (state = defaultState, action) => {

    switch (action.type) {

        case 'SET_CHART_DATA':
            const data = action.payload;
            return { ...state, ...data };

        case 'SORT_CHART':
            const param = action.payload;
            const sortedState = sorter(param, state);
            return sortedState;

        case 'UPDATE_CHART':
            const database = action.payload;
            let prevState = state;
            const metrics = ['diffiScore', 'satisScore'];
            metrics.forEach(metric => {
                const updatedScores = [];
                state.labels.forEach(assignment => {
                    const averageScore = getAverage(getStudentRatings(database, assignment, metric));
                    updatedScores.push(averageScore);
                });
                prevState = { ...prevState, [metric]: updatedScores };
            });
            return prevState;

        default:
            return state;
    }

}

export default chartData;