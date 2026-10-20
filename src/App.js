import{BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import Home from './paginas/Home';
import Contato from './paginas/CadastraContato';
import Sobre from './paginas/Sobre';
import ListarTarefas from './paginas/ListarTarefas';
import ListarUmaTarefa from './paginas/ListarUmaTarefa';
import CadastrarTarefa from './paginas/CadastrarTarefa';
import ListarUmContato from './paginas/ListarUmContato';
import ListarContatos from './paginas/ListarContatos';
import CadastrarContato from './paginas/CadastraContato';



function App() {
  return (
   <BrowserRouter>
   <Header />
   <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />      
      <Route path="/tarefas" element={<ListarTarefas/>} />
      <Route path="/tarefa/:id" element={<ListarUmaTarefa/>} />
      <Route path="/cadastrarTarefa" element={<CadastrarTarefa/>} />
      <Route path="/contatos" element={<ListarContatos/>} />
      <Route path="/contato/:id" element={<ListarUmContato/>} />
      <Route path="/cadastrarContato" element={<CadastrarContato/>} />

    </Routes>
   </main>
   <Footer />
   </BrowserRouter>  
  );
}

export default App;
