import './AuthorPortfolio.css';
import logo from "../assets/Logo.jpg"

export default function AuthorPortfolio() {
    return (
        <div className="container">
            <div className="container1">
                <div className="leftPanel">
                    <div>
                        <img src={logo} alt="Profile" className="image holographic-card" />
                    </div>
                    <div>
                        <button
                            className="nav-link hover-underline"
                            onClick={(event) => {
                                const hovering = document.getElementById('contact');
                                hovering.scrollIntoView({ behavior: 'smooth' });
                                hovering.classList.add('changebackground');
                                const button = event.target;

                                button.classList.add('button-click-effect'); // Add the class

                                setTimeout(() => {
                                    button.classList.remove('button-click-effect'); // Remove the class after 1 second
                                }, 1000); 
                                // Optional: Remove the class after a delay
                                setTimeout(() => {
                                    hovering.classList.remove('changebackground');
                                }, 1000); 
                            }
                            }
                        >
                            Contact
                        </button>
                        <br />
                        <button
                            className="nav-link hover-underline"
                            onClick={(event) => {
                                const hovering = document.getElementById('education');
                                hovering.scrollIntoView({ behavior: 'smooth' });
                                hovering.classList.add('changebackground');
                                const button = event.target;

                                button.classList.add('button-click-effect'); // Add the class

                                setTimeout(() => {
                                    button.classList.remove('button-click-effect'); // Remove the class after 1 second
                                }, 1000); 
                                // Optional: Remove the class after a delay
                                setTimeout(() => {
                                    hovering.classList.remove('changebackground');
                                }, 1000); 
                            }
                            }
                        >
                            Education
                        </button>
                        <br />
                        <button
                            className="nav-link hover-underline"
                            onClick={(event) => {
                                const hovering = document.getElementById('expertise');
                                hovering.scrollIntoView({ behavior: 'smooth' });
                                hovering.classList.add('changebackground');
                                const button = event.target;

                                button.classList.add('button-click-effect'); // Add the class

                                setTimeout(() => {
                                    button.classList.remove('button-click-effect'); // Remove the class after 1 second
                                }, 1000); 
                                // Optional: Remove the class after a delay
                                setTimeout(() => {
                                    hovering.classList.remove('changebackground');
                                }, 1000); 
                            }
                            }
                        >
                            Expertise
                        </button>
                        <br />
                        <button
                            className="nav-link hover-underline"
                            onClick={(event) => {
                                const hovering = document.getElementById('interest');
                                hovering.scrollIntoView({ behavior: 'smooth' });
                                hovering.classList.add('changebackground');
                                const button = event.target;

                                button.classList.add('button-click-effect'); // Add the class

                                setTimeout(() => {
                                    button.classList.remove('button-click-effect'); // Remove the class after 1 second
                                }, 1000); 
                                // Optional: Remove the class after a delay
                                setTimeout(() => {
                                    hovering.classList.remove('changebackground');
                                }, 1000);
                            }
                            }
                        >
                            Interest
                        </button>
                        <br />
                        <button
                            className="nav-link hover-underline"
                            onClick={(event) => {
                                const hovering = document.getElementById('language');
                                hovering.scrollIntoView({ behavior: 'smooth' });
                                hovering.classList.add('changebackground');
                                const button = event.target;

                                button.classList.add('button-click-effect'); // Add the class

                                setTimeout(() => {
                                    button.classList.remove('button-click-effect'); // Remove the class after 1 second
                                }, 1000); 
                                // Optional: Remove the class after a delay
                                setTimeout(() => {
                                    hovering.classList.remove('changebackground');
                                }, 5000); // Adjust the timeout as needed// Set the desired background color
                            }}
                        >
                            Language
                        </button>
                    </div>
                </div>
                <div className="rightPanel">
                    <div>
                        <h2>Younus</h2>
                        <h5>FullStack Developer</h5>
                    </div>
                    <div className="hoverstyle">
                        <h6>Description</h6>
                        <p className="des">
                            As a passionate fullstack developer, I have experience building dynamic and responsive web
                            applications from front to back. I am proficient in HTML, CSS, JavaScript, and React.js for
                            creating user-friendly interfaces and the backend to make it fully functional and usable.
                        </p>
                    </div>
                    <hr />
                    <div  id="contact" className="hoverstyle">
                        <h6 >Contact Info</h6>
                        <ul>
                            <li><strong>Gmail:</strong> sayeedataj37@gmail.com</li>
                            <li><strong>Phone:</strong> 8123412145</li>
                        </ul>
                    </div>
                    <hr />
                    <div id="education" className="hoverstyle">
                        <h6 >Education Info</h6>
                        <ul>
                            <li><strong>PUC:</strong> Sacred Heart PU College</li>
                            <li><strong>Course:</strong> CEBA</li>
                            <li><strong>Degree:</strong> St. Francis College</li>
                            <li><strong>Course:</strong> BCA</li>
                        </ul>
                    </div>
                    <hr />
                    <div id="expertise" className="hoverstyle">
                        <h6 >Skills and Expertise</h6>
                        <ul>
                            <li>
                                <strong>Frontend Development:</strong>
                                <ul>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Responsive Design (Bootstrap, CSS Grid, Flexbox)</li>
                                    <li>Version Control (Git, GitHub)</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Backend Development:</strong>
                                <ul>
                                    <li>Node.js & Express.js</li>
                                    <li>SQL Databases (MySQL, PostgreSQL)</li>
                                    <li>API Development (RESTful APIs)</li>
                                    <li>Authentication & Authorization (JWT, OAuth)</li>
                                    <li>Database Management (Design, Queries, Optimization)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div id="interest" className="hoverstyle">
                        <h6 >Interests</h6>
                        <ul>
                            <li>Chess</li>
                            <li>Cricket</li>
                            <li>Online games</li>
                        </ul>
                    </div>
                    <hr />
                    <div id="language" className="hoverstyle">
                        <h6>Languages Known</h6>
                        <ul>
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Kannada</li>
                        </ul>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}
