import React from "react";
import { useState, useEffect } from "react";

const ChangeScreenWidth = ()=>{

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hamBtn, setHamBtn] = useState(false);

  const ToggleBtn = () => {
    setHamBtn(!hamBtn);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { screenWidth, hamBtn, ToggleBtn }
}

export default ChangeScreenWidth