import React from 'react';
import Victory from './Victory';
import Table from './Table';

const Charts = ({ data }) => {

    return (
        <div className='charts-container'>
            <Victory data={data} />
            <Table labels={data.labels} diffiNums={data.diffiNums} satisNums={data.satisNums} />
        </div>
    );
}

export default Charts;