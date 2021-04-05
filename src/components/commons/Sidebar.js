import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sortChart, sortAssignmentChart } from '../../actions';

const Sidebar = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    let currentPage = location.pathname.split('/')[1];

    const handleClick = (metric) => {
        if (currentPage === 'AssignmentPage') {
            dispatch(sortAssignmentChart(metric))
        } else {
            dispatch(sortChart(metric))
        }
    };

    let [diffiSort, setDiffiSort] = useState(true);
    let [satisSort, setSatisSort] = useState(true);
    let [nameSort, setNameSort] = useState(true);

    const handleDiffiClick = () => setDiffiSort(!diffiSort);
    const handleSatisClick = () => setSatisSort(!satisSort);
    const handleNameClick = () => setNameSort(!nameSort);

    const student = useSelector(state => state.studentBio);

    return (
        <aside>
            <div className='sort-menu'>
                <h3>Sort By:</h3>
                <ul>
                    <li
                        onClick={() => { 
                            handleClick('diffiScore') 
                            handleDiffiClick()
                        }}>
                        {diffiSort ? <i className="fas fa-sort-amount-down-alt"></i> : <i className="fas fa-sort-amount-up-alt"></i>}
                         Difficulty Score
                    </li>
                    <li
                        onClick={() => { 
                            handleClick('satisScore') 
                            handleSatisClick()
                        }}>
                        {satisSort ? <i className="fas fa-sort-amount-down-alt"></i> : <i className="fas fa-sort-amount-up-alt"></i>}
                         Enjoyment Score
                    </li>
                    <li onClick={() => { 
                            handleClick('label') 
                            handleNameClick()
                        }}>
                        {nameSort ? <i className="fas fa-sort-alpha-down"></i> : <i className="fas fa-sort-alpha-up"></i>}
                        Assignment Name
                    </li>

                </ul>
            </div>
            <div className='student-bio'>
                <img
                    src={student.imgUrl}
                    alt="Student">
                </img>
                <h3>{student.firstName} {student.lastName} ({student.age})</h3>
                <p>{student.emailAddress}</p>
                <p>{student.phoneNumber}</p>
            </div>
        </aside>
    );
}

export default Sidebar;