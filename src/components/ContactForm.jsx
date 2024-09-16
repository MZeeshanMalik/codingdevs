import React from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Styled Components
const FormWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #696cff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5656d8;
  }
`;

const MapContainer = styled.div`
  margin-top: 20px;
  height: 300px;
`;

const ContactForm = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.73061,
    lng: -73.935242,
  };

  return (
    <FormWrapper>
      <h2>Contact Us</h2>

      <InputGroup>
        <Label>Full Name</Label>
        <Input type="text" placeholder="First Name" />
        <Input
          type="text"
          placeholder="Last Name"
          style={{ marginTop: "10px" }}
        />
      </InputGroup>

      <InputGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Your Email" />
      </InputGroup>

      <InputGroup>
        <Label>Message</Label>
        <TextArea placeholder="Your Message"></TextArea>
      </InputGroup>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormWrapper>
  );
};

export default ContactForm;
