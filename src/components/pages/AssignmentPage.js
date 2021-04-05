import React from 'react';
import Charts from '../charts/Charts';
import { useSelector } from 'react-redux';

const AssignmentPage = () => {
    
    const getAssignmentData = useSelector(state => state.assignmentChartData);
    const labels = getAssignmentData.labels;
    const satisNums = getAssignmentData.satisScore;
    const diffiNums = getAssignmentData.diffiScore;

    const data = { labels, satisNums, diffiNums };

    return (
        <Charts data={data} />
    );
}

export default AssignmentPage;