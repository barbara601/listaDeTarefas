import { useState } from 'react';
import ListaTarefas from './components/ListaTarefas';
import Login from './components/Login';
import { UserContext } from './contexts/UserContext';

function App() {

  const [usuario, setUsuario] = useState({nome: '', estaLogado: false});

  return (
    <UserContext.Provider value={{usuario, setUsuario}}>
    <main>
      <h1>{usuario.nome}'s To-Do List</h1>
      {usuario.estaLogado ? <ListaTarefas/> : <Login/>}
      
    </main>
    </UserContext.Provider>
  )
}

export default App
