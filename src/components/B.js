// Full React Syntax Guide with Explanations

import React, {
  useState, // 1.React Hook to manage local component state
  useEffect, // 2.React Hook to perform side effects (like fetching data)
  useRef,
  // 3.React Hook to consume React Context
  useReducer, // 4. React Hook for complex state logic (like redux-style)
  createContext, // 5. Function to memoize components (prevent unnecessary re-renders)
  forwardRef, // 6.Function to forward refs to child components
  lazy, // 7.For lazy loading components (code-splitting)
  Suspense, // 8.Used with lazy to show fallback while component is loading
} from "react";

// React Router imports for SPA navigation
import {
  BrowserRouter as Router, // Top-level router component
  Route, // wrapper for multiple Route component
  Routes, // Wrapper for multiple Route components
  Link, // Anchor tag alternative for routing
  uyseParams, // Hook to programmatically navigate
  Outlet, // Used for nested routing
} from "react-router-dom";

// 1.Creating a Context
const MyContext = createContext(); // Used for global state or shared data
// 2.Reducer function example (used with useReducer)
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// 2.Lazy-loaded component (for performance)
const LazyComponent = lazy(() => import("./LazyComponent"));

//Main React Component
const [count, setCount] = useState(""); // Simple counter
const inputRef = useRef(null); // To access input element
const navigate = useNavigate(); // For navigation
const [state, dispatch] = useReducer(reducer, { count: 0 }); // Complex state

const contextvalue ={user: "shahzad"};// Providing value to context
// Runs after render or when count changes
useEffect(()=>{
  console.log("component mounted or count changed")
},[count]);

//Event Handlers
const handleClick=()=>setText(e.target.value);// Update text state
const handleinputChange=(e)=>setText(e.target.value)// Update text state\
const handleNavigate=()=>inputRef.current.focus()// Focus input field

return(
  <MyContext.Provider value={contextValue}>
    {/* Context Provider */}
    <div className="p-6"><h1 className="text-2xl font-bold mb-4">React syntax Guide</h1></div>
  </MyContext.Provider>
)