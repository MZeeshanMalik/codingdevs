import React from "react";
import BlogPost, { Content } from "../components/BlogPost";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/default.css";
import { useEffect, useRef } from "react";

// Register JavaScript language for highlighting
hljs.registerLanguage("javascript", javascript);

function Optimization() {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <BlogPost
      author="M Zeeshan"
      title="Page Optimization in React: Best Practices for 2024"
      category="Programming"
      date="12/01/2024"
    >
      <div>
        <Content>
          {/* User Image */}
          <img src="../../images/swift.jpg" alt="Page Optimization in React" />
          <h1>Page Optimization in React: Best Practices for 2024</h1>
          <p>
            Performance optimization is crucial for ensuring a smooth user
            experience, especially when dealing with large-scale React
            applications. In 2024, several techniques and tools are available to
            help React developers optimize page loading speed, reduce
            unnecessary re-renders, and improve overall app performance. In this
            article, we'll dive into some of the best practices for optimizing
            React pages.
          </p>

          <h1>1. Code Splitting with React.lazy and Suspense</h1>
          <p>
            <b>Code splitting</b> is a technique that allows you to split your
            code into smaller bundles that are loaded only when they are needed.
            This reduces the initial load time of your application by deferring
            the loading of non-essential code.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <h1>Welcome to React Optimization</h1>
      <Suspense fallback={<div>Loading component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
              `}
            </code>
          </pre>
          <p>
            In this example, the <code>HeavyComponent</code> is only loaded when
            the user navigates to it, reducing the initial JavaScript bundle
            size. The <code>Suspense</code> component provides a fallback UI
            while the component is being loaded.
          </p>

          <h1>2. Memoization with React.memo and useMemo</h1>
          <p>
            <b>Memoization</b> is a powerful optimization technique that helps
            avoid unnecessary re-renders by caching the results of expensive
            calculations or components. React provides two key tools for
            memoization: <code>React.memo</code> and <code>useMemo</code>.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
const ExpensiveComponent = React.memo(({ data }) => {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
});

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <ExpensiveComponent data="Memoized Data" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
              `}
            </code>
          </pre>
          <p>
            In this example, the <code>ExpensiveComponent</code> is wrapped with{" "}
            <code>React.memo</code>, meaning it will only re-render if its props
            change. This avoids re-rendering when unnecessary and can
            significantly improve performance in large applications.
          </p>

          <h1>3. Virtualization with react-window</h1>
          <p>
            <b>Virtualization</b> is a technique that optimizes rendering
            performance when dealing with large lists or tables by only
            rendering the visible items on the screen. The
            <code>react-window</code> library is commonly used to implement
            virtualization in React applications.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

function App() {
  return (
    <List
      height={150}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}
              `}
            </code>
          </pre>
          <p>
            In this example, <code>react-window</code> renders only the rows
            that are currently visible, reducing the number of DOM elements and
            improving performance when dealing with large datasets.
          </p>

          <h1>4. Optimizing Image Loading with lazy loading</h1>
          <p>
            Large images can significantly slow down page load times, especially
            on slower connections. To optimize image loading, you can use the{" "}
            <code>loading="lazy"</code> attribute, which delays the loading of
            images until they are about to enter the viewport.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
function ImageComponent() {
  return (
    <img
      src="large-image.jpg"
      alt="Large Image"
      loading="lazy"
      width="600"
      height="400"
    />
  );
}
              `}
            </code>
          </pre>
          <p>
            This small change can greatly improve page load speed by deferring
            the loading of images until they're needed, saving bandwidth and
            improving the user experience.
          </p>

          <h1>5. Reducing Bundle Size with Tree Shaking</h1>
          <p>
            <b>Tree shaking</b> is a technique used to remove unused code from
            your application during the build process. Most modern bundlers,
            like Webpack, automatically perform tree shaking when configured
            correctly. For example, instead of importing an entire library, you
            can import only the necessary functions.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
import { debounce } from 'lodash'; // Instead of importing entire lodash

function SearchInput() {
  const handleSearch = debounce((query) => {
    console.log('Searching for', query);
  }, 300);

  return <input type="text" onChange={(e) => handleSearch(e.target.value)} />;
}
              `}
            </code>
          </pre>
          <p>
            By importing only the <code>debounce</code> function from Lodash
            instead of the entire library, you reduce the final bundle size,
            leading to faster load times.
          </p>

          <h1>6. Avoiding Inline Functions in JSX</h1>
          <p>
            Defining functions inline in JSX can cause components to re-render
            unnecessarily because a new function is created every time the
            component renders. You can optimize this by moving function
            definitions outside the JSX or using the <code>useCallback</code>{" "}
            hook.
          </p>
          <pre>
            <code className="javascript" ref={codeRef}>
              {`
function App() {
  const handleClick = React.useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <button onClick={handleClick}>Click Me!</button>;
}
              `}
            </code>
          </pre>
          <p>
            By using <code>useCallback</code>, the <code>handleClick</code>{" "}
            function is memoized, preventing unnecessary re-renders when the
            component updates.
          </p>

          <h1>Conclusion</h1>
          <p>
            Page optimization in React is essential for building fast, scalable,
            and user-friendly applications. By leveraging techniques like code
            splitting, memoization, lazy loading, and virtualization, you can
            significantly reduce the load time and improve the performance of
            your React apps. With the improvements in 2024, React provides even
            more tools to ensure that your applications run efficiently on all
            devices and networks.
          </p>
        </Content>
      </div>
    </BlogPost>
  );
}

export default Optimization;
