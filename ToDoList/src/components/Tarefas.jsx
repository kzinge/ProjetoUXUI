import './Tarefas.css';
import Tarefa from "./Tarefa";
import Detalhamento from "./Detalhamento";
import { useState, useEffect } from "react";

export default function Tarefas({ listaDeTarefas, setListaDeTarefas }) {
  const [tarefasAux, setTarefasAux] = useState(listaDeTarefas);
  const [idSelecionado, setIdSelecionado] = useState(null);

  useEffect(() => {
    setTarefasAux(listaDeTarefas);
  }, [listaDeTarefas]);

  const tarefaSelecionada = tarefasAux.find(tarefa => tarefa.id === idSelecionado);

  const alterarStatus = (tarefaParaAlterar) => {
    const novasTarefas = tarefasAux.map((tarefa) =>
      tarefa.id === tarefaParaAlterar.id
        ? { ...tarefa, status: !tarefa.status }
        : tarefa
    );
    setListaDeTarefas(novasTarefas);
  };

  const deletarTarefa = (id) => {
    const novaLista = listaDeTarefas.filter(tarefa => tarefa.id !== id);
    setListaDeTarefas(novaLista);
  };


  const moverTarefa = (id, direcao) => {
  const indice = listaDeTarefas.findIndex(t => t.id === id);
  if ((indice === 0 && direcao === 'subir') || (indice === listaDeTarefas.length - 1 && direcao === 'descer')) {
    return;
  }

  const novaLista = [...listaDeTarefas];
  const tarefaMovida = novaLista.splice(indice, 1)[0];
  const novoIndice = direcao === 'subir' ? indice - 1 : indice + 1;
  novaLista.splice(novoIndice, 0, tarefaMovida);

  setListaDeTarefas(novaLista);
};


  return (
    <div className="tarefas-container">
      <h2>Lista de Tarefas</h2>

      <Detalhamento 
        tarefa={tarefaSelecionada} 
        onClose={() => setIdSelecionado(null)}
      />

      <div className="tarefas-lista">
        {tarefasAux.map(tarefa => (
          <div key={tarefa.id} className='tarefa-item'>
            <Tarefa 
              tarefa={tarefa}
              visualizar={() => setIdSelecionado(tarefa.id)}
              alterarstatus={() => alterarStatus(tarefa)}
              deletar={() => deletarTarefa(tarefa.id)}
              moverCima={() => moverTarefa(tarefa.id, 'subir')}
              moverBaixo={() => moverTarefa(tarefa.id, 'descer')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}