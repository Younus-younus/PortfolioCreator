import React, { useState } from 'react';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';
import './Login.css';
const API_BASE_URL = import.meta.env.API_BASE_URL || "http://localhost:5001";
export default function Login() {
    const { login } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Toggle the visibility of the password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                login(data.token); // Update login state
                window.location.href = "/"; // Redirect to home
            } else {
                alert("Login failed: " + data.message);
            }
        } catch (error) {
            console.error("Error connecting to backend:", error);
        }
    };


    return (
        <div className="loginForm offset-4 mt-4">
            <form className="mx-3 forms" onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputUser1" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputUser1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn hide-show"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                        </button>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <p>Don't have Account <i><Link to="signin"><u>signup</u></Link></i></p>
                </div>
            </form>
        </div>
    );
}
