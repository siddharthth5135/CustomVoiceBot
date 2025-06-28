// src/components/CallForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: ${(props) => props.theme.background};
`;

const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  width: 300px;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 8px;
  color: ${(props) => props.theme.text};
  background-color: transparent;
`;

const Button = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.primary};
  }
`;

const CallForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    let inputValue = e.target.value;

    // Only allow digits after +91
    if (inputValue.startsWith('+91')) {
      inputValue = '+91' + inputValue.slice(3).replace(/[^0-9]/g, ''); // Remove non-numeric characters
    } else {
      inputValue = '+91' + inputValue.replace(/[^0-9]/g, ''); // Prepend +91 and remove non-numeric characters
    }

    // Ensure that the phone number length is not more than 13 characters
    if (inputValue.length <= 13) {
      setPhoneNumber(inputValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the phone number format
    if (!phoneNumber.match(/^\+91\d{10}$/)) {
      setError('Please enter a valid phone number starting with +91 and 10 digits.');
      return;
    }

    setError(''); // Clear error if validation passes

    try {
      await axios.post('http://localhost:5000/call', { phoneNumber });
      alert('Call initiated successfully!');
    } catch (error) {
      console.log("ERROR : "+error);
      console.log('✅ VAPI_API_KEY:', process.env.VAPI_API_KEY);
      alert('Error initiating call');
    }
  };

  return (
    <FormContainer>
      <h2>Make a Call</h2>
      <Input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={handleChange}
        maxLength="13" // Limit input to 13 characters (max for +91 + 10 digits)
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button onClick={handleSubmit}>Make Call</Button>
    </FormContainer>
  );
};

export default CallForm;
