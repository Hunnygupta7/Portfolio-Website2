import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import { HashLoader } from "react-spinners";

function App() {

  const [loader, setLoader] = useState(false)

  useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false) 
    }, 2300)
  }, [])

  return (
    <div>
      {
        loader?(
          <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:"black",
            width: "100%",
            height: "100vh",
          }}
        >
        <HashLoader
          color="#2604ea"
          cssOverride={{}}
          loading
          size={150}
          speedMultiplier={2}
        />  
        </div>
        ):(
          <div>
            <NavBar />
            <Home />
            <About />
            <Project />
            <Skills />
            <Contact />
            <SocialLinks />
          </div>
        )
      }
    </div>
  );
}

export default App;
