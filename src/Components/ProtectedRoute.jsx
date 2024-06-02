import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../Services/AuthServices';

const ProtectedRoute = ({ element: Component }) => {
    return isAuthenticated() ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
