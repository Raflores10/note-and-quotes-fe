import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register";
// import React, {useState} from 'react';


function App() {

  return(
    <>

  <BrowserRouter>
    <Navigation />

      <Routes>
        <Route path="/profile/" element={<Profile/>}/>
        <Route path="/home/" element={<Home/>}/>
        <Route path="/login/" element={<Login/>}/>
        <Route path="/register/" element={<Register/>}/>

        <Route />
        <Route />

        <Route />

      </Routes>
    </BrowserRouter>
    </>
);
}

export default App;


