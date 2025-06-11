import './Tarefa.css';

export default function Tarefa({ tarefa, alterarstatus, visualizar }) {
  return (
    <div className="tarefa">
      <h3>{tarefa.titulo}</h3>
      {/* exibe a descrição da tarefa, limitando a 50 caracteres e adicionando "..." se maior */}
      <p>
        {tarefa.descricao.length > 50 
          ? tarefa.descricao.slice(0, 50) + "..." 
          : tarefa.descricao}
      </p>
      {/* condicional para verificar o status da tarefa */}
      {tarefa.status ? (
        <>
          <span className="status concluida">Concluída</span> {/* se a tarefa está concluída */}

          <div className="butoes"> {/* container dos botões */}
            {/* botão para reabrir a tarefa, chama a função alterarstatus */}
            <button onClick={alterarstatus}>Reabrir Tarefa</button> 
            {/* botão para visualizar detalhes da tarefa */}
            <button onClick={visualizar}>Visualizar</button>
          </div>
        </>
      ) : (
        <>
          <span className="status pendente">Pendente</span> {/* se a tarefa está pendente */}

          <div className="butoes"> {/* container dos botões */}
            {/* botão para concluir a tarefa, chama a função alterarstatus */}
            <button onClick={alterarstatus}>Concluir Tarefa</button> 
            {/* botão para visualizar detalhes da tarefa */}
            <button onClick={visualizar}>Visualizar</button>
          </div>
        </>
      )}
    </div>
  );
}
