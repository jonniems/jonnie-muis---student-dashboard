import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetData, resetStudentBio, updateChart } from '../../actions';

const Header = () => {

    const dispatch = useDispatch();
    const database = useSelector(state => state.database);

    return (
        <header>
            <Link to='/'>
                <img 
                    onClick={() => {
                        dispatch(resetData())
                        dispatch(updateChart(database))
                        dispatch(resetStudentBio())
                    }}
                    src="/img/winc-logos/header.png"
                    alt="Winc Academy Logo"
                />
            </Link>
        </header>
    );
}

export default Header;
