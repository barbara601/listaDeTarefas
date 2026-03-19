import {useState} from 'react';
import type {ChangeEvent} from 'react';

export function useInput(valorInicial = ''){

    const [valor, setValor] = useState(valorInicial);
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValor(e.target.value);
    }

    const limpar = () => setValor('');

    return {valor, onChange, limpar};
}