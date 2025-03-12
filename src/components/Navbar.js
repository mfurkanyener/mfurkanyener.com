import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
    
    backdrop-filter: blur(10px);
    padding: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 25px;
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #f4a261;
    }
`;

const Navbar = ({ scrollToSection }) => {
    return (
        <NavbarWrapper>
            <NavLinks>
                <StyledLink onClick={() => scrollToSection("home")}>Home</StyledLink>
                <StyledLink onClick={() => scrollToSection("about")}>About Me</StyledLink>
                <StyledLink onClick={() => scrollToSection("skils")}>Skils</StyledLink>
                <StyledLink onClick={() => scrollToSection("projects")}>Projects</StyledLink>
                <StyledLink onClick={() => scrollToSection("contact")}>Contact</StyledLink>
            </NavLinks>
        </NavbarWrapper>
    );
};

export default Navbar;