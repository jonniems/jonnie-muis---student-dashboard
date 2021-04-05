import React, { useState } from 'react';
import { VictoryBar, VictoryLine, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel } from 'victory'
import studentTheme from '../../functions/studentTheme'

const Victory = ({ data }) => {

    let [diffiSwitch, setDiffiSwitch] = useState(true);
    let [satisSwitch, setSatisSwitch] = useState(true);
    let [chartSwitch, setChartSwitch] = useState(true);

    const handleDiffiClick = () => setDiffiSwitch(!diffiSwitch);
    const handleSatisClick = () => setSatisSwitch(!satisSwitch);
    const handleChartClick = () => setChartSwitch(!chartSwitch);

    const tempDiffiNums = data.diffiNums;
    const tempSatisNums = data.satisNums
    const tempLabels = data.labels

    const chartData = []

    for (let i = 0; i < tempLabels.length; i++) {
        chartData[i] = {
            labels: tempLabels[i],
            diffiNums: tempDiffiNums[i],
            satisNums: tempSatisNums[i]
        }
    }

    return (
        <div className='victory-container'>
            <div className="victory-buttons">
                <button
                    className={diffiSwitch ? 'diffiSwitch' : ""}
                    onClick={() => handleDiffiClick()}
                >
                    Difficulty Score{' '}
                    {diffiSwitch ? <span>on</span> : <span>off</span>}
                </button>
                <button
                    className={satisSwitch ? 'satisSwitch' : ""}
                    onClick={() => handleSatisClick()}
                >
                    Enjoyment Score{' '}
                    {satisSwitch ? <span>on</span> : <span>off</span>}
                </button>
                <button
                    className={chartSwitch ? 'chartSwitch' : ""}
                    onClick={() => handleChartClick()}
                >
                    {chartSwitch ? <span>Bar</span> : <span>Line</span>} Chart
                </button>
            </div>
            
            {chartSwitch ? (
                <VictoryChart
                    domainPadding={{ x: 10 }}
                    theme={studentTheme}
                >
                    <VictoryGroup offset={5}>
                        {diffiSwitch ? (
                            <VictoryBar
                                data={chartData}
                                x="labels"
                                y="diffiNums"
                                alignment='middle'
                                color="#900C3F"
                            />
                        ) : null}
                        {satisSwitch ? (
                            <VictoryBar
                                data={chartData}
                                x="labels"
                                y="satisNums"
                                alignment='middle'
                                color="#FFC300"
                            />
                        ) : null}
                    </VictoryGroup>
                    <VictoryAxis
                        tickFormat={tempLabels}
                        tickLabelComponent={
                            <VictoryLabel angle={70} textAnchor='start'/>
                        }
                    />
                    <VictoryAxis
                        dependentAxis
                        tickValues={[1, 2, 3, 4, 5]}
                    />
                </VictoryChart>
            ) : (
                <VictoryChart
                    domainPadding={{ x: 10 }}
                    theme={studentTheme}
                >
                    <VictoryGroup offset={5}>
                        {diffiSwitch ? (
                            <VictoryLine
                                data={chartData}
                                x="labels"
                                y="diffiNums"
                                color="#900C3F"                                
                            />
                        ) : null}
                        {satisSwitch ? (
                            <VictoryLine
                                data={chartData}
                                x="labels"
                                y="satisNums"
                                color="#FFC300"
                            />
                        ) : null}
                    </VictoryGroup>
                    <VictoryAxis
                        tickFormat={tempLabels}
                        tickLabelComponent={
                            <VictoryLabel angle={70} textAnchor='start'/>
                        }
                    />
                    <VictoryAxis
                        dependentAxis
                        tickValues={[1, 2, 3, 4, 5]}
                    />
                </VictoryChart>
                )}
        </div>
    );
}

export default Victory;