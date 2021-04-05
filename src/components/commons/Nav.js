import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectStudent, resetData, resetStudentBio, toggleStudent, updateChart, updateAssignmentChart, showStudentBio } from '../../actions';

const Nav = () => {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const [menuItems, setMenuItems] = useState([]);

    const studentNames = useSelector(state => state.studentNames);
    const database = useSelector(state => state.database);

    useEffect(() => {
        setMenuItems(studentNames);
        return () => {
            history.push('/');
        }
    }, [history, studentNames]);

    let currentPage = location.pathname.split('/')[1];

    const studentIsChecked = name => {
        const foundStudent = database.find(student => student.name === name);
        return foundStudent.isActive;
    };

    return (
        <nav>
            <ul>
                {menuItems.map(student => {
                    return (
                        <li
                            key={student.id}>
                            <label className="studentname-container">
                                <input
                                    type="checkbox"
                                    name="studentname"
                                    checked={studentIsChecked(student.firstName)}
                                    onChange={(event) => {
                                        dispatch(toggleStudent(event.target))
                                        if (currentPage === 'AssignmentPage') {
                                            dispatch(updateAssignmentChart(database))
                                        } else {
                                            dispatch(updateChart(database))
                                        }
                                    }}
                                    value={student.firstName}>
                                </input>
                                <span className='checkmark'></span>
                                <Link to={`/StudentPage/${student.firstName}`}
                                    id={student.id}
                                    name={student.firstName}
                                    onClick={(event) => {
                                        dispatch(selectStudent(event.target.name))
                                        dispatch(showStudentBio(student))
                                        dispatch(updateChart(database))
                                    }}>
                                    {student.firstName}
                                </Link>
                            </label>
                        </li>
                    )
                })}
            </ul>

            <Link to='/'>
                <button
                    onClick={() => {
                        dispatch(resetData())
                        dispatch(updateChart(database))
                        dispatch(resetStudentBio())
                    }}>
                    Reset
                </button>
            </Link>

        </nav>
    );
}

export default Nav;
