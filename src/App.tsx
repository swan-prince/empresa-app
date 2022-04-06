import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from 'components/MainLayout'
import AuthLayout from 'components/AuthLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>       
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path='/admin/*' element={<MainLayout />} />
        {/* <Route path='/*' element={<AuthLayout />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
