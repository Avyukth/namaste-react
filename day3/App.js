import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => {
  return <h1> Welcome to my website </h1>;
};

const HeaderComponent = () => {
  return (<div>
    <Title/>
    <h1>Namaste react </h1>
    <h2>Namaste react </h2>
     
    </div>);
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);
