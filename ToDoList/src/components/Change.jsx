import React, { useEffect, useState } from 'react';
import "./Change.css"

export default function Change() { // Criei a função aqui
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) { // Caso darkmode for ativado ele adiciona a classe dark-mode
      document.body.classList.add("dark-mode");
    } else { // se for desativado, ele tira essa classe
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        Alternar Modo
      </button>
    </div>
  );
}