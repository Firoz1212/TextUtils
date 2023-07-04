import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enable or not
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background =
        "linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)";
      showalert("Dark mode has enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.background =
        "linear-gradient(109.6deg, white 11.2%, #98EECC 91.1%)";
      showalert("Light mode has enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/contact" element={<Contact mode={mode} />} />

            <Route
              exact
              path="/"
              element={
                <TextForm
                  showalert={showalert}
                  heading="Try TextUtils - Word Counter,Character Counter , Remove Extra Space"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
        <Footer creatername="Firoz Hussain" />
      </Router>
    </>
  );
}

export default App;
