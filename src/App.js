import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import AdminLogin from './components/AdminLogin/AdminLogin'
import UserLogin from './components/UserLogin/UserLogin';
import UserSignUp from './components/UserSignUp/UserSignup';
import EmployeeList from './components/EmployeeList';
import AddUser from './components/AddUser/AddUser'
import {Route} from "react-router-dom"
import {Routes} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList/>} />
        <Route path="/AddUser" element={<AddUser/>} />
        <Route path="/AdminLogin" element={<AdminLogin/>} />
        <Route path="/UserLogin" element={<UserLogin/>} />
        <Route path="/UserSignUp" element={<UserSignUp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
