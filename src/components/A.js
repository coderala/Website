// ✅ Full React Syntax Guide with Explanations

import React, {
  useState, // React Hook to manage local component state
  useEffect, // React Hook to perform side effects (like fetching data)
  useRef, // React Hook to access or manipulate DOM elements directly
  useContext, // React Hook to consume React Context
  useReducer, // React Hook for complex state logic (like Redux-style)
  createContext, // Function to create a new React Context
  memo, // Function to memoize components (prevent unnecessary re-renders)
  forwardRef, // Function to forward refs to child components
  lazy, // For lazy loading components (code-splitting)
  Suspense, // Used with lazy to show fallback while component is loading
} from "react";

// React Router imports for SPA navigation
import {
  BrowserRouter as Router, // Top-level router component
  Route, // Defines a route
  Routes, // Wrapper for multiple Route components
  Link, // Anchor tag alternative for routing
  useParams, // Hook to get route parameters
  useNavigate, // Hook to programmatically navigate
  Outlet, // Used for nested routing
} from "react-router-dom";

// 🔸 Creating a Context
const MyContext = createContext(); // Used for global state or shared data

// 🔸 Reducer function example (used with useReducer)
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// 🔸 Lazy-loaded component (for performance)
const LazyComponent = lazy(() => import("./LazyComponent"));

// ✅ Main React Component
const ReactSyntaxGuide = () => {
  const [count, setCount] = useState(0); // Simple counter
  const [text, setText] = useState(""); // Input value state
  const inputRef = useRef(null); // To access input element
  const navigate = useNavigate(); // For navigation
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // Complex state

  const contextValue = { user: "Shahzad" }; // Providing value to context

  // Runs after render or when count changes
  useEffect(() => {
    console.log("Component mounted or count changed");
  }, [count]);

  // Event Handlers
  const handleClick = () => setCount(count + 1); // Increase count
  const handleInputChange = (e) => setText(e.target.value); // Update text state
  const handleNavigate = () => navigate("/about"); // Go to /about route
  const focusInput = () => inputRef.current.focus(); // Focus input field

  return (
    <MyContext.Provider value={contextValue}>
      {" "}
      {/* Context provider */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">React Syntax Guide</h1>

        {/* useState Example */}
        <p>useState count: {count}</p>
        <button onClick={handleClick}>Increment</button>

        {/* useRef Example */}
        <input
          ref={inputRef}
          value={text}
          onChange={handleInputChange}
          className="border p-1"
        />
        <button onClick={focusInput}>Focus</button>

        {/* useReducer Example */}
        <p>useReducer count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+1</button>

        {/* Navigation Example */}
        <button onClick={handleNavigate}>Go to About</button>

        {/* Lazy Loading Example */}
        <Suspense fallback={<p>Loading lazy component...</p>}>
          <LazyComponent />
        </Suspense>

        {/* Context Consumer */}
        <ChildComponent />
      </div>
    </MyContext.Provider>
  );
};

// 🔸 useContext Example - Receiving context value
const ChildComponent = () => {
  const { user } = useContext(MyContext); // Access context value
  return <p>Hello, {user}!</p>;
};

// 🔸 React Router Setup
export const AppRouter = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<ReactSyntaxGuide />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  </Router>
);

// 🔸 useParams Example - Accessing route params
const UserPage = () => {
  const { id } = useParams();
  return <p>User ID: {id}</p>;
};

// 🔸 Memo and forwardRef
const MemoComponent = memo(({ name }) => <p>Memoized: {name}</p>);
const InputWithRef = forwardRef((props, ref) => <input ref={ref} {...props} />);

// 🔸 Outlet Example for Nested Routes
const AboutPage = () => {
  return (
    <div>
      <h2>About Page</h2>
      <Outlet />
    </div>
  );
};

export default ReactSyntaxGuide;
