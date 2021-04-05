import React from 'react';
import Charts from '../charts/Charts';
import { useSelector } from 'react-redux';

const StudentPage = () => {

    const getChartData = useSelector(state => state.chartData);
    const labels = getChartData.labels;
    const satisNums = getChartData.satisScore;
    const diffiNums = getChartData.diffiScore;

    const data = { labels, satisNums, diffiNums };

    return (
        <Charts data={data} />
    );
}

export default StudentPage;
