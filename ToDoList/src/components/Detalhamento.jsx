import React from "react";
import "./Detalhamento.css";

export default function Detalhamento({ tarefa, onClose }) { // detalhamento da tarefa, aqui ele recebe como parametro a tarefa e a função de fechar o detalhamento
  if (!tarefa) return null;

  return (
    <div className="destaque"> {/* é tipo uma pelicula (deixa o fundo mais escuro)*/}
      <div className="detalhamento">
        <h1>{tarefa.titulo}</h1>
        <p>{tarefa.descricao}</p>
        {/* Condicional para mostrar status da tarefa */}
        {tarefa.status ? (
          <span className="status concluida">Concluída</span> // Se status for true, mostra "Concluída"
        ) : (
          <>
            <span className="status pendente">Pendente</span> {/* Se status for false, mostra "Pendente" */}
          </>
        )}

        {/* Botão para fechar o detalhamento, chama a função onClose passada via props */}
        <button onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}

