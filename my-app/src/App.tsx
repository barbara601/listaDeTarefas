import { useState } from 'react';
import ListaTarefas from './components/ListaTarefas';
import Login from './components/Login';
import { UserContext } from './contexts/UserContext';
import styles from './App.module.css';

function App() {

  const [usuario, setUsuario] = useState({nome: '', estaLogado: false});

  return (
    <UserContext.Provider value={{usuario, setUsuario}}>
    <main className={styles.main}>
      <h1 className={styles.title}>{usuario.nome}'s To-Do List</h1>
      {usuario.estaLogado ? <ListaTarefas/> : <Login/>}
    </main>
    </UserContext.Provider>
  )
}

export default App
