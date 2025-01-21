import React, { useContext,useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";


import "./NavBar.css";

export default function NavBar() {
    const { isLoggedIn, logout } =  useContext(AuthContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        logout(); // Update context state
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top nav-underline bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <b>Resume</b>
                </Link>
                <button className="navbar-toggler navbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isExpanded}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}>
                <i className="fa-solid fa-bars"></i></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === "/portfolios" ? "active" : ""}`}
                                to="/portfolios"
                            >
                                Portfolio's
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    location.pathname === "/author-portfolio" ? "active" : ""
                                }`}
                                to="/author-portfolio"
                            >
                                Author's Portfolio
                            </Link>
                        </li>
                        {isLoggedIn ? (
                            <>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    location.pathname === "/your-portfolio" ? "active" : ""
                                }`}
                                to="/your-portfolio"
                            >
                                Your Portfolio
                            </Link>
                        </li>
                        </>
                        ):(
                            <></>
                        )}
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {!isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${
                                            location.pathname === "/signup" ? "active" : ""
                                        }`}
                                        to="/signup"
                                    >
                                        <b>Sign Up</b>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${
                                            location.pathname === "/login" ? "active" : ""
                                        }`}
                                        to="/login"
                                    >
                                        <b>Login</b>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <button
                                    className="nav-link btn btn-link"
                                    onClick={handleLogout}
                                    style={{ textDecoration: "none" }}
                                >
                                    <i className="fa-solid fa-user"></i>&nbsp;<b>Logout</b>
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
