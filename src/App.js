import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import RegisterStudent from './Components/RegisterStudent/RegisterStudent';
import MarkAttendance from './Components/MarkAttendance/MarkAttendance';
import AttendanceReport from './Components/AttendanceReport/AttendanceReport';



function App() {
    return (
        <Router>
            <div className="App">
                <Layout />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/register" element={<RegisterStudent />} />
                    <Route path="/mark" element={<MarkAttendance />} />
                    <Route path="/report" element={<AttendanceReport />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
