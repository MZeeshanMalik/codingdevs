// Import necessary libraries
import React from "react";
import styled from "styled-components";
import HeaderComponent from "../HeaderComponent";
import CommunityComponent from "./Community";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import LatestPosts from "./LatestPosts";

// Styled Components
const Container = styled.div`
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  nav {
    display: flex;
    gap: 20px;
  }

  button {
    background-color: #696cff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    button {
      margin-top: 10px;
    }
  }
`;

const HeroSection = styled.section`
  /* background-image: url("../images/hero.jpg"); */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../images/hero.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 80px 20px;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
  }

  button {
    margin-top: 20px;
    padding: 15px 30px;
    background-color: #696cff;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    a {
      color: white;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const Section = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 28px;
    }
  }
`;

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  img {
    height: auto;
    width: auto;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PostCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  img {
    height: 30vh;
    width: 50vh;
    border-radius: 13px;
    object-fit: cover;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  span {
    font-size: 14px;
    color: #666;
    a {
      display: flex;
      background: #6666d8;
      color: white;
      padding: 7px;
      margin-top: 10px;
      width: 50vh;
      /* text-decoration: none; */
      border-radius: 12px;
      justify-content: center;
    }
  }
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    img {
      height: 30vh;
    }
  }
`;

const MemberCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  img {
    height: 40vh;
    width: 40vh;
    object-fit: cover;
    border-radius: 10rem;
  }
  h4 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  span {
    font-size: 14px;
    color: #666;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const LogoGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;

  img {
    max-width: 150px;
    margin: 10px;
    border-radius: 2rem;
  }
`;

// Main Component
const CardComponent = () => {
  return (
    <Container>
      <HeroSection>
        <h1>Coding Insights</h1>
        <p>Unlock the secrets of coding with expert articles</p>
        <button>
          <a href="/useEffect-hook">Read more</a>
        </button>
      </HeroSection>
      <LatestPosts />

      <Section>
        <h2>Meet Our Community Members</h2>
        <CommunityGrid>
          <MemberCard>
            <img src="../images/pic1.jpg" />

            <h4>Alice Wong</h4>
            <span>Role: Community Manager</span>
            <p>Passionate about fostering connections and growth.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/pic2.jpg" />

            <h4>Elice perry</h4>
            <span>Role: Content Creator</span>
            <p>Bringing stories to life through engaging content.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/pic3.jpg" />

            <h4>Micheal clark</h4>
            <span>Role: Developer</span>
            <p>Loves coding and solving complex problems.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/pic4.jpg" />

            <h4>Emily chen</h4>
            <span>Role: Designer</span>
            <p>Creating visually stunning and user-friendly designs.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/macclaren.jpg" alt="Macclaren" />

            <h4>Macclaren</h4>
            <span>Role: Backen Developer</span>
            <p>Creating fully functional websites handeling backend work.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/Micheal.jpg" alt="Micheal" />

            <h4>Micheal</h4>
            <span>Role: Database Engenieer</span>
            <p>Creating and handeling complex database designs.</p>
          </MemberCard>
        </CommunityGrid>
      </Section>
      {/* <Section> */}
      <CommunityComponent />
      {/* </Section> */}
      <Section>
        <h2>Trusted by</h2>
        <LogoGrid>
          <img src="../images/astra.png" alt="astra" />
          <img src="../images/canva.png" alt="canva" />
          <img src="../images/pintrest.png" alt="pintrest" />
          <img src="../images/youtube.png" alt="youtube" />
          <img src="../images/linkdin.png" alt="linkdin" />
        </LogoGrid>
      </Section>

      {/* <Footer>
        <h3>Subscribe to our newsletter</h3>
        <form>
          <input type="email" placeholder="Input your email" />
          <button>Subscribe</button>
        </form>
        <p>© 2024 codingdevs, Inc. • Privacy • Terms • Sitemap</p>
      </Footer> */}
    </Container>
  );
};

export default CardComponent;
