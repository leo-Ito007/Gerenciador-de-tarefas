import './index.css';
import { useParams } from 'react-router-dom';
import contatos from '../../mook/contatos';

function ListarUmContato() {
    const {id} = useParams();

    const contato = contatos.find((item) => String(item.id) === String(id));

    if (!contato) {
        return <p>Contato não encontrado.</p>;
    }
    const {nome, email, mensagem, telefone, cidade} = contato;
    return (
        <section>
            <header>
                <h1>Listar contato</h1>
            </header>
            <div>
                <h2>#{id} - {nome}</h2>
                <p>Email: {email}</p>
                <p>Mensagem: {mensagem}</p>
                <p>Telefone: {telefone}</p>
                <p>Cidade: {cidade}</p>
            </div>
        </section>

    )
}
export default ListarUmContato;