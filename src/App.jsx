import { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import AppInstructions from "./components/AppInstructions";
import Content from "./components/Content";
import Footer from "./components/Footer";

const downloadButtonFile = () => {
  const code = `
import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function Button({
children,
size = "medium",
variant = "primary",
isDisabled = false,
onClick,
fullWidth = false,
}) {
return (
  <button
    className={\`button \${size} \${variant} \${fullWidth ? "full-width" : ""} \${isDisabled ? "disabled" : ""}\`}
    onClick={onClick}
    disabled={isDisabled}
  >
    {children}
  </button>
);
}

Button.propTypes = {
children: PropTypes.node.isRequired,
size: PropTypes.oneOf(["small", "medium", "large"]),
variant: PropTypes.oneOf(["primary", "secondary", "danger", "outline", "gradient"]),
isDisabled: PropTypes.bool,
onClick: PropTypes.func,
fullWidth: PropTypes.bool,
};

export default Button;
  `;

  const blob = new Blob([code], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Button.js";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="app">
      <Header 
        toggleInstructions={toggleInstructions} 
        downloadButtonFile={downloadButtonFile}
        showInstructions={showInstructions}
      />
      <AppInstructions showInstructions={showInstructions}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
