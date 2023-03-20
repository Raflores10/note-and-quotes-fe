import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";
import Login from "./pages/Login"
import Register from "./pages/Register";
import React, {useState} from 'react';
import Logout from "./pages/Logout";

function App() {

  return(
    <>

  <BrowserRouter>
    <Navigation />

      <Routes>
        <Route path="/profile/" element={<Profile/>}/>
        <Route path="/login/" element={<Login/>}/>
        <Route path="/register/" element={<Register/>}/>
        <Route path="/logout/" element={<Logout/>}/>
        <Route />

        <Route />

      </Routes>
    </BrowserRouter>
    </>
);
}

export default App;


