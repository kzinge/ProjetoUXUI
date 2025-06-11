import './App.css' //css do app
import Click from './components/Click' // botoes de cliques
import Carros from './components/Carros' // carros
import CarroFiltrado from './components/CarroFiltrado' // carros filtrados
function App() {
  

  return (
    <>
    <h1>Prova de PIU</h1>
    <Click></Click>
    <br />
    <h1>Nossos Carros:</h1>
    <Carros></Carros>
    <br />
    <h1>Carros mais recentes</h1>
    <CarroFiltrado></CarroFiltrado>
    </>
  )
}

export default App
