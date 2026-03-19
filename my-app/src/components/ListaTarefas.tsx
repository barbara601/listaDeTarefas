
import { useContext, useEffect, useState, useMemo } from 'react';
import Tarefa from './Tarefa'
import { useInput } from '../hooks/useinput';
import { UserContext } from '../contexts/UserContext';
import './ListaTarefas.css';

const API_URL = 'https://crudcrud.com/api/b2a3957cbf8443d6857adf9fe3a4235e/tarefas';

function ListaTarefas() {
    type TarefaType = {
        _id: string;
        usuario: string;
        texto: string
        concluida: boolean;
    }
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);
  const tarefa = useInput();
  const {usuario} = useContext(UserContext)!;

  const [filtro, setFiltro] = useState<'todas' | 'pendentes' | 'concluidas'>('todas');

  const removerTarefa = (id: string) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setTarefas(prev => prev.filter(tarefa => tarefa._id !== id));
    })
    .catch(error => console.error("Erro ao remover tarefa:", error));
  }

  const alternarConcluida = (_id: string) => {
  const tarefaAtual = tarefas.find(t => t._id === _id);
  if (!tarefaAtual) return;

  const { _id: _, ...semId } = tarefaAtual;

  const atualizada = {
    ...semId,
    concluida: !tarefaAtual.concluida
  };

  fetch(`${API_URL}/${_id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(atualizada)
  })
  .then(() => {
    setTarefas(prev => prev.map(tarefa => tarefa._id === _id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa));
  })
  .catch(error => console.error("Erro ao atualizar tarefa:", error));
}

  const tarefasFiltradas = useMemo(() => {
    return tarefas
    .filter(tarefa => tarefa.usuario === usuario.nome)
    .filter(tarefa => {
      if (filtro === 'pendentes') return !tarefa.concluida;
      if (filtro === 'concluidas') return tarefa.concluida;
      return true;
    });
  }, [tarefas, usuario.nome, filtro]);

  //buscar os dados na api quando o componente for montado
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error("Erro ao buscar tarefas:", error));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (tarefa.valor === '') return;
    //envio da tarefa para a api
    const nova = {usuario: usuario.nome, texto: tarefa.valor, concluida: false}
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(nova)
    })
    .then(res => res.json())
    .then(tarefaCriada => {
      setTarefas([...tarefas, tarefaCriada]);
      tarefa.limpar();
    })
    .catch(error => console.error("Erro ao buscar tarefas:", error));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite uma nova tarefa"
        value = {tarefa.valor}
        onChange = {tarefa.onChange}
        />
        <button type="submit" className="botao">Adicionar</button>
      </form>
      <div className="filtros">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('concluidas')}>Concluídas</button>
        <button onClick={() => setFiltro('pendentes')}>Pendentes</button>
      </div>
      <ul>
        {tarefasFiltradas.map(tarefa => <Tarefa key={tarefa._id} texto={tarefa.texto} concluida={tarefa.concluida} onToggle={() => alternarConcluida(tarefa._id)} onRemove={() => removerTarefa(tarefa._id)} />)}
      </ul>
      
    </>
  )
}

export default ListaTarefas;
