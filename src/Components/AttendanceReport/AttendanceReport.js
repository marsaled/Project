import React from 'react';
import './AttendanceReport.css';
const AttendanceReport = ({ viewReport }) => {
    return (
        <div id="report" className="section">
            <h2>Attendance Report</h2>
            <form onSubmit={viewReport}>
                <label htmlFor="reportDate">Select Date:</label><br></br>
                <input type="date" id="reportDate" name="reportDate" required /><br></br><br></br><hr></hr>
                <button  type="submit">View Report</button>
            </form>
            <div id="reportContent">
                {/* Report content will be displayed here */}
            </div>
        </div>
    );
}

export default AttendanceReport;
