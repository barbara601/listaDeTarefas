import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: 0.2s;
  &:focus{
  border-color: #667eea;
  }
`;
export const Button = styled.button`
  padding: 10px 15px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
  background: #5a67d8;
  }
`;