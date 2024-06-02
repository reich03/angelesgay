import React, { useState } from 'react';
import { login } from "../../Services/AuthServices.js";
import { Button } from "primereact/button";
import Header from "../../Components/header.jsx";
import {toast, ToastContainer} from "react-toastify";

const Product = () => {
    const productos = [
        { name: 'Tomate', price: 1500, image: 'src/Pages/admin/images/tomate.jpg', descripcion: 'Delicioso tomate fresco', categoria: 'Verdura' },
        { name: 'Arbejas', price: 500, image: 'src/Pages/admin/images/arbejas.jpg', descripcion: 'Arbejas verdes frescas', categoria: 'Legumbre' },
        { name: 'Lechugas', price: 700, image: 'src/Pages/admin/images/lechuga.jpg', descripcion: 'Lechuga crujiente', categoria: 'Verdura' }
    ];

    const handleFunctionClick = async () => {
        try {
            const apiResponse = await login();
            console.log(apiResponse);
            //setNombre(apiResponse.name);
        } catch (e) {
            console.log("error");
        }
    };


    function HandleClick() {
        toast.success("Compra Exitosa.");
        setTimeout(() => {
            window.location.href = "/";
        }, 1500);
    }

    return (
        <div>
            <Header></Header>
            <ToastContainer />
            <div className="p-12 bg-gray-100"></div>
            <div className="container mx-auto p-4">
                <div className="producto-detail flex flex-row justify-center items-center space-x-4">
                    <img
                        className="object-cover"
                        style={{ width: "30%", height: "auto", margin: "auto", marginLeft:"5rem"}}
                        src={productos[1].image}
                        alt={productos[1].name}
                    />
                    <div className="contenido text-center flex-1">
                        <h2 className="text-xl font-bold mb-2" style={{ fontSize: "3rem" }}>{productos[1].name}</h2><br/>
                        <p style={{ fontSize: "1.2rem" }}><strong>DESCRIPCIÓN:</strong> {productos[1].descripcion}</p><br/>
                        <p><strong>CATEGORIA:</strong> {productos[1].categoria}</p>
                        <div className="flex justify-center items-center mt-5">
                            <h2 className="mx-5">${productos[1].price}</h2>
                            <button className='p-2 bg-green-600 rounded-lg text-white' onClick={HandleClick}>
                                BUY
                            </button>

                        </div>
                    </div>
                </div>
                <hr/>
                <br/>
                <div>
                    <p className={"font-bold text-xl"} style={{fontSize: "2rem"}}>PRODRIA INTERESARTE</p><br/><br/>
                    <div className=" w-full min-h-screen gap-6 flex-wrap flex ml-2">
                        {productos.map((producto) => (
                            <div
                                style={{height: "fit-content"}}
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
            </div>
        </div>

    );
};

export default Product;
