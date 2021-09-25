import React from 'react';
import logo from '../../images/Logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://dugilan-udaysarkarud.netlify.app">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://dugilan-udaysarkarud.netlify.app">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="https://dugilan-udaysarkarud.netlify.app" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="https://dugilan-udaysarkarud.netlify.app">Action</a></li>
                                <li><a className="dropdown-item" href="https://dugilan-udaysarkarud.netlify.app">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="https://dugilan-udaysarkarud.netlify.app">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://dugilan-udaysarkarud.netlify.app">Doc</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-primary">Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;