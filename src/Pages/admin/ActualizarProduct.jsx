import React, {useState} from 'react'
import {toast, ToastContainer} from "react-toastify";
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {Button} from "primereact/button";
import Header from "../../Components/header.jsx";
import {login} from "../../Services/AuthServices.js";

const ActualizarProduct = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [imagen, setImagen] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imagePath = `src/Pages/admin/images/${file.name}`;
            setImagen(imagePath);
            console.log(imagen);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes agregar la lógica para guardar los datos incluyendo la imagen

        toast.success("Registro exitoso.");
        setTimeout(() => {
            window.location.href = "/";
        }, 1500);
    }

    const handleDelete =  () =>{
        const response = "1234"
        toast.success("Producto Eliminado")
        setTimeout(() => {
            window.location.href = "/";
        }, 1500);
        //const response = await login("asdf", 1234);
        console.log(response)
    }

    return (
        <div>
            <Header/>
            <div className="p-12 bg-gray-300"></div>
            <div className="bg-gray-300 min-h-screen flex items-center justify-center p-6">
                <div>
                    <ToastContainer/>
                    <div className="bg-gray-50 w-full surface-card py-7 px-6 sm:px-8" style={{borderRadius: '15px'}}>
                        <p className="block text-900 text-xl font-medium mb-2">CREAR PRODUCTO</p>
                        <form>
                            <label htmlFor="nombre" className="block text-300 text-m font-medium mb-2">Nombre
                                Producto</label>
                            <InputText
                                id="nombre1"
                                type="text"
                                className="w-full mb-5 h-4rem p-2"
                                inputClassName="w-full p-5 md:w-30rem"
                                placeholder="Nombre de ejemplo"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <label htmlFor="descripcion" className="block text-300 text-m font-medium mb-2">Descripción
                                producto</label>
                            <InputText
                                id="descripcion1"
                                type="text"
                                className="w-full mb-5 h-4rem p-2"
                                inputClassName="w-full p-5 md:w-30rem"
                                placeholder="Descripción de ejemplo"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                            <label htmlFor="precio" className="block text-300 text-m font-medium mb-2">Precio</label>
                            <InputNumber
                                id="precio1"
                                className="w-full mb-5 h-4rem p-2"
                                inputClassName="w-full p-2 md:w-30rem"
                                placeholder="Precio"
                                value={precio}
                                onChange={(e) => setPrecio(e.value)}
                            />
                            <label htmlFor="cantidad"
                                   className="block text-400 text-xl font-medium mb-2">Cantidad</label>
                            <InputNumber
                                id="cantidad1"
                                className="w-full mb-5 h-4rem p-2"
                                inputClassName="w-full p-2 md:w-30rem"
                                placeholder="Cantidad"
                                value={cantidad}
                                onChange={(e) => setCantidad(e.value)}
                            />
                            <label htmlFor="archivo1" className="block text-400 text-xl font-medium mb-2">Imagen</label>
                            <input
                                type="file"
                                onInput={handleImageChange}
                            /><br/><br/>
                            <Button
                                label="Registrar"
                                className="p-2 bg-green-600 mr-7 rounded-lg text-white"
                                type="submit"
                                onSubmit={handleSubmit}
                            />
                            <Button
                                label="Eliminar"
                                className="p-2 bg-red-600 mr-7 rounded-lg text-white"
                                type="submit"
                                onSubmit={handleDelete}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActualizarProduct;
