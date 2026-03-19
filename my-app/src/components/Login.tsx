import { useInput } from '../hooks/useinput';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function Login(){
    const nomeDoUsuario = useInput();
    const {setUsuario} = useContext(UserContext)!;

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //validar
        setUsuario({nome: nomeDoUsuario.valor, estaLogado: true});
    }
    return(
        <form onSubmit={(handleLogin)}>
            <input type="text"
            placeholder="Digite seu nome"
            value={nomeDoUsuario.valor}
            onChange={nomeDoUsuario.onChange}/>
            <button type="submit" className="botao">Entrar</button>
        </form>
    )
}
export default Login;