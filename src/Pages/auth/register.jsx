import React, {useState} from 'react'
import {toast, ToastContainer} from "react-toastify";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";

const Register = ()=> {
    const c1 = "Angel0409";
    const [nombre,setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [username, setUsername] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if ([correo, password].includes('')) {
            toast.error("Por favor, rellene todos los campos.");
            return;
        }
        if (c1 === password) {
            toast.success("Registro exitoso.");
            setTimeout(() => {
                window.location.href = "/";
            }, 1500);
        } else {
            toast.error("La contraseña no es correcta.");
        }
    }
    return (
        <div>
            <ToastContainer/>
            <div className="bg-gray-50 w-full surface-card py-7 px-6 sm:px-8" style={{borderRadius: '15px'}}>
                <p className={"block text-900 text-xl font-medium mb-2"}>REGISTER</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre" className="block text-300 text-m font-medium mb-2">Nombre</label>
                    <InputText
                        id="nombre1"
                        type="text"
                        className="w-full mb-5 h-4rem p-2"
                        inputClassName="w-full p-5 md:w-30rem"
                        placeholder="Nombre de ejemplo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}/>
                    <label htmlFor="apellido" className="block text-300 text-m font-medium mb-2">Apellido</label>
                    <InputText
                        id="apellido1"
                        type="text"
                        className="w-full mb-5 h-4rem p-2"
                        inputClassName="w-full p-5 md:w-30rem"
                        placeholder="Apellido de ejemplo"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}/>
                    <label htmlFor="username" className="block text-300 text-m font-medium mb-2">Username</label>
                    <InputText
                        id="username1"
                        type="text"
                        className="w-full mb-5 h-4rem p-2"
                        inputClassName="w-full p-5 md:w-30rem"
                        placeholder="Nombre de ejemplo"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>

                    <label htmlFor="email1" className="block text-400 text-xl font-medium mb-2">Correo
                        Electrónico</label>
                    <InputText
                        id="email1"
                        type="text"
                        className="w-full mb-5 h-4rem p-2"
                        inputClassName="w-full p-5 md:w-30rem"
                        placeholder="Correo Electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}/>
                    <label htmlFor="contraseña1" className="block text-400 text-xl font-medium mb-2">
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
                        label="Registrarse"
                        className="p-2 bg-green-600 mr-7 rounded-lg text-white"
                        type="submit"
                    />
                    <a className="align-content-end text-blue-500" href={"/login"}>Iniciar Sesión</a>
                </form>
            </div>
        </div>
    )
}

export default Register