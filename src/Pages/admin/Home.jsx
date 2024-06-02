import React, { useState } from 'react';
import { login } from "../../Services/AuthServices.js";
import {Button} from "primereact/button";
import Header from "../../Components/header.jsx";

const Home = () => {
    const productos = [
        { name: 'Tomate', price: 1500, image: 'src/Pages/admin/images/tomate.jpg' },
        { name: 'Arbejas', price: 500, image: 'src/Pages/admin/images/arbejas.jpg' },
        { name: 'Lechugas', price: 700, image: 'src/Pages/admin/images/lechuga.jpg' },
        { name: 'Tomate', price: 1500, image: 'src/Pages/admin/images/tomate.jpg' },
        { name: 'Arbejas', price: 500, image: 'src/Pages/admin/images/arbejas.jpg' },
        { name: 'Lechugas', price: 700, image: 'src/Pages/admin/images/lechuga.jpg' }
    ];



    const handleFunctionClick = async () => {
        try {
            const apiResponse = await login();
            console.log(apiResponse);
            setNombre(apiResponse.name);
        } catch (e) {
            console.log("error");
        }
    };

    return (
        <div>
            <Header></Header>
            <div className="p-12 bg-gray-100 "></div>
            <div className="bg-gray-100 w-full min-h-screen gap-6 flex-wrap flex justify-center items-center">
                {productos.map((producto) => (
                    <div
                        className="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0">
                        <img src={producto.image} alt={producto.name}
                             className="h-40 object-cover rounded-xl"></img>
                        <div className="p-2">
                            <h2 className="font-bold text-lg mb-2">{producto.name}</h2>
                            <span className="text-xl font-semibold">${producto.price}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center mb-3">
                            <a href="/Product">
                                <Button
                                    label="See More"
                                    className="px-3 py-1 rounded-lg bg-gray-300 text-black hover:bg-green-600 hover:text-white"/>
                            </a>
                        </div>
                    </div>
                ))}


            </div>
        </div>

    );
};

export default Home;
