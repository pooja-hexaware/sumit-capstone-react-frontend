import logo from '../assets/logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../assets/App.css';
import '../assets/style.css';
import Root from './main/root';
import FindStore from './main/findStore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FindStore />}></Route>
        <Route path="store/:id" element={<Root />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
