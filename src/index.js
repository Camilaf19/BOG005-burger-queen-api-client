import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginView } from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProfile } from './components/AdminProfile';
import { WaiterProfile } from './components/WaiterProfile';
import { ChefProfile } from './components/ChefProfile';
import { OrdersReadyWaiter } from './components/OrdersReadyWaiter';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="profile/admin" element={<AdminProfile />} />
            <Route path="profile/chef" element={<ChefProfile />} />
        </Routes>
        <Routes>
            <Route path="/profile/waiter" index element={<WaiterProfile />} />
            <Route path="/profile/waiter/order/ready" element={<OrdersReadyWaiter />} />
        </Routes>
    </BrowserRouter>

);
