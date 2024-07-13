import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Attendance Management System</h1>
            {/* Navigation Menu */}
            <div className="nav">
                <button onClick={() => navigate('/dashboard')}>Dashboard</button>
                <button onClick={() => navigate('/register')}>Register Student</button>
                <button onClick={() => navigate('/mark')}>Mark Attendance</button>
                <button onClick={() => navigate('/report')}>Attendance Report</button>
            </div>
        </div>
    );
}

export default Layout;
