import React from "react";
import styled from "styled-components";

// Styled Components
const CommunitySection = styled.section`
  background-color: #e2e2e2; /* Light background color */
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #696cff;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  background-color: #696cff;
  color: white;
  font-size: 18px;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5757e6;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const CommunityComponent = () => {
  return (
    <CommunitySection>
      <Title>Join Our Community</Title>
      <Description>
        Become a part of our vibrant community and stay updated with the latest
        insights and articles.
      </Description>
      <Button>Subscribe to Learn More</Button>
    </CommunitySection>
  );
};

export default CommunityComponent;
