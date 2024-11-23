import React, { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import "./BtnDarkMode.css";

const BtnDarkMode = () => {
   const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light')



  useEffect(()=> {
  if(darkMode === 'dark'){
    document.body.classList.add('dark')
    
  }else {
    document.body.classList.remove('dark')
  }
  },[darkMode])

  const toggleDarkMode = () => {
    console.log("toggleDarkMode Fired!");
    setDarkMode((currentValue)=>{
        return currentValue === 'light' ? 'dark' : 'light'
    });
  };

  return (
    <button  className="dark-mode-btn" onClick={toggleDarkMode}>
      <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
      ISO:100 
    </button>
  );
};

export default BtnDarkMode;
