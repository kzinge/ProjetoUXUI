import './App.css';
import Children from './components/Children';
import Tarefas from './components/Tarefas';
import Change from './components/Change';
import NewTask from './components/NewTask';
import { useState } from 'react';

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([]);

  return (
    <>
      <Change />
      <NewTask 
        listaDeTarefas={listaDeTarefas} 
        setListaDeTarefas={setListaDeTarefas} 
      />
      <Children>
        <Tarefas listaDeTarefas={listaDeTarefas} />
      </Children>
    </>
  );
}

export default App;
