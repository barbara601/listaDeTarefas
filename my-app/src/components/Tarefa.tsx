import { memo } from 'react';
import styled from 'styled-components';

const Item = styled.li`
  background: #f7f7f7;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;`

const Button = styled.button`
  margin-left: 8px;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:first-child {
  background: #48bb78;
  color: white;
  }
`;

const ButtonRemove = styled(Button)`
  background: #d81e1e;
  color: white;

  &:hover {
    background: #c01a1a;
  }
`;
interface TextoProps {
  $concluida: boolean;
};

const TextoItem = styled.span<TextoProps>`
  text-decoration: ${({$concluida}) => $concluida ? "line-through" : "none"};
  color: ${({$concluida}) => ($concluida ? "gray" : "#000")};
`;

function Tarefa({ texto, concluida, onToggle, onRemove }: any) {

  console.log('Render tarefa:', texto);

  return (
    <Item>
      <input 
        type="checkbox" checked={concluida} onChange={onToggle} />
        <TextoItem $concluida={concluida}>{texto}</TextoItem>
        <ButtonRemove onClick={onRemove}>Remover</ButtonRemove>
    </Item>
  );
}

export default memo(Tarefa);