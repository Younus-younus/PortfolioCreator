import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";  // Import useParams
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";
import MyLoader from "./MyLoader";

export default function UpdatePortfolio() {
    const { isLoggedIn } = useContext(AuthContext);
    const { id } = useParams();  // Access the ID from the URL

    const [formData, setFormData] = useState({
        name: "",
        describeYou: "",
        description: "",
        contact: "",
        gmail: "",
        address: "",
        institute: "",
        course: "",
        skill: "",
        interest: "",
        language: "",
        image: null,
    });

    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const token = localStorage.getItem("authToken");
                const response = await fetch(`${API_BASE_URL}/api/resumes/portfolio/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    //setFormData(data);
                    setFormData({
                        name: data.name || "",
                        describeYou: data.describeYou || "",
                        description: data.description || "",
                        contact: data.contact || "",
                        gmail: data.gmail || "",
                        address: data.address || "",
                        institute: data.institute || "",
                        course: data.course || "",
                        skill: data.skill || "",
                        interest: data.interest || "",
                        language: data.language || "",
                        image: null, // Keep image as null, handle separately
                    });
                } else {
                    console.error("Failed to fetch portfolio data:", response.statusText);
                    // Consider redirecting to a "not found" page
                }
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolioData();
    }, [id]); // useEffect runs when the ID changes

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        // Only append the image if a new image is selected
        if (formData.image) {
            data.append("image", formData.image);
        }

        Object.keys(formData).forEach((key) => {
            if (key !== "image") {
                data.append(key, formData[key]);
            }
        });

        try {
            const token = localStorage.getItem("authToken");
            const response = await fetch(`${API_BASE_URL}/api/resumes/update-portfolio/${id}`, {  // Use PUT and the ID
                method: "PUT",
                body: data,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                console.log("Portfolio updated successfully!");
                window.location.href = "/"; // Redirect to home
            } else {
                const errorData = await response.json();
                console.error("Failed to update portfolio:", errorData.message || response.statusText);
                window.location.href = "/"; // Redirect to home
            }
        } catch (error) {
            console.error("Error updating form:", error);
            window.location.href = "/"; // Redirect to home
        }
    };

    if (loading) return <><MyLoader></MyLoader></>;


    return isLoggedIn ? (
        <>
            <div className="offset-2">
                <form
                    method="PUT" // Keep the method attribute, but it will be overridden by fetch
                    className="row g-3 needs-validation mx-2 mt-2"
                    noValidate
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                >
                    <h5>Your Details</h5>
                    <div className="col-md-2 position-relative">
                        <label htmlFor="fullName" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="name"
                            required
                            aria-describedby="nameHelp"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div className="valid-tooltip">Looks good!</div>
                    </div>
                    <div className="col-md-4 position-relative">
                        <label htmlFor="description" className="form-label">
                            What Describes You?
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="describeYou"
                            placeholder="e.g., FullStack Developer"
                            value={formData.describeYou}
                            onChange={handleChange}
                            required
                        />
                        <div className="valid-tooltip">Looks good!</div>
                    </div>

                    <div className="col-md-8 position-relative">
                        <label htmlFor="shortDescription" className="form-label">
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            id="shortDescription"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            aria-describedby="descriptionHelp"
                        ></textarea>
                        <div className="invalid-tooltip">Please provide a short description.</div>
                    </div>

                    <div className="col-md-6 position-relative">
                        <br />
                        <label htmlFor="imageform" className="form-label">
                            Upload Image (Optional)
                        </label>
                        <input
                            className="form-control"
                            id="imageform"
                            name="image"
                            type="file"
                            onChange={handleChange}
                        />
                        <br />
                    </div>


                    {/* Contact Details */}
                    <div className="row">
                        <h5>Your Contact Details</h5>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="phoneNumber" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                                aria-describedby="phoneHelp"
                            />
                            <div className="invalid-tooltip">Please provide your contact details.</div>
                        </div>
                        <div className="col-md-5 position-relative">
                            <label htmlFor="email" className="form-label">
                                Gmail
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="gmail"
                                value={formData.gmail}
                                onChange={handleChange}
                                required
                                aria-describedby="emailHelp"
                            />
                            <div className="invalid-tooltip">Please provide your email address.</div>
                        </div>
                        <div className="col-md-6 position-relative">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <textarea
                                className="form-control"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                aria-describedby="addressHelp"
                            ></textarea>
                            <div className="invalid-tooltip">Please provide your current address.</div>
                        </div>
                    </div>

                    {/* Education Details */}
                    <div>
                        <h5>Your Education Details</h5>
                        <div className="col-md-3 position-relative">
                            <label htmlFor="institute" className="form-label">
                                Institute/University Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="institute"
                                name="institute"
                                value={formData.institute}
                                onChange={handleChange}
                                required
                                aria-describedby="instituteHelp"
                            />
                            <div className="invalid-tooltip">Please provide your institute/university name.</div>
                        </div>
                    </div>
                    <div className="col-md-3 position-relative">
                        <label htmlFor="course" className="form-label">
                            Course Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            aria-describedby="courseHelp"
                        />
                        <div className="invalid-tooltip">Please provide your course name.</div>
                        <br />
                        <br />
                    </div>

                    {/* Other Details */}
                    <div className="row">
                        <h5>Other Details</h5>
                        <div className="col-md-3 position-relative">
                            <label htmlFor="otherSkills" className="form-label">
                                Skills
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="otherSkills"
                                name="skill"
                                value={formData.skill}
                                onChange={handleChange}
                                placeholder="e.g., C++, Python"
                            />
                        </div>
                        <div className="col-md-3 position-relative">
                            <label htmlFor="interests" className="form-label">
                                Interests In?
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="interests"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                placeholder="e.g., Chess, Cricket"
                                required
                            />
                            <div className="invalid-tooltip">Please provide your interests.</div>
                        </div>
                        <div className="col-md-3 position-relative">
                            <label htmlFor="languages" className="form-label">
                                Languages Known?
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="languages"
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                placeholder="e.g., English, Spanish"
                                required
                            />
                            <div className="invalid-tooltip">Please provide the languages you know.</div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                        <br />
                        <button className="btn" style={{ backgroundColor: 'rgb(41, 43, 145)' }} type="submit">
                            Update Details
                        </button>
                        <br />
                        <br />
                    </div>
                </form>
            </div>
        </>
    ) : (
        <Navigate to="/login" />
    );
}