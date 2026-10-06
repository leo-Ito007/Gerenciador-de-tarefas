import './index.css';
import { useState } from 'react';
function Contato() {
    const{nome, setNome} = useState('');
    const{email, setEmail} = useState('');
    const{descricao, setDescricao} = useState('');

function contato(e) {
    e.preventDefault();
    console.log('nome: ' + nome);
    console.log('email: ' + email);
    console.log('Descrição: ' + descricao);
}

    return (
        <main>
            <header>
                <h1>Entre em contato conosco!</h1>
            </header>
        <section>
            <p>Entre com todos os campos!!!</p>
            <div className='formulario'>
                <form on Submit={contato}>
                    <label>Nome</label>
                    <input type="text" name={nome} onChange={e=>setNome(e.target.value)} />

                     <label>Email</label>
                    <input type="email" name={email} onChange={e=>setEmail(e.target.value)} />
                     
                     <label>Mensagem</label>
                    <textarea value={descricao} onChange={e=>setDescricao(e.target.value)} />

                    <button type="submit">Enviar</button>

                </form>
            </div>
        </section>
        </main>
    );
}


export default Contato;