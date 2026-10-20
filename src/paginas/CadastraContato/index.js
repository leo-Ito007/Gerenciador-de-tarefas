import './index.css';
import contatos from '../../mook/contatos';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CadastrarContato() {
    const navigate = useNavigate();
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[telefone, setTelefone] = useState('');
    const[cidade, setCidade] = useState('');
    const[mensagem, setMensagem] = useState('');
    const [error, setError] = useState('');

    function contato(e){
        e.preventDefault()
        if(!nome.trim()){
            setError('O campo nome é obrigatório');
            return;
        }
        if(!email.trim()){
            setError('O campo email é obrigatório');
            return;
        }
        if(!mensagem.trim()){
            setError('O campo mensagem é obrigatório');
            return;
        }
        if(!telefone.trim()){
            setError('O campo telefone é obrigatório');
            return;
        }
        if(!cidade.trim()){
            setError('O campo cidade é obrigatório');
            return;
        }

try{


    const addContato = {
        'id': contatos.length + 1,
        'nome': nome,
        'email': email,
        'mensagem': mensagem,
        'telefone': telefone,
        'cidade': cidade
    }
 contatos.push(addContato);
setNome('');
setEmail('');
setTelefone('');
setCidade('');
setMensagem('');

navigate(-1);
    }catch{
        console.log("Erro ao cadastrar contato" + error)

    }
    }
    return (
        <main>
            <section>
                {
                    error && (
                        <div className='error'>
                            <p className='TextoError'>{error}</p>
                        </div>
                    )
                }
            <header>
                <h1>Entre em contato conosco!</h1>
            </header>
            <p>Entre com todos os campos!!!</p>
            <div className='formulario'>
                <form onSubmit={contato}>
                    <label>Nome</label>
                    <input type="text" name={nome} onChange={e=>setNome(e.target.value)} />

                     <label>Email</label>
                    <input type="email" name={email} onChange={e=>setEmail(e.target.value)} />
                     
                    <label>Mensagem</label>
                    <textarea type="text" name={mensagem} onChange={e=>setMensagem(e.target.value)} />

                    <label>telefone</label>
                    <input type="text" name={telefone} onChange={e=>setTelefone(e.target.value)} />

                    <label>cidade</label>
                    <input type="text" name={cidade} onChange={e=>setCidade(e.target.value)} />

                    <button type="submit">Enviar</button>

                </form>
            </div>
        </section>
        </main>
    );
}


export default CadastrarContato;
