import React, { useState, useEffect } from 'react';
import Charts from '../charts/Charts';
import { useSelector } from 'react-redux';

const HomePage = () => {

    const [labels, setLabels] = useState([]);
    const [satisNums, setSatisNums] = useState([]);
    const [diffiNums, setDiffiNums] = useState([]);

    const getChartData = useSelector(state => state.chartData);

    const setChartData = () => {
        setLabels(getChartData.labels);
        setSatisNums(getChartData.satisScore);
        setDiffiNums(getChartData.diffiScore);
    }

    useEffect(() => {
        setChartData();
    });

    const data = { labels, satisNums, diffiNums };

    return (
        <Charts data={data} />
    );
}

export default HomePage;