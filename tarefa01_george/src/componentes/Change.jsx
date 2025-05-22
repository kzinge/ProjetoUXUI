import React, { useEffect, useState } from 'react';

export default function Change() {
  const [darkMode, setDarkMode] = useState(false);
  let body = document.body

  useEffect(() => {
    if (darkMode) {
      body.style.background = "black"
      document.querySelectorAll('p').forEach(p => {
        p.style.color = "white";
      });

      document.querySelectorAll('h1').forEach(h1 => {
        h1.style.color = "white"
      })

    } else {
      body.style.background = "white"

      document.querySelectorAll('p').forEach(p => {
        p.style.color = "black";
      });

      document.querySelectorAll('h1').forEach(h1 => {
        h1.style.color = "black"
      })
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition bg-white dark:bg-gray-900 text-black dark:text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Modo {darkMode ? 'Escuro' : 'Claro'}</h1>
      <button
        className="px-4 py-2 bg-gray-800 text-white dark:bg-yellow-300 dark:text-black rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        Alternar Modo
      </button>
    </div>
  );
}
