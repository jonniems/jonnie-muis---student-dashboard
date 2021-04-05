import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAssignmentChartData, resetData } from '../../actions';
import getStudentRatings from '../../functions/getStudentRatings';
import getAverage from '../../functions/getAverage';

const Table = ({ labels, diffiNums, satisNums }) => {

    const dispatch = useDispatch();
    const location = useLocation();

    let currentPage = location.pathname.split('/')[1];

    const tableData = () => {
        const rows = [];
        labels.forEach(label => {
            const index = labels.indexOf(label);
            let averageDiff = diffiNums[index];
            let averageSatis = satisNums[index];
            let overallScore = getAverage([averageDiff, averageSatis]);
            if (!overallScore) {
                overallScore = '-';
            }
            if (!averageDiff) {
                averageDiff = '-';
            }
            if (!averageSatis) {
                averageSatis = '-';
            }
            const columns = {
                title: label,
                diffiNum: averageDiff,
                satisNum: averageSatis,
                overallScore,
                id: index
            };
            rows.push(columns);
        });
        return rows;
    };

    const database = useSelector(state => state.database);
    
    const handleClick = (assignment) => {
        const selectedAssignment = { assignment };
        const metrics = ['satisScore', 'diffiScore'];
        metrics.forEach(metric => {
            const ratings = getStudentRatings(database, assignment, metric);
            selectedAssignment[metric] = ratings;
        });
        dispatch(setAssignmentChartData(selectedAssignment));
    };

    return (
        <div className='table-scrollbar table-wrapper-scroll-y'>
            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Difficulty Score:</th>
                        <th scope="col">Enjoyment Score:</th>
                        <th scope="col">Overall Score:</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData().map(row => {
                        if (currentPage !== 'AssignmentPage') {
                            return (
                                <tr key={row.id}>
                                    <th scope="row"
                                        onClick={() => {
                                            dispatch(resetData())
                                            handleClick(row.title)
                                    }}>
                                        <Link to={`/AssignmentPage/${row.title}`}>
                                            {row.title}
                                        </Link>
                                    </th>
                                    <td>{row.diffiNum}</td>
                                    <td>{row.satisNum}</td>
                                    <td>{row.overallScore}</td>
                                </tr>
                            )
                        } else {
                            return (
                                <tr key={row.id}>
                                    <th scope="row">{row.title}</th>
                                    <td>{row.diffiNum}</td>
                                    <td>{row.satisNum}</td>
                                    <td>{row.overallScore}</td>
                                </tr>
                            )
                        }

                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;