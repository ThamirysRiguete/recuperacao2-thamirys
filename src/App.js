import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Produto from './pages/Produto';
import CadastroProduto from './pages/CadastroProduto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<CadastroProduto/>}/>
          <Route path='/produto' element={<Produto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
