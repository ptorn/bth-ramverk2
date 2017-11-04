import React from 'react';
import { Link } from 'react-router-dom';

const NavReports = () => {
    return (
        <div className="navbar-reports">
            <Link to="/report/kmom01">Kmom01 | </Link>
            <Link to="/report/kmom02">Kmom02 | </Link>
            <Link to="/report/kmom03">Kmom03 | </Link>
            <Link to="/report/kmom04">Kmom04 | </Link>
            <Link to="/report/kmom05">Kmom05 | </Link>
            <Link to="/report/kmom06">Kmom06 | </Link>
            <Link to="/report/kmom10">Kmom10 </Link>
        </div>
    );
};

export default NavReports;
