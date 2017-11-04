import React from 'react';
import { Link } from 'react-router-dom';

const NavReports = () => {
    return (
        <div className="navbar-reports mt-20">
            <Link to="/reports/kmom01">Kmom01 | </Link>
            <Link to="/reports/kmom02">Kmom02 | </Link>
            <Link to="/reports/kmom03">Kmom03 | </Link>
            <Link to="/reports/kmom04">Kmom04 | </Link>
            <Link to="/reports/kmom05">Kmom05 | </Link>
            <Link to="/reports/kmom06">Kmom06 | </Link>
            <Link to="/reports/kmom10">Kmom10 </Link>
        </div>
    );
};

export default NavReports;
