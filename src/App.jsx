import { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import AppInstructions from "./components/AppInstructions";
import Content from "./components/Content";
import Footer from "./components/Footer";
import downloadButtonFile from "./utils/downloadButtonFile";


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
