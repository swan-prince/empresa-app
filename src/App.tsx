import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from 'views/Login'
import ResetPassword from 'views/ResetPassword'
import Requests from 'views/Requests'
import Statistics from 'views/Statistics'
import Profile from 'views/Profile'
import Clients from 'views/Clients'
import EditOffer from 'views/EditOffer'
import AddOffer from 'views/AddOffer'
import Dashboard from 'views/Dashboard'
import RequestDetail from 'views/RequestDetail'
import ClientDetail from 'views/ClientDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/reset-password' element={<ResetPassword />} />
        <Route path='/admin/requests/:id' element={<RequestDetail />} />
        <Route path="/admin/requests" element={<Requests />} />
        <Route path="/admin/statistics" element={<Statistics />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path='/admin/clients/:id' element={<ClientDetail />} />
        <Route path='/admin/clients' element={<Clients />} />
        <Route path='/admin/edit-offer' element={<EditOffer />} />
        <Route path='/admin/add-offer' element={<AddOffer />} />
        <Route path="/admin/welcome" element={<Dashboard />} />
        <Route path='/*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
