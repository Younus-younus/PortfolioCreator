import './HomePage.css';
import React, { useEffect, useState } from 'react';
import logo from "../assets/Logo.jpg"
import { Link } from 'react-router-dom';

export default function HomePage() {
    
    return (
        <>
            <div className="card text-center mx-5 my-3">
                <div className="card-header">
                <h5 className="card-title headtxt">Create A Portfolio For You</h5>
                </div>
                <div className="card-body">
                    <p className="card-text hmtxt">
                        Whether you're a student, a fresh graduate, or an experienced professional,<br />
                        a well-crafted portfolio helps you showcase your skills, achievements, and potential in a way that stands out.<br />
                        Take the first step by creating a portfolio that reflects the best version of yourself.
                    </p>
                    <Link to="/new-portfolio" className="btn btn-primary btn-flip"  data-back="Let's Go" data-front="Let's Create"></Link>
                </div>
            </div>

            <h5 className="mx-5">Portfolio</h5>
            <Link to="/author-portfolio">
                <div className="card mb-3 mx-5 lists " >
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img src={logo} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">Younus</h5>
                                <p className="card-text">
                                    FullStack Developer
                                </p>
                                <span>
                                    <i>View This</i>&nbsp; <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
