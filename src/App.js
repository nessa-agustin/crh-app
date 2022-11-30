// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import UserList from './pages/UserList';


function App() {

  let auth = localStorage.getItem("auth");

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        {
          auth &&
          <Route path='/list' element={<UserList />} />
        }
      </Routes>
    </Router>
  );
}

export default App;
