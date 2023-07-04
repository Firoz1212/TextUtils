import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
    countCons = 0;
  // text="new text" //wrong way to chnge state
  // setText=("new text") //correct way to chnge state
  const handleUPclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to upper case", "success");
  };
  const handleLOclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to lower case", "success");
  };
  const handleClearClick = () => {
    let newtext = " ";
    setText(newtext);
    props.showalert("Text clear", "success");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount(countChar);
      }
    }
    props.showalert("vowel Counted", "success");
  };
  //handle extra space
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra spaces removed!", "success");
  };
  //copy text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copied to Clipboard!", "success");
  };
  // Function to count Consonants:
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
    props.showalert("Constent Counted", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1 className="mb-1">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUPclick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLOclick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="submit"
          onClick={speak}
          className="btn btn-success mx-2 my-2"
        >
          Speak
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={handleVoClick}
        >
          Count no. of Vowels
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={handleCoClick}
        >
          Count no. of Consonants
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        <h3>Total Vowel and consonants:</h3>
        <p>{count} No. of Vowels</p>
        <p>{count1} No. of Consonants</p>
      </div>
    </>
  );
}
