import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Admin from "./screens/admin/Admin";
import AdminLogin from "./screens/admin/Login";
import AdminPage from "./screens/admin/Page";

import Splash from "./screens/Splash";

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-page" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
