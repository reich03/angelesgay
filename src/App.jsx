import './App.css';
import React from 'react';
import { Error404 } from "./Pages/Error404.jsx";
import Register from "./Pages/auth/register.jsx";
import AuthLayout from "./Layouts/AuthLayout.jsx";
import Login from "./Pages/auth/login.jsx";
import Home from "./Pages/admin/Home.jsx";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Product from "./Pages/admin/Product.jsx";
import FormProduct from "./Pages/admin/FormProduct.jsx";
import ActualizarProduct from "./Pages/admin/ActualizarProduct.jsx";
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import { isAuthenticated } from './Services/AuthServices.js';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={isAuthenticated() ? <Navigate to="/" /> : <AuthLayout />}>
                  <Route index element={<Login />} />
                  <Route path="registro" element={<Register />} />
              </Route>
              <Route path="/" element={<ProtectedRoute element={Home} />} />
              <Route path="/product" element={<ProtectedRoute element={Product} />} />
              <Route path="/crearProducto" element={<ProtectedRoute element={FormProduct} />} />
              <Route path="/updateProduct" element={<ProtectedRoute element={ActualizarProduct} />} />
              <Route path="*" element={<Error404 />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
