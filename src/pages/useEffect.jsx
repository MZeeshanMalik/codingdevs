import React, { useState, useEffect, useRef } from "react";
import BlogPost, { Content } from "../components/BlogPost";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/default.css";

// Register JavaScript language for highlighting
hljs.registerLanguage("javascript", javascript);

function UseEffectHook() {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <BlogPost
      author="M Zeeshan"
      title="Mastering useEffect Hook in React: A Comprehensive Guide for 2024"
      category="Programming"
      date="12/01/2024"
    >
      <div>
        <Content>
          {/* User Image */}
          <img
            src="../../images/useEffect.jpg"
            alt="Mastering useEffect Hook"
          />
          <h1>
            Mastering useEffect Hook in React: A Comprehensive Guide for 2024
          </h1>
          <p>
            The <code>useEffect</code> hook is one of the most powerful and
            frequently used hooks in React. Introduced in React 16.8, it allows
            you to manage side effects in functional components, replacing the
            need for lifecycle methods in class components. In this
            comprehensive guide, we'll explore the core concepts of{" "}
            <code>useEffect</code>, common use cases, and best practices to help
            you make the most of this hook in your React applications.
          </p>

          <h1>1. Introduction to useEffect</h1>
          <p>
            The <code>useEffect</code> hook allows you to perform side effects
            in functional components. Side effects are operations that can
            affect other components and cannot be done during rendering, such as
            data fetching, subscriptions, or manually changing the DOM.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered or updated');
  });

  return <div>Check the console</div>;
}

export default Example;
              `}
            </code>
          </pre>
          <p>
            In this example, the effect runs after every render. By default,{" "}
            <code>useEffect</code> executes after every render, making it
            suitable for operations that need to run on every update.
          </p>

          <h1>2. Dependencies Array</h1>
          <p>
            The <code>useEffect</code> hook accepts a second argument, the
            dependencies array, which determines when the effect should run. If
            you provide an empty array, the effect runs only once after the
            initial render, similar to componentDidMount in class components.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty array means this effect runs once

  return <div>Check the console</div>;
}

export default Example;
              `}
            </code>
          </pre>
          <p>
            Here, the effect runs only once after the initial render, and the
            cleanup function logs when the component unmounts.
          </p>

          <h1>3. Cleaning Up Effects</h1>
          <p>
            Some effects require cleanup to prevent memory leaks or to reset
            state. You can return a cleanup function from the{" "}
            <code>useEffect</code> callback, which will be called before the
            effect runs again or when the component unmounts.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return <div>Time: {seconds}s</div>;
}

export default Timer;
              `}
            </code>
          </pre>
          <p>
            In this example, the effect sets up an interval timer, and the
            cleanup function clears the interval when the component unmounts to
            prevent memory leaks.
          </p>

          <h1>4. Effect Dependencies</h1>
          <p>
            If your effect depends on specific values, you should include them
            in the dependencies array. The effect will re-run only if one of
            these values changes.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useState, useEffect } from 'react';

function DataFetcher({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]); // Effect depends on url

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

export default DataFetcher;
              `}
            </code>
          </pre>
          <p>
            In this example, the effect depends on the <code>url</code> prop.
            The effect will re-run if the <code>url</code> changes.
          </p>

          <h1>5. Using Multiple Effects</h1>
          <p>
            You can use multiple <code>useEffect</code> hooks in a single
            component to separate concerns and manage different side effects
            independently.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useEffect, useState } from 'react';

function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
    </div>
  );
}

export default MultipleEffects;
              `}
            </code>
          </pre>
          <p>
            In this example, two effects are used: one to log the count value
            whenever it changes and another to fetch data from an API when the
            component mounts.
          </p>

          <h1>6. Common Pitfalls</h1>
          <p>
            When using <code>useEffect</code>, be aware of common pitfalls, such
            as:
            <ul>
              <li>
                Forgetting to specify dependencies, which can lead to stale or
                incorrect data.
              </li>
              <li>
                Creating infinite loops by setting state inside effects without
                proper dependencies.
              </li>
              <li>
                Not cleaning up effects that involve subscriptions or timers,
                leading to memory leaks.
              </li>
            </ul>
          </p>

          <h1>Conclusion</h1>
          <p>
            The <code>useEffect</code> hook is essential for managing side
            effects in React functional components. By understanding how to use{" "}
            <code>useEffect</code> effectively, including handling dependencies,
            performing cleanups, and managing multiple effects, you can build
            robust and performant React applications. Mastering{" "}
            <code>useEffect</code> will greatly enhance your ability to manage
            side effects and build complex features in your React projects.
          </p>
        </Content>
      </div>
    </BlogPost>
  );
}

export default UseEffectHook;
