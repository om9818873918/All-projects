import "./App.css";
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from './pages/Signup'
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App()  {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (


    <div className="w-screen h-screen bg-richblack-900 flex flex-col  ">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

   
    </div>
  );
}

export default App;
