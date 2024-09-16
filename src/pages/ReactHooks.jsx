import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import BlogPost, { Content } from "../components/BlogPost";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/default.css";

// Register JavaScript language for highlighting
hljs.registerLanguage("javascript", javascript);

function ReactHooks() {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <BlogPost
      author="M Zeeshan"
      title="Mastering React Hooks: Essential Tips and Best Practices for 2024"
      category="Programming"
      date="12/01/2024"
    >
      <div>
        <Content>
          {/* User Image */}
          <img src="../../images/React-hooks.jpg" alt="Mastering React Hooks" />
          <h1>
            Mastering React Hooks: Essential Tips and Best Practices for 2024
          </h1>
          <p>
            React Hooks have revolutionized the way we manage state and side
            effects in React applications. Introduced in React 16.8, Hooks
            provide a more functional approach to building components, making
            code cleaner and more reusable. In 2024, understanding and
            effectively using Hooks is crucial for modern React development.
            This article explores essential React Hooks and best practices for
            leveraging them to build efficient and maintainable React
            applications.
          </p>

          <h1>1. useState: Managing Component State</h1>
          <p>
            The <code>useState</code> hook allows functional components to
            manage state without needing a class. It's the most fundamental hook
            and is often used for simple state management.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
              `}
            </code>
          </pre>
          <p>
            In this example, <code>useState</code> initializes a state variable{" "}
            <code>count</code> with a value of <code>0</code>, and provides a
            function <code>setCount</code> to update it.
          </p>

          <h1>2. useEffect: Handling Side Effects</h1>
          <p>
            The <code>useEffect</code> hook manages side effects like data
            fetching, subscriptions, and manual DOM manipulations. It replaces
            the lifecycle methods in class components.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this runs once after initial render

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

export default DataFetcher;
              `}
            </code>
          </pre>
          <p>
            The <code>useEffect</code> hook in this example fetches data from an
            API and updates the component state. The empty dependency array
            ensures the effect runs only once.
          </p>

          <h1>3. useContext: Managing Global State</h1>
          <p>
            The <code>useContext</code> hook allows components to consume
            context values without needing to use the Context Consumer
            component. It simplifies the process of passing data through the
            component tree.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div>The current theme is {theme}</div>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

export default App;
              `}
            </code>
          </pre>
          <p>
            In this example, <code>useContext</code> retrieves the current value
            of <code>ThemeContext</code>, making it easy to manage global state
            across components.
          </p>

          <h1>4. useReducer: Advanced State Management</h1>
          <p>
            The <code>useReducer</code> hook is an alternative to{" "}
            <code>useState</code> for managing more complex state logic. It’s
            especially useful for managing state that involves multiple
            sub-values or complex transitions.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
              `}
            </code>
          </pre>
          <p>
            The <code>useReducer</code> hook in this example manages state
            transitions using a reducer function, which provides a more
            structured approach to state management.
          </p>

          <h1>5. useCallback: Optimizing Performance</h1>
          <p>
            The <code>useCallback</code> hook memoizes callback functions,
            preventing unnecessary re-renders of child components that rely on
            these functions. It’s useful for optimizing performance in larger
            applications.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useState, useCallback } from 'react';

function ExpensiveComponent({ onClick }) {
  console.log('Rendering ExpensiveComponent');
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Dependencies array is empty, so this function is memoized

  return (
    <div>
      <ExpensiveComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
              `}
            </code>
          </pre>
          <p>
            By using <code>useCallback</code>, the <code>handleClick</code>{" "}
            function is only recreated when its dependencies change, reducing
            unnecessary re-renders of <code>ExpensiveComponent</code>.
          </p>

          <h1>6. useMemo: Memoizing Computed Values</h1>
          <p>
            The <code>useMemo</code> hook memoizes expensive calculations,
            ensuring they are only recalculated when their dependencies change.
            It can improve performance by avoiding unnecessary computations.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    console.log('Sorting items');
    return items.slice().sort();
  }, [items]); // Only recompute if items change

  return <div>{sortedItems.join(', ')}</div>;
}

function App() {
  const [items, setItems] = useState([3, 1, 2]);

  return (
    <div>
      <ExpensiveComponent items={items} />
      <button onClick={() => setItems([...items, Math.random()])}>Add Item</button>
    </div>
  );
}

export default App;
              `}
            </code>
          </pre>
          <p>
            <code>useMemo</code> ensures that <code>sortedItems</code> is only
            recalculated when <code>items</code> change, preventing unnecessary
            computations.
          </p>

          <h1>Conclusion</h1>
          <p>
            React Hooks have transformed the way we build React components by
            simplifying state management and side effects. Mastering Hooks like{" "}
            <code>useState</code>, <code>useEffect</code>,{" "}
            <code>useContext</code>, <code>useReducer</code>,
            <code>useCallback</code>, and <code>useMemo</code> is essential for
            modern React development. By understanding and applying these Hooks
            effectively, you can build more efficient, maintainable, and
            scalable React applications.
          </p>
        </Content>
      </div>
    </BlogPost>
  );
}

export default ReactHooks;
