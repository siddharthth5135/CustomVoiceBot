// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.headerText};
  font-size: 2rem;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

const Header = ({ toggleDarkMode }) => (
  <HeaderContainer>
    <Logo>Voice AI</Logo>
    <ToggleButton onClick={toggleDarkMode}>Toggle Dark Mode</ToggleButton>
  </HeaderContainer>
);

export default Header;
