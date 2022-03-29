import React, { useState } from "react";

const SectionA = ({ generate }) => {
  const [colors, setColors] = useState({
    bgColor: "#ffffff",
    fgColor: "#000000",
  });
  const [size, setSize] = useState(200);
  const [url, setUrl] = useState("");

  function handleColor(e) {
    const { name, value } = e.target;
    setColors((prevColors) => {
      return { ...prevColors, [name]: value };
    });
    generate(colors, size, url);
  }

  function handleSlider(e) {
    setSize(e.target.value);
    generate(colors, size, url);
  }

  function handleInput(e) {
    setUrl(e.target.value);
  }
  function generateHandler() {
    //pass values to the app.js

    if (url.trim().length > 0) {
      document.getElementById("slide").click();
      generate(colors, size, url);
    } else {
      alert("type something...");
    }
  }

  return (
    <section className="section-a">
      <div className="center-content">
        <label>Background color</label>
        <br></br>
        <input
          className="bgColor"
          onChange={handleColor}
          name="bgColor"
          type="color"
          value={colors.bgColor}
        />
        <br></br>
        <label>Foreground color</label>
        <br></br>
        <input
          className="fgColor"
          onChange={handleColor}
          name="fgColor"
          type="color"
          value={colors.fgColor}
        />
        <br></br>
        <label>Size</label>
        <br></br>
        <input
          className="slider"
          onInput={handleSlider}
          type="range"
          min="50"
          max="400"
          value={size}
        />
        <input
          id="input"
          type="text"
          placeholder="Enter something"
          value={url}
          onChange={handleInput}
          required
        />
        <a href="#section-b" id="slide"></a>
        <button href="#section-b" id="generate" onClick={generateHandler}>
          Generate
        </button>
      </div>
    </section>
  );
};

export default SectionA;
