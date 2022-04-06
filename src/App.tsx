import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from 'views/Login'
import ResetPassword from 'views/ResetPassword'

function App() {
  return (
    <BrowserRouter>
      <Routes>     
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/reset-password' element={<ResetPassword />} />

        <Route path='/*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
