import React from "react";
import styled from "styled-components";
import LatestPosts from "./LatestPosts";
import CommunityComponent from "./Community";

// Styled components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Info = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const ShareButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    margin: 0 10px;
    color: #696cff;
    font-size: 1rem;
    cursor: pointer;

    svg {
      margin-right: 5px;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin: 0 5px;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  margin-bottom: 40px;
  /* pre {
    background-color: black;
    color: white;
  } */

  img {
    width: 120vh;
    height: 50vh;
    margin: 20px 0;
    border-radius: 5px;
    background-size: cover;

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }

    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

const RelatedArticles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ArticleCard = styled.div`
  width: 30%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  background-color: #fff;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;

    @media (max-width: 480px) {
      height: 120px;
    }
  }

  h3 {
    font-size: 1.1rem;
    margin: 15px 0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }

  p {
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  button {
    background-color: transparent;
    border: 2px solid #696cff;
    color: #696cff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
      background-color: #696cff;
      color: #fff;
    }

    @media (max-width: 768px) {
      padding: 8px 16px;
    }

    @media (max-width: 480px) {
      padding: 6px 12px;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

// Component
const BlogPost = ({ title, author, category, date, children }) => {
  return (
    <>
      <Container>
        {/* Blog Header */}
        <Header>
          <Title>{title}</Title>
          <Info>
            by {author} | category: {category} | Published: {date}
          </Info>

          {/* Social Share Buttons */}
          <ShareButtons>
            <button>
              <i className="fa fa-share" /> Share
            </button>
            <button>
              <i className="fa fa-facebook" /> Facebook
            </button>
            <button>
              <i className="fa fa-twitter" /> Twitter
            </button>
            <button>
              <i className="fa fa-linkedin" /> LinkedIn
            </button>
          </ShareButtons>
        </Header>

        {/* Blog Content */}
        {children}

        {/* Related Articles */}
        <RelatedArticles></RelatedArticles>
      </Container>
      <LatestPosts />
      <CommunityComponent />
    </>
  );
};

export default BlogPost;
