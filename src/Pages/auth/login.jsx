import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "../../Services/AuthServices.js";
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../Services/AuthServices.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([email, password].includes('')) {
            toast.error("Por favor, rellene todos los campos.");
            return;
        }
        try {
            const apiResponse = await login(email, password);
            console.log("Bienvenido: " + apiResponse['userId']);

            Cookies.set('user', JSON.stringify(apiResponse.user), { expires: 1 });

            Swal.fire({
                title: 'Inicio de sesión exitoso',
                text: `Bienvenido, ${apiResponse.user.name}`,
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/');
            });

        } catch (e) {
            console.log(e);
            toast.error("Error al iniciar sesión.");
        }
    };

    return (
        <div>
            <ToastContainer />
            <div className="w-full px-6 bg-gray-50 surface-card py-7 sm:px-8" style={{ borderRadius: '15px' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email1" className="block mb-2 text-xl font-medium text-900">
                        Correo Electrónico
                    </label>
                    <InputText
                        id="email1"
                        type="text"
                        className="w-full p-2 mb-5 h-4rem"
                        inputClassName="w-full p-5 md:w-30rem"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="contraseña1" className="block mb-2 text-xl font-medium text-900">
                        Contraseña
                    </label>
                    <Password
                        className="w-full mb-5"
                        inputClassName="w-full p-2 md:w-30rem"
                        inputId="contraseña1"
                        value={password}
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        label="Iniciar Sesión"
                        className="p-2 text-white bg-green-600 rounded-lg mr-7"
                        type="submit"
                    />
                    <a className="text-blue-500 align-content-end" href={"login/registro"}>Registrarse</a>
                </form>
            </div>
        </div>
    );
}

export default Login;
