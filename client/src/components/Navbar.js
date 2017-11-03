import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="row-fluid">
                <div className="top-navbar">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Peder Tornberg - Ramverk2</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item">
                                    <Link to="/"
                                        title="Start"
                                        className="nav-link"
                                    >
                                        <i className="fa fa-home"></i> Start
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about"
                                        title="Om"
                                        className="nav-link"
                                    >
                                        <i className="fa fa-question-circle"></i> About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/report"
                                        title="Om"
                                        className="nav-link"
                                    >
                                        <i className="fa fa-file-text"></i> Report
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;