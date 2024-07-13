import React from 'react';
import './Dashboard.css';

const Dashboard = ({ totalStudents, totalClasses, totalAttendanceRecords }) => {
    return (
        <div id="dashboard" className="section">
            <h2>Dashboard</h2>
            <div className="dashboard-cards">
                <div className="card">
                    <h3>Total Students</h3>
                    <p id="totalStudents">{totalStudents}</p>
                </div><br></br>
                <div className="card">
                    <h3>Total Classes</h3>
                    <p id="totalClasses">{totalClasses}</p>
                </div><br></br>
                <div className="card">
                    <h3>Total Attendance Records</h3>
                    <p id="totalAttendanceRecords">{totalAttendanceRecords}</p>
                </div>
            </div>
        </div>
    );
}



export default Dashboard;