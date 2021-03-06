import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="row-fluid">
                <div className="top-navbar">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">Peder Tornberg - Ramverk2</Link>
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
                                        <i className="fa fa-question-circle"></i> Om
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/chat"
                                        title="Chat"
                                        className="nav-link"
                                    >
                                        <i className="fa fa-comments"></i> Chatt
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/crud"
                                        title="CRUD"
                                        className="nav-link"
                                    >
                                        <i className="fa fa-database"></i> CRUD
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/gomoku"
                                        title="Gomoku"
                                        className="nav-link"
                                    >
                                        <i className="fa fa-comments"></i> Gomoku
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/reports"
                                        title="Om"
                                        className="nav-link"
                                    >
                                        <i className="fa fa-file-text"></i> Redovisning
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
