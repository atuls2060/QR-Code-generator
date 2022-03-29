import React, { useState } from "react";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";

function App() {
  const [colors, setColors] = useState({
    bgColor: "#ffffff",
    fgColor: "#000000",
  });
  const [size, setSize] = useState(200);
  const [url, setUrl] = useState("");

  function generate(colors, size, url) {
    //got these values from section A
    setColors(colors);
    setSize(size);
    setUrl(url);
  }
  return (
    <>
      <div className="home">
        <SectionA generate={generate} />
        <SectionB colors={colors} size={size} url={url} />
      </div>
    </>
  );
}

export default App;
