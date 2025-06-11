import React, { useEffect, useState } from 'react';
import "./Change.css"

export default function Change() { // Criei a função aqui
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const auxDarkMode = !darkMode;
    setDarkMode(auxDarkMode)

    if (auxDarkMode){
      document.body.classList.add("dark-mode");
    } else{
      document.body.classList.remove("dark-mode")
    };
  }

  return (
    <div>
      <button
        onClick={toggleTheme}
      >
        Alternar Modo
      </button>
    </div>
  );
}