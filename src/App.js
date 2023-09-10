import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import AdminLogin from './components/AdminLogin/AdminLogin'
import UserLogin from './components/UserLogin/UserLogin';
import UserSignUp from './components/UserSignUp/UserSignup';
import AddUser from './components/AddUser/AddUser'
import {Route} from "react-router-dom"
import {Routes} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser/>} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
