import React from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
// import FaTwitter

const FooterWrapper = styled.footer`
  background-color: #1f1f2e;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  font-size: 14px;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const NewsletterWrapper = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const NewsletterHeading = styled.h4`
  margin-bottom: 15px;
  color: #fff;
`;

const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d2d42;
  padding: 10px;
  border-radius: 5px;
`;

const EmailInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  background-color: transparent;
  color: white;
  flex: 1;

  &::placeholder {
    color: #aaa;
  }
`;

const SubscribeButton = styled.button`
  background-color: #696cff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5757e6;
  }
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 0;
  }

  a {
    color: #aaa;
    margin: 0 15px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: white;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  img {
    width: 40px;
    margin-right: 10px;
  }

  span {
    font-size: 18px;
    color: #696cff;
    font-weight: bold;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #2d2d42;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SocialIcons = styled.div`
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  a {
    margin: 0 10px;
    color: #aaa;
    font-size: 18px;

    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.p`
  color: #aaa;
  margin: 0;
  a {
    color: white;
  }
`;

const LanguageSelect = styled.select`
  background-color: #2d2d42;
  color: #fff;
  border: none;
  padding: 8px;
  margin-left: 15px;
  border-radius: 5px;

  option {
    background-color: #1f1f2e;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <LogoWrapper>
          <span>codingdevs</span>
        </LogoWrapper>
        <NewsletterWrapper>
          <NewsletterHeading>Subscribe to our newsletter</NewsletterHeading>
          <NewsletterForm>
            <EmailInput type="email" placeholder="Input your email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </NewsletterForm>
        </NewsletterWrapper>
        <FooterLinks>
          <a href="#">Pricing</a>
          <a href="#">About us</a>
          <a href="#">Features</a>
          <a href="#">Help Center</a>
          <a href="#">Contact us</a>
          <a href="#">FAQs</a>
          <a href="#">Careers</a>
        </FooterLinks>
      </FooterTop>
      <FooterBottom>
        <SocialIcons>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </SocialIcons>
        <Copyright>
          © 2024 Brand, Inc. • <a href="/privacy-policy">Privacy</a> •{" "}
          <a href="/privacy-policy">Terms</a> • <a href="#">Sitemap</a>
        </Copyright>
        <LanguageSelect>
          <option value="en">English</option>
          <option value="es">Español</option>
        </LanguageSelect>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
