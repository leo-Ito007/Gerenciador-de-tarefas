import{BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';
import ListarTarefas from './paginas/Home/ListarTarefas';
import ListarUmaTarefa from './paginas/Home/ListarUmaTarefa';
import CadastrarTarefa from './paginas/CadastrarTarefa';


function App() {
  return (
   <BrowserRouter>
   <Header />
   <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />      
      <Route path="/Tarefa" element={<ListarTarefas/>} />
      <Route path="/Tarefa/:id" element={<ListarUmaTarefa/>} />
      <Route path="/cadastrarTarefa" element={<CadastrarTarefa/>} />

    </Routes>
   </main>
   <Footer />
   </BrowserRouter>  
  );
}

export default App;
