import { useInput } from '../../hooks/useinput';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Form, Input, Button } from './styles';

function Login(){
    const nomeDoUsuario = useInput();
    const {setUsuario} = useContext(UserContext)!;

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //validar
        setUsuario({nome: nomeDoUsuario.valor, estaLogado: true});
    }
    return(
        <Form onSubmit={(handleLogin)}>
            <Input type="text"
            placeholder="Digite seu nome"
            value={nomeDoUsuario.valor}
            onChange={nomeDoUsuario.onChange}/>
            <Button type="submit">Entrar</Button>
        </Form>
    )
}
export default Login;