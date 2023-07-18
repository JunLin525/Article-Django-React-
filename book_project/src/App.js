import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext'
import Landing from './landing/Landing';
import Booklist from './landing/Booklist';
import Abstract from './landing/Abstract';
import AbstractDetail from './landing/AbstractDetail';
import Login from './landing/Login';
import CommentDetail from './landing/CommentDetail';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute isLogged={true} />}>
            <Route path="/" element={<Landing />} />
          </Route>
          <Route element={<PrivateRoute isLogged={true} />}>
            <Route path='/booklist/' element={<Booklist />} />
          </Route>
          <Route element={<PrivateRoute isLogged={true} />}>
            <Route path='/abstract/' element={<Abstract />} />
          </Route>
          <Route element={<PrivateRoute isLogged={true} />}>
            <Route path='/commentDetail/:commentID' element={<CommentDetail />} />
          </Route>
          <Route path='/abstract/:abstractID' element={<AbstractDetail />} />
          <Route path='/login/' element={<Login />} />


        </Routes>
      </AuthProvider>
    </Router>
  );
}


export default App;
