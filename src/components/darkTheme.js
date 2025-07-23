import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const lightTheme = {
    background: '#ffffff',
    color: '#000000',
    headerBg: '#f0f0f0',
    buttonBg: '#f4a261',
    buttonHover: '#e76f51',
};

const darkTheme = {
    background: '#121212',
    color: '#ffffff',
    headerBg: '#333333',
    buttonBg: '#444444',
    buttonHover: '#666666',
};

const DarkTheme = ({ children }) => {
    // Tema state'ini kontrol etme
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Tema değiştirme fonksiyonu
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Tema bilgisini localStorage'dan almak
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    // Tema bilgisini localStorage'a kaydetme
    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <AppContainer>
                <Header>
                    <h1>Dark Mode Demo</h1>
                    <Button onClick={toggleTheme}>
                        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
                    </Button>
                </Header>
                <Main>{children}</Main>
            </AppContainer>
        </ThemeProvider>
    );
};

// Styled Components
const AppContainer = styled.div`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    min-height: 100vh;
    transition: all 0.3s ease;
`;

const Header = styled.header`
    background-color: ${(props) => props.theme.headerBg};
    padding: 1rem;
    text-align: center;
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.buttonBg};
    color: white;
    padding: 0.5rem 1rem;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.buttonHover};
    }
`;

const Main = styled.main`
    text-align: center;
    padding: 2rem;
`;

export default DarkTheme;