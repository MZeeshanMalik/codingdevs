import styled from "styled-components";
// Styled Components
export const Container = styled.div`
  width: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
`;

export const Header = styled.header`
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

export const HeroSection = styled.section`
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; */
  img {
    height: auto;
    width: auto;
  }
  @media (max-width: 1024px) {
    /* grid-template-columns: repeat(2, 1fr); */
  }

  @media (max-width: 768px) {
    /* grid-template-columns: 1fr; */
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
  margin: 7px;
  width: min-content;
  height: min-content;
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
  @media (max-width: 500px) {
    img {
      height: 15vh;
      width: fit-content;
    }
    span {
      a {
        width: 30vh;
      }
    }
  }
`;

export const CommunityGrid = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  } */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    /* grid-template-columns: 1fr; */
    img {
      height: 30vh;
    }
  }
`;

export const MemberCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 5px;
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

export const LogoGrid = styled.div`
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
