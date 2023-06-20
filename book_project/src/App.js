import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import Booklist from './landing/Booklist';
import Abstract from './landing/Abstract';
import AbstractDetail from './landing/AbstractDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/booklist/' element={<Booklist />} />
        <Route path='/abstract/' element={<Abstract />} />
        <Route path='/abstract/:abstractID' element={<AbstractDetail />} />
      </Routes>
    </Router>
  );
}


export default App;
