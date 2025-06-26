import { useState } from "react";

export default function NewTask({ listaDeTarefas, setListaDeTarefas }) {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nova = {
      id: Date.now(), 
      titulo: novaTarefa,
      descricao: descricao,
      status: true,
    };

    setListaDeTarefas([...listaDeTarefas, nova]);
    setNovaTarefa('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <h3>Nova Tarefa</h3>
          <input
            type="text"
            onChange={(e) => setNovaTarefa(e.target.value)}
            value={novaTarefa}
            placeholder="Nova Tarefa"
          />
          <textarea
            onChange={(e) => setDescricao(e.target.value)}
            value={descricao}
            placeholder="Faça sua descrição..."
          ></textarea>
          <input type="submit" value="Criar" />
        </label>
      </div>
    </form>
  );
}
