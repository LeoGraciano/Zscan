import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import UF from './pages/UF';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/estados/' element={<Home />} />
          <Route path='/estados/sp' element={<UF uf="sp" />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
