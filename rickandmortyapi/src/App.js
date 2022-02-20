import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Listado from './pages/Listado';
import Busqueda from './pages/Busqueda';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/listado' element={<Listado/>}  />
          <Route path='/busqueda' element={<Busqueda/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
