import { combineReducers } from 'redux';
import database from './database';
import studentNames from './studentNames';
import studentBio from './studentBio';
import chartData from './chartData';
import assignmentChartData from './assignmentChartData';

const rootReducer = combineReducers({
    database,
    studentNames,
    studentBio,
    chartData,
    assignmentChartData
});

export default rootReducer;