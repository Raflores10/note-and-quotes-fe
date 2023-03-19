import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import React, {useState} from 'react';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return(
    <>
    <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>

  <BrowserRouter>
    <Navigation />

      <Routes>
        <Route path="/profile/" element={<Profile/>}/>
        <Route path="/login/" element={<Login/>}/>
        <Route />
        <Route />

        <Route />

      </Routes>
    </BrowserRouter>
    </>
)};

export default App;


