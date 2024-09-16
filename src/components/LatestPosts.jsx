import React from "react";
import { PostCard, PostGrid, Section } from "./CardComponent";

function LatestPosts(props) {
  return (
    <div>
      <Section>
        <h2>Latest Posts</h2>
        <PostGrid>
          <PostCard>
            <img src="../images/js.jpg" />
            <h3>What is react</h3>
            <p>Introduction to react. How react works? why react?</p>
            <span>Tags: react, Coding</span>
            <span>
              <a href="/what-is-react">Read Article</a>
            </span>
          </PostCard>
          <PostCard>
            <img src="../images/html.jpg" />
            <h3>React updates in 2024</h3>
            <p>A beginner's guide to understanding and writing HTML.</p>
            <span>Tags: HTML, Web Development</span>
            <span>
              <a href="/react-updates">Read Article</a>
            </span>
          </PostCard>
          <PostCard>
            <img src="../images/java.jpg" />
            <h3>Compound Component Pattern</h3>
            <p>Understanding the Compound Component Pattern in React</p>
            <span>Tags: Java, Programming</span>
            <span>
              <a href="/Compound-Component-pattern">Read Article</a>
            </span>
          </PostCard>
          <PostCard>
            <img src="../images/swift.jpg" />

            <h3>Page optimization in react</h3>
            <p>Performence optimization is crucial for better UX.</p>
            <span>Tags: page optimization, coding , react</span>
            <span>
              <a href="/page-optimization-in-react">Read Article</a>
            </span>
          </PostCard>
          <PostCard>
            <img src="../images/React-hooks.jpg" />

            <h3>React hooks</h3>
            <p>
              Mastering React Hooks: Essential Tips and Best Practices for 2024
            </p>
            <span>Tags: React, React hooks , hooks</span>
            <span>
              <a href="/react-hooks">Read Article</a>
            </span>
          </PostCard>
          <PostCard>
            <img src="../images/useEffect.jpg" />

            <h3>Mastering useEffect Hook in React</h3>
            <p>A Comprehensive Guide for 2024, perfect for beginners.</p>
            <span>Tags: useEffect hook, react</span>
            <span>
              <a href="/useEffect-hook">Read Article</a>
            </span>
          </PostCard>
        </PostGrid>
      </Section>
    </div>
  );
}

export default LatestPosts;
