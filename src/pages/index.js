import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/index.css";

const IndexPage = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skilsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState("");

    const scrollToSection = (section) => {
        if (section === "home") homeRef.current.scrollIntoView({ behavior: "smooth" });
        if (section === "about") aboutRef.current.scrollIntoView({ behavior: "smooth" });
        if (section === "projects") projectsRef.current.scrollIntoView({ behavior: "smooth" });
        if (section === "contact") contactRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Submitting...");

        setTimeout(() => {
            setFormStatus("Thank you for your message! I will get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} />
            <div className="page-container">

                {/* Home Section */}
                <section ref={homeRef} id="home">
                    <p className="intro-hello">Hello! 👋</p>
                    <p className="intro-text">I'm <strong>Muhammed Furkan Yener, </strong>a Computer Engineer
                        specialized in React and JavaScript, and I create innovative web solutions focused on user
                        experience and dynamic technologies.</p>
                    <p className="intro-contact">Get in touch <strong>👉</strong> m.furkanyener@gmail.com</p>
                </section>

                {/* About Section */}
                <section ref={aboutRef} id="about">
                    <h1>About Me</h1>
                    <p className="about">I am an experienced, disciplined, and open-minded professional with a
                        background in technology
                        projects and
                        social responsibility. I gained significant leadership experience as the leader of the corporate
                        relations committee
                        on the ‘Öğrencilerin Sesi’ Platform. During my internship at Controlix, I had the opportunity to
                        acquire in-depth
                        knowledge of IoT projects, including embedded systems, LORA networks, and commercial satellite
                        projects.
                        To better understand human behavior and social dynamics, I am currently pursuing a bachelor’s
                        degree in Sociology
                        (Open Education). My education in Sociology strengthened my communication skills in project
                        management,
                        enabling me to collaborate effectively with different stakeholders. I served as a reserve
                        officer in the Public
                        Relations Department of the Ministry of National Defense. During this time, I had the
                        opportunity to develop my
                        skills in strategic communication, defense industry, and military public relations. My
                        experience at the Ministry of
                        National Defense also enhanced my crisis management and strategic communication abilities. I
                        gained significant
                        experience in bridging the gap between the public and private sectors.
                        I have also been working to develop myself in deep learning, blockchain (Web3), and data
                        science. Additionally, I
                        have gained experience in frontend development, particularly with JavaScript and React. I have
                        in-depth knowledge
                        of building dynamic and interactive user interfaces using React, and I have increased
                        development efficiency by
                        embracing a component-based architecture. I want to continue my career as a Frontend Developer,
                        and I make it a
                        point to regularly upload the projects I work on to my GitHub account to showcase my growth in
                        this area.
                        A reference letter is provided on the following pages.</p>
                </section>

                <section ref={skilsRef} id="skils">
                    <h1>Skils</h1>

                    <div className="wrapper">
                        <div className="headings">
                            <h3>Languages</h3>
                            <h3>Frameworks</h3>
                            <h3>Tools</h3>
                        </div>

                        <div className="content">
                            <ul className="list">
                                <li>JavaScript (ES6)</li>
                                <li>Typescript</li>
                                <li>HTML</li>
                                <li>CSS/Sass</li>
                                <li>C</li>
                                <li>C#</li>
                                <li>C++</li>
                                <li>Assembly</li>
                            </ul>

                            <ul className="list">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>.Net</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section ref={projectsRef} id="projects">
                    <h1>Projects</h1>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ul>
                </section>

                {/* Contact Section */}
                <section ref={contactRef} id="contact">
                    <h1>Contact Me</h1>
                    <p>You can reach me at: <strong>m.furkanyene@gmail.com</strong></p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                               required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                               required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                  required />

                        <button type="submit">Send Message</button>
                        {formStatus && <p>{formStatus}</p>}
                    </form>
                </section>

            </div>
            <footer>
                Copyright © 2025 - mfurkanyener
            </footer>
        </>
    );
};

export default IndexPage;