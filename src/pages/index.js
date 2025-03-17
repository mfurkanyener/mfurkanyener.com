import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { PageContainer, Section, Form, Input, Textarea, Button } from "../styles/StyledComponents";
import "../styles/index.css";
import myPhoto from "../image/myPhoto.jpg";

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
        if (section === "skils") skilsRef.current.scrollIntoView({ behavior: "smooth" });
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
            <PageContainer>
            <Navbar scrollToSection={scrollToSection} />
            <div className="page-container">

                {/* Home Section */}
                <Section ref={homeRef} id="home">
                    <p className="intro-hello">Hello! 👋</p>
                    <p className="intro-text">I'm <strong>Muhammed Furkan Yener, </strong>a Computer Engineer
                        specialized in React and JavaScript, and I create innovative web solutions focused on user
                        experience and dynamic technologies.</p>
                    <div className="img-container">
                        <img src={myPhoto} alt="My Profile"/>
                    </div>
                    <p className="intro-contact">Get in touch <strong>👉</strong> m.furkanyener@gmail.com</p>
                </Section>

                {/* About Section */}
                <Section ref={aboutRef} id="about">
                    <h1>About Me</h1>
                    <p className="about">I have extensive experience in technology projects and social responsibility. At the ‘Öğrencilerin Sesi’ Platform, I led community-based projects, which helped me develop a strong sense of social responsibility. During my internship at Controlix, I gained comprehensive knowledge in IoT, embedded systems, and commercial satellite projects. I continuously improve myself in innovative fields such as deep learning, blockchain (Web3), and data science. Additionally, I have strengthened my experience in building interactive and dynamic user interfaces using frontend technologies like React and JavaScript.

                        I aim to produce innovative solutions in the digital world by combining my leadership and technical skills. I pursue excellence in every project and strive to offer creative solutions to accelerate digital transformation. And yes, sometimes I escape from code and get lost in nature. But don’t worry, even when I set up my tent, I’m still looking for a Wi-Fi signal! </p>
                </Section>

                <Section ref={skilsRef} id="skils">
                    <h1>Skils</h1>

                    <div className="wrapper">

                        <div className="content">
                            <ul className="list">
                                <h3>Languages</h3>
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
                                <h3>Frameworks</h3>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>.Net</li>
                                    <li>Wordpress</li>
                            </ul>
                            <ul className="list">
                                <h3>Tools</h3>
                                    <li>Bash</li>
                                    <li>Git & GitHub</li>
                                    <li>Postman</li>
                                    <li>MongoDB</li>
                                    <li>Chrome DevTools</li>
                            </ul>
                            <ul className="list">
                                <h3>Industry Knowledge</h3>
                                    <li>R&D </li>
                                    <li>IoT </li>
                                    <li>Frontend</li>
                                    <li></li>
                            </ul>
                            <ul className="list">
                                <h3>Design</h3>
                                    <li>Sketch</li>
                                    <li>AutoCAD</li>
                                    <li>AdobeXD</li>
                                    <li>Figma</li>
                                    <li>Google Web Designer</li>
                                    <li>Altium Designer</li>

                            </ul>
                        </div>
                    </div>
                </Section>

                {/* Projects Section */}
                <Section ref={projectsRef} id="projects">
                    <h1>Projects</h1>
                    <ul className="projects">
                    <li className="project1">Project 1</li>
                        <li className="project2">Project 2</li>
                        <li className="project3">Project 3</li>
                    </ul>
                </Section>

                {/* Contact Section */}
                <Section ref={contactRef} id="contact">
                    <h1>Contact Me</h1>
                    <p>You can reach me at: <strong>m.furkanyener@gmail.com</strong></p>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                               required />

                        <label htmlFor="email">Email:</label>
                        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                               required />

                        <label htmlFor="message">Message:</label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                  required />

                        <Button type="submit">Send Message</Button>
                        {formStatus && <p>{formStatus}</p>}
                    </Form>
                </Section>

            </div>
            </PageContainer>
            <footer>
                Copyright © 2025 - mfurkanyener
            </footer>
        </>
    );
};

export default IndexPage;