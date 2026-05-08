//App.jsx :
import React from "react";
import { Routes,Route} from "react-router-dom";
 
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
 
import "./App.css";
 
function App(){                                                                                                                               
 
  return (
      <Routes>
 
        <Route path="/" element={<Register />}/>
 
        <Route path="/login" element={<Login />}/>
 
        <Route path="/chat" element={<Chat />}/>
 
      </Routes>
 
  );
 
};
 
export default App;

