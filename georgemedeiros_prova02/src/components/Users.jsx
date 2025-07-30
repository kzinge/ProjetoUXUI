import { useState, useEffect } from 'react';
import './Users.css';

export default function Users() {
  const [idDoFiltro, setIdDoFiltro] = useState('');
  const [estaCarregando, setEstaCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [atualizar, setAtualizar] = useState(0);
  const [usersFiltrados, setUsersFiltrados] = useState([]);

  useEffect(() => {
    const buscarUsers = async () => {
      setEstaCarregando(true);
      setErro(null);

      try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos');

        const dados = await resposta.json();
        const filtrados = idDoFiltro === ''
          ? dados
          : dados.filter(user => user.userId === Number(idDoFiltro));

        setUsersFiltrados(filtrados);
      } catch (erro) {
        setErro(erro.message);
      } finally {
        setEstaCarregando(false);
      }
    };

    buscarUsers();
  }, [idDoFiltro, atualizar]);

  return (
    <div>
      <h1>Usuários</h1>

      <input
        type="number"
        placeholder="ID do usuário"
        value={idDoFiltro}
        onChange={(e) => setIdDoFiltro(e.target.value)}
      />

      <button onClick={() => setAtualizar(a => a + 1)}>
        Atualizar Lista
      </button>

      {estaCarregando && <p>Carregando...</p>}
      {erro && <p>Erro: {erro}</p>}

      {!estaCarregando && !erro && (
        usersFiltrados.length === 0 && idDoFiltro !== '' ? (
          <p>Nenhum usuário encontrado"{idDoFiltro}".</p>
        ) : (
          usersFiltrados.map(user => (
            <div className='users'>
              <div key={user.id} className='user'>
                <h3>Título: {user.title}</h3>
                <p>Usuário: {user.userId}</p>
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
}