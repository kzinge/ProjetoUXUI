import React, { useEffect, useState } from 'react';

export default function Change() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
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
