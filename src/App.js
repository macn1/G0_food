
import './App.css';

import Home from './Screen/Home';
import {
  BrowserRouter,
  
  Route,
  Routes,
} from "react-router-dom";
import Login from './Screen/Login';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './Screen/Signup';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/createuser" element={<Signup/>} />

    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
