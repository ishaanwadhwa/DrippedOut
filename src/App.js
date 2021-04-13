import React from "react";
import NavBar from "./components/Navbar";
import PrePlay from "./components/videoPlayer";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home";

import ResponsivePlayer from "./components/Home/ResponsivePlayer";
import "./App.css";

function App() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => setPlay(false), 5000);
  }, []);
  console.log(play);
  return (
    <div className={play ? "videoplayer" : "none"}>
      {play ? <ResponsivePlayer /> : <Home />}
    </div>
  );
}

export default App;
