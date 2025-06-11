import React, { useState } from "react";
import './Tarefas.css'
import Tarefa from "./Tarefa";
import tarefasIniciais from "../tarefas";
import Detalhamento from "./Detalhamento";

export default function Tarefas() {
  // estado que armazena a lista de tarefas
  const [tarefasAux, setTarefas] = useState(tarefasIniciais);

  // estado que armazena o ID da tarefa selecionada para detalhamento
  const [idSelecionado, setIdSelecionado] = useState(null);

  // encontra a tarefa com o ID selecionado
  const tarefaSelecionada = tarefasAux.find(tarefa => tarefa.id === idSelecionado);

  // função para alterar o status da tarefa (concluir ou reabrir)
  const alterarStatus = (tarefaParaAlterar) => {
    const novasTarefas = tarefasAux.map((tarefa) =>
      tarefa.id === tarefaParaAlterar.id
        ? { ...tarefa, status: !tarefa.status } // Inverte o status atual
        : tarefa
    );
    setTarefas(novasTarefas); // atualiza a lista de tarefas
  };

  return (
    <div className="tarefas-container"> {/* container principal do componente */}
      <h2>Lista de Tarefas</h2>

      {/* mostra o detalhamento da tarefa selecionada */}
      <Detalhamento 
        tarefa={tarefaSelecionada} 
        onClose={() => setIdSelecionado(null)} // função para fechar o detalhamento
      />

      <div className="tarefas-lista"> {/* container da lista de tarefas */}
        {tarefasAux.map(tarefa => (
          <div key={tarefa.id}>
            <Tarefa 
              tarefa={tarefa} 
              alterarstatus={() => alterarStatus(tarefa)} // função passada para alterar status
              visualizar={() => setIdSelecionado(tarefa.id)} // seleciona tarefa para detalhamento
            />
          </div>
        ))}
      </div>
    </div>
  );
}
