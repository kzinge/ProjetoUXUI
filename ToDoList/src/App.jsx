import './App.css'
import Children from './components/Children'
import Tarefas from './components/Tarefas'
import Change from './components/Change'

function App() {

  return (
    <>
    <Change></Change> {/*Dark mode */}
    <Children> {/*Container para as tarefas*/}
      <Tarefas></Tarefas> {/*tarefas*/}
    </Children>
    </>
  )
}

export default App
