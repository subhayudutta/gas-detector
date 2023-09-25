import React from "react";
import "./style.css"
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forgetpass from "./components/Forgetpass";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import OpenPage from "./components/OpenPage";



function Important() {
    return ( 
        <div>
      <div>
      <UserAuthContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget" element={<Forgetpass />} />
            <Route path="/imp" element={<Important />} />
          </Routes>
        </UserAuthContextProvider>
        
      </div>
    </div>
     );
}

export default Important;