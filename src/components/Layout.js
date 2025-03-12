import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const PageContainer = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 2rem;
`;

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <PageContainer>{children}</PageContainer>
        </>
    );
};

export default Layout;