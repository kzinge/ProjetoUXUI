import './Tarefas.css';
import Tarefa from "./Tarefa";
import Detalhamento from "./Detalhamento";
import { useState, useEffect } from "react";

export default function Tarefas({ listaDeTarefas }) {
  const [tarefasAux, setTarefasAux] = useState(listaDeTarefas); // cópia local
  const [idSelecionado, setIdSelecionado] = useState(null);

  // atualiza tarefas locais sempre que a lista vinda do App mudar
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
    setTarefasAux(novasTarefas);
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
          <div key={tarefa.id}>
            <Tarefa 
              tarefa={tarefa}
              visualizar={() => setIdSelecionado(tarefa.id)}
              alterarstatus={() => alterarStatus(tarefa)} // função adicionada aqui
            />
          </div>
        ))}
      </div>
    </div>
  );
}
