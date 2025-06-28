// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2025 Voice AI - All Rights Reserved</p>
  </FooterContainer>
);

export default Footer;
