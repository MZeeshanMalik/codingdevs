import styled from "styled-components";

// Styled Components
export const FormWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  min-height: 100px;
`;

export const SubmitButton = styled.button`
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
