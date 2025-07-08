import './Tarefa.css';

export default function Tarefa({ tarefa, alterarstatus, visualizar, deletar, moverCima, moverBaixo }) {

  return (
    <div className="tarefa">
      <h3>{tarefa.titulo}</h3>
      <p>
        {tarefa.descricao.length > 50 
          ? tarefa.descricao.slice(0, 50) + "..." 
          : tarefa.descricao}
      </p>

      {tarefa.status ? (
        <>
          <span className="status concluida">Concluída</span>
          <div className="butoes">
            <button onClick={alterarstatus}>Reabrir Tarefa</button> 
            <button onClick={visualizar}>Visualizar</button>
            <button onClick={deletar}>Deletar</button>
            {/* Botões de movimentação */}
            <button onClick={moverCima} title="Mover para cima">↑</button>
            <button onClick={moverBaixo} title="Mover para baixo">↓</button>
          </div>
        </>
      ) : (
        <>
          <span className="status pendente">Nova Tarefa</span>
          <div className="butoes">
            <button onClick={alterarstatus}>Concluir Tarefa</button> 
            <button onClick={visualizar}>Visualizar</button>
            <button onClick={deletar}>Deletar</button>
            {/* Botões de movimentação */}
            <button onClick={moverCima} title="Mover para cima">↑</button>
            <button onClick={moverBaixo} title="Mover para baixo">↓</button>
          </div>
        </>
      )}
    </div>
  );
}