import { memo } from 'react';

function Tarefa({ texto, concluida, onToggle, onRemove }: any) {

  console.log('Render tarefa:', texto);

  return (
    <li>
      <input 
        type="checkbox" 
        checked={concluida} 
        onChange={onToggle} 
      />

      <span className={concluida ? 'concluida' : ''}>
        {texto}
      </span>

      <button onClick={onRemove}>Remover</button>
    </li>
  );
}

export default memo(Tarefa);