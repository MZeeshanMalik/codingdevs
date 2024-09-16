import React from "react";
import BlogPost, { Content } from "../components/BlogPost";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/default.css";
import { useEffect, useRef } from "react";

// Register JavaScript language for highlighting
hljs.registerLanguage("javascript", javascript);

function CompoundComponent() {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <BlogPost
      author="M Zeeshan"
      title="Understanding the Compound Component Pattern in React"
      category="Programming"
      date="11/15/2024"
    >
      <div>
        <Content>
          {/* User Image */}
          <img src="../../images/java.jpg" alt="React Compound Component" />
          <h1>What is the Compound Component Pattern?</h1>
          <p>
            The Compound Component Pattern in React is a powerful design pattern
            that enables components to communicate implicitly. Rather than
            passing props directly from one component to another, the pattern
            allows child components to implicitly communicate with a parent
            component by being its descendants in the component tree. This
            pattern is particularly useful for building flexible and reusable
            components that can be composed together in various ways.
          </p>
          <p>
            In this article, we'll explore how the compound component pattern
            works, why it is beneficial, and how you can implement it in your
            own projects.
          </p>

          <h1>What is the Compound Component Pattern?</h1>
          <p>
            In traditional React applications, data and actions are passed from
            a parent component to a child component through props. However, as
            applications grow more complex, this approach can lead to prop
            drilling, where data needs to be passed through several components
            that don't necessarily need to know about it.
          </p>
          <p>
            The compound component pattern offers a more scalable and
            maintainable solution by allowing parent components to manage state,
            while child components implicitly access this state and render
            accordingly.
          </p>

          <h1>Key Features of the Compound Component Pattern</h1>
          <p>
            The compound component pattern is built on a few core principles:
          </p>
          <p>
            <b>1. Parent-Child Communication</b> The pattern allows child
            components to access and interact with the state managed by a parent
            component without needing to pass props directly. This makes the
            components more reusable and easier to manage.
          </p>
          <p>
            <b>2. Flexibility in Composition</b> Compound components provide
            flexibility by allowing the parent component to manage the state and
            the child components to define their behavior. This enables
            components to be easily composed in different configurations without
            requiring significant changes to the underlying code.
          </p>

          <h1>How to Implement the Compound Component Pattern</h1>
          <p>
            Let's walk through an example to understand how to implement the
            compound component pattern. In this example, we'll create a simple{" "}
            <b>Toggle</b> component that has two child components:{" "}
            <b>ToggleButton</b> and <b>ToggleOn</b>.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
              function Toggle({ children }) {
                const [on, setOn] = React.useState(false);

                const toggle = () => {
                  setOn(!on);
                };

                return React.Children.map(children, child => {
                  if (React.isValidElement(child)) {
                    return React.cloneElement(child, { on, toggle });
                  }
                  return child;
                });
              }

              function ToggleButton({ toggle }) {
                return <button onClick={toggle}>Toggle</button>;
              }

              function ToggleOn({ on, children }) {
                return on ? children : null;
              }

              export function App() {
                return (
                  <Toggle>
                    <ToggleButton />
                    <ToggleOn>Show this text when toggled on</ToggleOn>
                  </Toggle>
                );
              }
              `}
            </code>
          </pre>
          <p>
            In this example, the parent component, <code>Toggle</code>, manages
            the state of the toggle (whether it's "on" or "off"). The{" "}
            <code>ToggleButton</code> child component interacts with the parent
            by calling the <code>toggle</code> function, while the{" "}
            <code>ToggleOn</code> child component renders its children
            conditionally based on the
            <code>on</code> state.
          </p>

          <h1>Why Use the Compound Component Pattern?</h1>
          <p>
            The compound component pattern offers several advantages over
            traditional prop-passing methods:
          </p>
          <p>
            <b>1. Improved Maintainability</b> The pattern reduces the amount of
            data that needs to be passed between components, making the codebase
            easier to manage and reducing the likelihood of bugs caused by prop
            mismanagement.
          </p>
          <p>
            <b>2. Enhanced Reusability</b> Components built with this pattern
            are highly reusable, as they are designed to interact with a parent
            component rather than relying on hardcoded props or state. This
            makes it easier to use the same component in different parts of the
            application.
          </p>
          <p>
            <b>3. Simplified Composition</b> With compound components,
            developers can create flexible and customizable component structures
            that are easy to extend or modify without changing the core
            functionality of the parent component.
          </p>

          <h1>Conclusion</h1>
          <p>
            The Compound Component Pattern is a powerful design technique in
            React that promotes flexibility, scalability, and maintainability.
            It allows components to communicate implicitly, making it easier to
            create reusable, customizable, and maintainable component
            structures. This pattern can be especially useful in larger
            applications, where passing data and functionality between
            components through props can become unwieldy and difficult to
            manage.
          </p>
        </Content>
      </div>
    </BlogPost>
  );
}

export default CompoundComponent;
